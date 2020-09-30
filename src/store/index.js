import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentID:0,
    messageDetail:{},
    replyDetail:[],
    name:['Alice','Bob','Carol','Dave','Eve','Francis','Grace','Hans','Isabella','Jason','Kate','Louis','Margaret','Nathan',
      'Olivia','Paul','Richard','Susan','Thomas','Uma','Vivian','Winnie','Xander','Yasmine','Zach'],
    currentUser:'',
    isLogin:false,
    token:sessionStorage.getItem('userToken')?sessionStorage.getItem('userToken'):""
  },
  mutations:{
    changeLogin(state,userToken) {
      state.token = userToken.token
    },
    autoTran(state,userData) {
      state.isLogin = true
      state.currentUser = userData.userData.username
    },
    changeMessage(state,message) {
      state.messageDetail = message

    },
    changeReply(state,reply) {
      state.replyDetail = reply
    }

  },
  
})
