import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import 'lib-flexible'
import './common/css/reset.css'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI); //注册mint-UI组件库

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant); //注册VantUI组件库


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
