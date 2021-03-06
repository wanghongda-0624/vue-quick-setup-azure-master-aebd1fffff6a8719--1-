[English](./README.md) | 简体中文

<h1 align="center">Ant Design Vue Pro</h1>
<div align="center">
An out-of-box UI solution for enterprise applications as a Vue boilerplate. based on  <a href="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/" target="_blank">Ant Design of Vue</a>
</div>

<div align="center">

[![License](https://img.shields.io/npm/l/package.json.svg?style=flat)](https://github.com/vueComponent/ant-design-vue-pro/blob/master/LICENSE)
[![Release](https://img.shields.io/github/release/vueComponent/ant-design-vue-pro.svg?style=flat)](https://github.com/vueComponent/ant-design-vue-pro/releases/latest)
[![Travis branch](https://travis-ci.org/vueComponent/ant-design-vue-pro.svg?branch=master)](https://travis-ci.org/vueComponent/ant-design-vue-pro)

</div>

- 预览: https://preview.pro.antdv.com
- 首页: https://pro.antdv.com
- 文档: https://pro.antdv.com/docs/getting-started
- 更新日志: https://pro.antdv.com/docs/changelog
- 常见问题: https://pro.antdv.com/docs/faq

环境和依赖
----

- node
- yarn or npm
- webpack
- eslint
- @vue/cli ~3
- [ant-design-vue](https://github.com/vueComponent/ant-design-vue) - Ant Design Of Vue 实现
- [vue-cropper](https://github.com/xyxiao001/vue-cropper) - 头像裁剪组件
- [@antv/g2](https://antv.alipay.com/zh-cn/index.html) - Alipay AntV 数据可视化图表
- [Viser-vue](https://viserjs.github.io/docs.html#/viser/guide/installation)  - antv/g2 封装实现

> 请注意，我们强烈建议本项目使用 [Yarn](https://yarnpkg.com/) 包管理工具，这样可以与本项目演示站所加载完全相同的依赖版本 (yarn.lock) 。由于我们没有对依赖进行强制的版本控制，采用非 yarn 包管理进行引入时，可能由于 Pro 所依赖的库已经升级版本而引入了新版本所导致的问题。作者可能会由于时间问题无法及时排查而导致您采用本项目作为基项目而出现问题。



项目下载和运行
----

- 拉取项目代码
```bash
git clone https://atc.bmw-brilliance.cn/bitbucket/scm/bbf44tc/babylon-vue2.git
```

- 安装依赖
```
yarn install
or
npm install
```

- 开发模式运行
```
yarn run serve
or
npm run serve
```

- 编译项目
```
yarn run build
or
npm run build
```

目录结构
<div>
  <pre>
    <code class="language-bash">
      ├── public
      │   └── logo.png             # LOGO
      |   └── index.html           # Vue 入口模板
      ├── src
      │   ├── api                  # Api ajax 等
      │   ├── assets               # 本地静态资源
      │   ├── config               # 项目基础配置，包含路由，全局设置
      │   ├── components           # 业务通用组件
      │   ├── core                 # 项目引导, 全局配置初始化，依赖包引入等
      │   ├── router               # Vue-Router
      │   ├── store                # Vuex
      │   ├── utils                # 工具库
      │   ├── locales              # 国际化资源
      │   ├── views                # 业务页面入口和常用模板
      │   ├── App.vue              # Vue 模板入口
      │   └── main.js              # Vue 入口 JS
      │   └── permission.js        # 路由守卫(路由权限控制)
      │   └── global.less          # 全局样式
      ├── tests                    # 测试工具
      ├── README.md
      └── package.json
    </code>
  </pre>
</div>

其他说明
----

- 项目使用的 [vue-cli3](https://cli.vuejs.org/guide/), 请确保你所使用的 vue-cli 是新版，并且已经学习 cli 官方文档使用教程

- 关闭 Eslint (不推荐) 移除 `package.json` 中 `eslintConfig` 整个节点代码, `vue.config.js` 下的 `lintOnSave` 值改为 `false`

- 组件按需加载 `/src/main.js` L14 相关代码 `import './core/lazy_use'` / `import './core/use'` 

- [修改 Ant Design 配色 (@kokoroli)](https://github.com/kokoroli/antd-awesome/blob/master/docs/Ant_Design_%E6%A0%B7%E5%BC%8F%E8%A6%86%E7%9B%96.md)

- I18n: [多语言支持 (@musnow)](./src/locales/index.js)

- 生成环境默认不加载 `mock`，更多详情请看 `src/mock/index.js`


## 浏览器兼容

Modern browsers and IE10.

| </br>IE / Edge | </br>Firefox | </br>Chrome | </br>Safari | </br>Opera |
| --- | --- | --- | --- | --- |
| IE10, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |


