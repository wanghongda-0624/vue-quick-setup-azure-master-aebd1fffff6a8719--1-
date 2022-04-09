English | [简体中文](./README.zh-CN.md)

<h1 align="center">Ant Design Vue Pro</h1>
<div align="center">
An out-of-box UI solution for enterprise applications as a Vue boilerplate. based on  <a href="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/" target="_blank">Ant Design of Vue</a>
</div>

<div align="center">

[![License](https://img.shields.io/npm/l/package.json.svg?style=flat)](https://github.com/vueComponent/ant-design-vue-pro/blob/master/LICENSE)
[![Release](https://img.shields.io/github/release/vueComponent/ant-design-vue-pro.svg?style=flat)](https://github.com/vueComponent/ant-design-vue-pro/releases/latest)
[![Travis branch](https://travis-ci.org/vueComponent/ant-design-vue-pro.svg?branch=master)](https://travis-ci.org/vueComponent/ant-design-vue-pro)

</div>

- Preview: https://preview.pro.antdv.com
- Home Page: https://pro.antdv.com
- Documentation: https://pro.antdv.com/docs/getting-started
- ChangeLog: https://pro.antdv.com/docs/changelog
- FAQ: https://pro.antdv.com/docs/faq

### Env and dependencies

- node
- yarn
- webpack
- eslint
- @vue/cli ~3
- [ant-design-vue](https://github.com/vueComponent/ant-design-vue) - Ant Design Of Vue 
- [vue-cropper](https://github.com/xyxiao001/vue-cropper) - Picture edit
- [@antv/g2](https://antv.alipay.com/zh-cn/index.html) - AntV G2
- [Viser-vue](https://viserjs.github.io/docs.html#/viser/guide/installation)  - Antv/G2 of Vue

> Note:  [Yarn](https://yarnpkg.com/) package management is recommended, the exact same version loaded with the demo site of this project (yarn.lock) . but you can also use npm


### Project setup

- Clone repo
```bash
git clone https://atc.bmw-brilliance.cn/bitbucket/scm/bbf44tc/babylon-vue2.git
```

- Install dependencies
```
yarn install
or
npm install
```

- Compiles and hot-reloads for development
```
yarn run serve
or
npm run serve
```

- Compiles and minifies for production
```
yarn run build
or
npm run build
```

Directory structure
<div>
  <pre>
    <code class="language-bash">
      ├── public
      │   └── logo.png             # LOGO
      |   └── index.html           # Vue template
      ├── src
      │   ├── api                  # Api ajax
      │   ├── assets               # Local static resources
      │   ├── config               # Project basic config, including routing, global settings
      │   ├── components           # common components
      │   ├── core                 # Project guidance, global config initialization, dependency package introduction, etc
      │   ├── router               # Vue-Router
      │   ├── store                # Vuex
      │   ├── utils                # Tool library
      │   ├── locales              # International resources
      │   ├── views                # Business page entry and common templates
      │   ├── App.vue              # Vue App entrance
      │   └── main.js              # Vue entrance JS
      │   └── permission.js        # Route guard(Routing permission control)
      │   └── global.less          # global style
      ├── tests                    # test tool
      ├── README.md
      └── package.json
    </code>
  </pre>
</div>

### Other

- [Vue-cli3](https://cli.vuejs.org/guide/) used by the project.

- Disable Eslint (not recommended): remove `eslintConfig`  field in `package.json`  and `vue.config.js` field `lintOnSave: false`

- Load on Demand `/src/main.js` L14, in `import './core/lazy_use'`, `import './core/use''`. more [load-on-demand.md](./docs/load-on-demand.md)

- Customize Theme:  [Custom Theme Config (@kokoroli)](https://github.com/kokoroli/antd-awesome/blob/master/docs/Ant_Design_%E6%A0%B7%E5%BC%8F%E8%A6%86%E7%9B%96.md)

- I18n: [locales (@musnow)](./src/locales/index.js)

- Production env `mock` is disabled. use `src/mock/index.js`

- pls use `release` version

## Browsers support

Modern browsers and IE10.

| </br>IE / Edge | </br>Firefox | </br>Chrome | </br>Safari | </br>Opera |
| --- | --- | --- | --- | --- |
| IE10, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |


