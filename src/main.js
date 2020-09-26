import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import './static/css/base.css'
import './static/js/vantin'

import moment from 'moment'

Vue.filter('dateFormat', function (dateStr,pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dateStr).format(pattern);
})





Vue.config.productionTip = false
const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  htmlDom.style.fontSize = `${htmlWidth / 7.5}px`;
};
window.onresize = setHtmlFontSize;

setHtmlFontSize();

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
