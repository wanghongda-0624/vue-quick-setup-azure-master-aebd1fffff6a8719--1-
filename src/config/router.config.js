// eslint-disable-next-line
import { UserLayout,UserMainLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'
import { i18nRender } from '@/locales'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

const PermissionTree = []

export function getPermissionTree() {
  if(PermissionTree.length === 0) {
    asyncRouterMap.forEach((item, index) => {
      let node = getNode(item)
      if (node) {
        PermissionTree.push(node)
      }
    })
  }
  return PermissionTree
}

function getNode(parent) {
  let result = {}
  if ((parent.type && parent.type === 'root') || (parent.meta && parent.meta.permission)) {
    if (parent.meta.permission){
      result.key = parent.meta.permission.id
    } else {
      result.key = parent.type
    }
    result.title = i18nRender(parent.meta.title)
    if (parent.children && parent.children.length > 0){
      result.children = []
      parent.children.forEach((item, index) => {
        let node = getNode(item)
        if (node) {
          result.children.push(node)
        }
      })
    }
  } else {
    return null
  }
  return result
}

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    type: 'root',
    redirect: '/dashboard/workplace',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse },
        children: [
          {
            path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
            name: 'Analysis',
            component: () => import('@/views/dashboard/Analysis'),
            meta: { title: 'menu.dashboard.analysis', keepAlive: false }
          },
          // 外部链接
          {
            path: 'https://www.antdv.com/components/icon-cn/',
            name: 'ICON',
            meta: { title: 'menu.dashboard.ICON', target: '_blank'}
          },
          {
            path: '/dashboard/workplace',
            name: 'Workplace',
            component: () => import('@/views/dashboard/Workplace'),
            meta: { title: 'menu.dashboard.workplace', keepAlive: true }
          }
        ]
      },

      // forms
      {
        path: '/form',
        redirect: '/form/base-form',
        component: RouteView,
        meta: { title: 'menu.form', icon: 'form'},
        children: [
          {
            path: '/form/base-form',
            name: 'BaseForm',
            component: () => import('@/views/form/basicForm'),
            meta: { title: 'menu.form.basic', keepAlive: true}
          },
          {
            path: '/form/step-form',
            name: 'StepForm',
            component: () => import('@/views/form/stepForm/StepForm'),
            meta: { title: 'menu.form.step', keepAlive: true}
          },
          {
            path: '/form/advanced-form',
            name: 'AdvanceForm',
            component: () => import('@/views/form/advancedForm/AdvancedForm'),
            meta: { title: 'menu.form.advanced', keepAlive: true}
          }
        ]
      },

      // list
      {
        path: '/list',
        name: 'list',
        component: RouteView,
        redirect: '/list/table-list',
        meta: { title: 'menu.table', icon: 'table'},
        children: [
          {
            path: '/list/table-list/:pageNo([1-9]\\d*)?',
            name: 'TableListWrapper',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: 'menu.table.query', keepAlive: true}
          },
          {
            path: '/list/basic-list',
            name: 'BasicList',
            component: () => import('@/views/list/BasicList'),
            meta: { title: 'menu.table.standard', keepAlive: true}
          },
          {
            path: '/list/card',
            name: 'CardList',
            component: () => import('@/views/list/CardList'),
            meta: { title: 'menu.table.card', keepAlive: true}
          },
          {
            path: '/list/search',
            name: 'SearchList',
            component: () => import('@/views/list/search/SearchLayout'),
            redirect: '/list/search/article',
            meta: { title: 'menu.table.search', keepAlive: true},
            children: [
              {
                path: '/list/search/article',
                name: 'SearchArticles',
                component: () => import('../views/list/search/Article'),
                meta: { title: 'menu.table.search.article'}
              },
              {
                path: '/list/search/project',
                name: 'SearchProjects',
                component: () => import('../views/list/search/Projects'),
                meta: { title: 'menu.table.search.project'}
              },
              {
                path: '/list/search/application',
                name: 'SearchApplications',
                component: () => import('../views/list/search/Applications'),
                meta: { title: 'menu.table.search.application'}
              }
            ]
          }
        ]
      },

      // profile
      {
        path: '/profile',
        name: 'profile',
        component: RouteView,
        redirect: '/profile/basic',
        meta: { title: 'menu.profile', icon: 'profile'},
        children: [
          {
            path: '/profile/basic',
            name: 'ProfileBasic',
            component: () => import('@/views/profile/basic'),
            meta: { title: 'menu.profile.basic'}
          },
          {
            path: '/profile/advanced',
            name: 'ProfileAdvanced',
            component: () => import('@/views/profile/advanced/Advanced'),
            meta: { title: 'menu.profile.advanced'}
          }
        ]
      },

      // result
      {
        path: '/result',
        name: 'result',
        component: RouteView,
        redirect: '/result/success',
        meta: { title: 'menu.result', icon: 'check-circle-o'},
        children: [
          {
            path: '/result/success',
            name: 'ResultSuccess',
            component: () => import(/* webpackChunkName: "result" */ '@/views/result/Success'),
            meta: { title: 'menu.result.success', keepAlive: false, hiddenHeaderContent: true}
          },
          {
            path: '/result/fail',
            name: 'ResultFail',
            component: () => import(/* webpackChunkName: "result" */ '@/views/result/Error'),
            meta: { title: 'menu.result.failed', keepAlive: false, hiddenHeaderContent: true}
          }
        ]
      },

      // Exception
      {
        path: '/exception',
        name: 'exception',
        component: RouteView,
        redirect: '/exception/403',
        meta: { title: 'menu.exception', icon: 'warning'},
        children: [
          {
            path: '/exception/403',
            name: 'Exception403',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
            meta: { title: '403'}
          },
          {
            path: '/exception/404',
            name: 'Exception404',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
            meta: { title: '404'}
          },
          {
            path: '/exception/500',
            name: 'Exception500',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
            meta: { title: '500'}
          },
          {
            path: '/exception/lineNoData',
            name: 'ExceptionLineNoData',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/lineNoData'),
            meta: { title: 'lineNoData'}
          },
          {
            path: '/exception/noData1',
            name: 'ExceptionNoData1',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/noData1'),
            meta: { title: 'noData1'}
          },
          {
            path: '/exception/noData2',
            name: 'ExceptionNoData2',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/noData2'),
            meta: { title: 'noData2'}
          },
          {
            path: '/exception/chartNoData',
            name: 'ExceptionChartNoData',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/chartNoData'),
            meta: { title: 'chartNoData'}
          },
          {
            path: '/exception/searchNoData',
            name: 'ExceptionSearchNoData',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/searchNoData'),
            meta: { title: 'searchNoData'}
          }

        ]
      },

      // account
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        meta: { title: 'menu.account', icon: 'user', keepAlive: true},
        children: [
          {
            path: '/account/center',
            name: 'center',
            component: () => import('@/views/account/center'),
            meta: { title: 'menu.account.center', keepAlive: true }
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('@/views/account/settings/Index'),
            meta: { title: 'menu.account.settings', hideHeader: true},
            redirect: '/account/settings/base',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/account/settings/base',
                name: 'BaseSettings',
                component: () => import('@/views/account/settings/BaseSetting'),
                meta: { title: '基本设置', hidden: true}
              },
              {
                path: '/account/settings/security',
                name: 'SecuritySettings',
                component: () => import('@/views/account/settings/Security'),
                meta: { title: '安全设置', hidden: true, keepAlive: true}
              },
              {
                path: '/account/settings/custom',
                name: 'CustomSettings',
                component: () => import('@/views/account/settings/Custom'),
                meta: { title: '个性化设置', hidden: true, keepAlive: true}
              },
              {
                path: '/account/settings/binding',
                name: 'BindingSettings',
                component: () => import('@/views/account/settings/Binding'),
                meta: { title: '账户绑定', hidden: true, keepAlive: true }
              },
              {
                path: '/account/settings/notification',
                name: 'NotificationSettings',
                component: () => import('@/views/account/settings/Notification'),
                meta: { title: '新消息通知', hidden: true, keepAlive: true}
              }
            ]
          }
        ]
      },

      // doc
      {
        path: '/docs',
        name: 'docs',
        component: RouteView,
        redirect: '/docs/button',
        meta: { title: 'menu.document', icon: 'code' },
        children: [
          {
            path: '/docs/button',
            name: 'DocsButton',
            component: () => import('@/views/docs/button.vue'),
            meta: { title: 'menu.document.button', keepAlive: false, hiddenHeaderContent: true}
          },
          {
            path: '/docs/spin',
            name: 'DocsSpin',
            component: () => import('@/views/docs/spin.vue'),
            meta: { title: 'menu.document.spin', keepAlive: false, hiddenHeaderContent: true}
          },
          // {
          //   path: '/docs/list',
          //   name: 'DocsList',
          //   component: () => import('@/views/docs/list.vue'),
          //   meta: { title: 'menu.document.list', keepAlive: false, hiddenHeaderContent: true}
          // },
          {
            path: '/docs/input',
            name: 'DocsInput',
            component: () => import('@/views/docs/input.vue'),
            meta: { title: 'menu.document.input', keepAlive: false, hiddenHeaderContent: true}
          },
          {
            path: '/docs/select',
            name: 'DocsSelect',
            component: () => import('@/views/docs/select.vue'),
            meta: { title: 'menu.document.select', keepAlive: false, hiddenHeaderContent: true}
          },
          {
            path: '/docs/message',
            name: 'DocsMessage',
            component: () => import('@/views/docs/message.vue'),
            meta: { title: 'menu.document.message', keepAlive: false, hiddenHeaderContent: true}
          },
          {
            path: '/docs/upload',
            name: 'DocsUpload',
            component: () => import('@/views/docs/upload.vue'),
            meta: { title: 'menu.document.upload', keepAlive: false, hiddenHeaderContent: true}
          }
        ]
      },

      {
        path: '/rbac',
        name: 'RBAC',
        component: RouteView,
        meta: { title: 'menu.rbac', icon: 'slack', permission: { id: '1009'} },
        redirect: '/rbac/user-list',
        children: [
          {
            path: '/rbac/user-list',
            name: 'UserList',
            component: () => import('@/views/rbac/user/UserList'),
            meta: { title: 'menu.rbac.user', keepAlive: true, permission: { id: '100901'} },
            children: [
              {
                type: 'button',
                path: '',
                meta:  {title: 'menu.rbac.user', permission: { id: '10090101'}}
              }
            ]
          },
          {
            path: '/rbac/role-list',
            name: 'RoleList',
            component: () => import('@/views/rbac/role/RoleList'),
            meta: { title: 'menu.rbac.role', keepAlive: true, permission: { id: '100902'} }
          },
          {
            path: '/rbac/permission-list',
            name: 'PermissionList',
            component: () => import('@/views/rbac/permission/PermissionList'),
            meta: { title: 'menu.rbac.permission', keepAlive: true, permission: { id: '100903'} }
          }
        ]
      },
      // other
      /*
      {
        path: '/other',
        name: 'otherPage',
        component: PageView,
        meta: { title: '其他组件', icon: 'slack', permission: [ 'dashboard' ] },
        redirect: '/other/icon-selector',
        children: [
          {
            path: '/other/icon-selector',
            name: 'TestIconSelect',
            component: () => import('@/views/other/IconSelectorView'),
            meta: { title: 'IconSelector', icon: 'tool', keepAlive: true, permission: [ 'dashboard' ] }
          },
          {
            path: '/other/list',
            component: RouteView,
            meta: { title: '业务布局', icon: 'layout', permission: [ 'support' ] },
            redirect: '/other/list/tree-list',
            children: [
              {
                path: '/other/list/tree-list',
                name: 'TreeList',
                component: () => import('@/views/other/TreeList'),
                meta: { title: '树目录表格', keepAlive: true }
              },
              {
                path: '/other/list/edit-table',
                name: 'EditList',
                component: () => import('@/views/other/TableInnerEditList'),
                meta: { title: '内联编辑表格', keepAlive: true }
              },
              {
                path: '/other/list/user-list',
                name: 'UserList',
                component: () => import('@/views/other/UserList'),
                meta: { title: '用户列表', keepAlive: true }
              },
              {
                path: '/other/list/role-list',
                name: 'RoleList',
                component: () => import('@/views/other/RoleList'),
                meta: { title: '角色列表', keepAlive: true }
              },
              {
                path: '/other/list/system-role',
                name: 'SystemRole',
                component: () => import('@/views/role/RoleList'),
                meta: { title: '角色列表2', keepAlive: true }
              },
              {
                path: '/other/list/permission-list',
                name: 'PermissionList',
                component: () => import('@/views/other/PermissionList'),
                meta: { title: '权限列表', keepAlive: true }
              }
            ]
          }
        ]
      }
      */
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/user',
    component: UserMainLayout,
    redirect: '/user/mainLogin',
    hidden: true,
    children: [
      {
        path: 'mainLogin',
        name: 'mainLogin',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/LoginMain')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },


  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]

getPermissionTree()
