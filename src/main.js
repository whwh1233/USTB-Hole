import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './static/css/base.css'

import { Button } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(Button)
Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
