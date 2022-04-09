import router from './router'
import store from './store'
import storage from 'store'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style
import notification from 'ant-design-vue/es/notification'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { i18nRender } from '@/locales'
import { getSSOUrl } from '@/utils/SSOUtil'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['login', 'register', 'registerResult'] // no redirect whitelist
const loginRoutePath = '/user/login'
const defaultRoutePath = '/dashboard/workplace'

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${i18nRender(to.meta.title)} - ${domTitle}`))

  function GetRequest() { //从地址栏获取code
    var reg = new RegExp("(^|&)"+ 'code' +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
      return  unescape(r[2]); return null
  }
  let code = GetRequest() //获取到地址栏的code

  /* has token */
  if (storage.get(ACCESS_TOKEN)) {
    // check login user.roles is null
    if (store.getters.roles.length === 0) {
      // request login userInfo
      store
        .dispatch('GetInfo')
        .then(res => {
          const permissionList = res.data.permissionList
          // generate dynamic router
          store.dispatch('GenerateRoutes', permissionList).then(() => {
            // 根据roles权限生成可访问的路由表
            // 动态添加可访问路由表
            router.addRoutes(store.getters.addRouters)
            // 请求带有 redirect 重定向时，登录自动重定向到该地址
            const redirect = decodeURIComponent(from.query.redirect || to.path)
            if (to.path === redirect) {
              // set the replace: true so the navigation will not leave a history record
              next({ ...to, replace: true })
              NProgress.done()
            } else {
              // 跳转到目的路由
              next({ path: redirect })
              NProgress.done()
            }
          })
        })
        .catch(() => {
          // 失败时，获取用户信息失败时，调用登出，来清空历史保留信息
          store.dispatch('Logout').then(() => {
            window.location = getSSOUrl(to.fullPath)
            NProgress.done()
          })
        })
    } else {
      next()
    }
  } else if (code) {
    store.dispatch('ssoLogin', code).then(res => {
      next({ path: defaultRoutePath })
      NProgress.done()
    })
  } else {
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next()
      NProgress.done()
    } else {
      window.location = getSSOUrl(to.fullPath)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
