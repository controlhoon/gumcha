import Vue from 'vue';
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from './App.vue';
import router from './router';
import store from './store/index';
import axios from "axios";
import * as block from "./components/blockchain/blockchain"
import "./layout.css";
import moment from "moment";
import VueMomentJS from "vue-momentjs";
import VueCookies from 'vue-cookies';

Vue.use(Antd);
Vue.use(VueMomentJS, moment);
Vue.use(VueCookies);

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.$block = block;
Vue.prototype.$cookies = VueCookies;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
