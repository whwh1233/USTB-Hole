import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './static/css/base.css'
import './static/js/vantin'
import {request} from './network/request'


request({
  url:'/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

// const instance1 = axios.create({
//   baseURL:'http://152.136.185.210:8000/api/z8/',
//   timeout:5000
// })
// instance1({
//   url:'/home/multidata',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   // console.log(res)
// })


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
