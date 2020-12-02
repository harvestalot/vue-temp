import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    token: sessionStorage.getItem('token') || '',
    username: sessionStorage.getItem('username') || ''
  },
  mutations:{
    setToken(state, token){
      sessionStorage.setItem('token', token)
      state.token = token
    },
    setUsername(state, name){
      sessionStorage.setItem('username', name)
      state.username = name
    },
    clearUserInfo(state){
      state.token = '';
      state.username = '';
      sessionStorage.clear()
    }
  },
  actions:{

  },
  
})

export default store;