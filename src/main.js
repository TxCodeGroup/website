import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './filters/'
import '@/assets/styles/reset.css'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/styles/rem'
import animated from 'animate.css'
import { WOW } from "wowjs";
import 'wowjs/css/libs/animate.css';
import i18n from './i18n';
import { Pagination, Message,Dialog } from 'element-ui';
// import ElementUI from 'element-ui';


Vue.prototype.$message = Message;
Vue.prototype.$WoW = WOW
Vue.use(Pagination);
Vue.config.productionTip = false
Vue.use(animated)
Vue.use(Dialog);
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
