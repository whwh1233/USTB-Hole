import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentID:0,
    messageDetail:{},
    replyDetail:[],
    isLogin:false,
    name:['Alice','Bob','Carol','Dave','Eve','Francis','Grace','Hans','Isabella','Jason','Kate','Louis','Margaret','Nathan',
      'Olivia','Paul','Richard','Susan','Thomas','Uma','Vivian','Winnie','Xander','Yasmine','Zach'],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
