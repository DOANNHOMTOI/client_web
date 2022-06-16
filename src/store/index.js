import Vue from 'vue'
import Vuex from 'vuex'

import moduleMerchant from './merchants';
import moduleProduct from './products';
import moduleUser from './users';
import moduleCart from './cart';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoading: false,
    ACCESS_TOKEN: '',
    currentUser: '',
    isLogin: false,
    isShowDropDown: false
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    showNotification({commit, dispatch}, data) {
      Vue.notify({
        title: data.title,
        type: data.type,
        duration: data.duration,
        text: data.text,
      })
    },
  },
  getters:{
    getStatusLogin: state => {
      let isLogin = state.isLogin;
      if(isLogin) {
        return true;
      } else {
        return false;
      }
    },
    getInfoLogin: state => {
      return state.currentUser
    }
  },
  mutations: {
    SHOW_LOADING: (state, flag = false) => {
      state.isLoading = flag
    },
    SHOW_DROPDOWN_CART: (state, flag = false) => {
      state.isShowDropDown = flag
    },
    SET_TOKEN_LOCAL_STORAGE(state, payload) {
      console.log('payload', payload)
      console.log('state', state)
      localStorage.setItem('ACCESS_TOKEN', payload.res.data.token);
      localStorage.setItem('USER_INFO', payload.data.email);
      state.ACCESS_TOKEN = payload.res.data.token;
      state.currentUser = payload.data.email
    },
    SET_LOGIN_INFO(state, payload) {
      localStorage.setItem('ACCESS_TOKEN', payload.accessToken);
      localStorage.setItem('USER_INFO', payload.user);
      state.ACCESS_TOKEN = payload.accessToken;
      state.currentUser = payload.user
    },
    SET_STATUS_LOGIN(state, payload){
      state.isLogin = true;
    }
  },
  modules: {
    moduleMerchant, moduleProduct, moduleUser, moduleCart
  }
});

export default store;
