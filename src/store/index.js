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
      let isLogin = localStorage.getItem('IS_LOGIN');
      if(isLogin) {
        return true;
      } else {
        if (state.isLogin) return true
        else return false
      }
    },
    getInfoLogin: state => {
      return state.currentUser
    },
    getInfoUser: state => {
      return localStorage.getItem('USER_INFO') || state.currentUser
    }
  },
  mutations: {
    SHOW_LOADING: (state, flag = false) => {
      state.isLoading = flag
    },
    SHOW_DROPDOWN_CART: (state, flag = false) => {
      state.isShowDropDown = flag
    },
    SET_LOGIN_INFO(state, payload) {
      localStorage.setItem('USER_INFO', payload);
      localStorage.setItem('IS_LOGIN', "1");
      state.ACCESS_TOKEN = JSON.stringify(payload);
      state.currentUser = payload
    },
    LOG_OUT(state,payload){
      localStorage.removeItem('USER_INFO');
      localStorage.removeItem('IS_LOGIN');
      state.ACCESS_TOKEN = ''
      state.currentUser = ''
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
