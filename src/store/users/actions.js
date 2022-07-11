import {axiosClientAPI,axiosInstance} from "../../helpers/axiosInstance"
import router from '@/router'
export default {
  async register({commit, dispatch}, data) {
    try {
      console.log('data get', data)
      return await axiosInstance.post('/api/web/user/register', data, {})
        .then(async (res) => {
          return res
        })
        .catch(error => {
          console.log(error)
          return false;
        })
    } catch (error) {
      console.log(error)
      return false
    }
  },
  async login({commit, dispatch}, data) {
    try {
      return await axiosInstance.post('/api/web/user/login', data, {})
        .then(async (res) => {
          return res
        })
        .catch(error => {
         return false
        })
    } catch (error) {
      return false
    }
  },
  async checkLogin({commit, dispatch}) {
    try {
      let user = localStorage.getItem('USER_INFO');
      let accessToken = localStorage.getItem('ACCESS_TOKEN');
      let data = {user,accessToken}
      if(user != null && accessToken != null) {
        commit('SET_LOGIN_INFO', data);
        commit('SET_STATUS_LOGIN', true);
        return true
      }else return false;
    } catch (error) {
      return false;
    }
  },
  async getListProductCategory({commit, state}, currPage) {
    try {
      const headers = {Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')};
      commit('SHOW_LOADING', true);
      console.log('currPage', currPage)
      return await axiosInstance.get(`/api/web/product-category?page=${currPage}`,{headers : headers}).then(r => {
        commit('SHOW_LOADING', false);
        return r
      })
        .catch(e => {
          commit('SHOW_LOADING', false);
          console.log(e)
        });

    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async checkVoucher({commit, state}, code) {
    try {
      const headers = {Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')};
      commit('SHOW_LOADING', true);
      return await axiosInstance.get(`/api/web/checkVoucher/${code}`,{headers : headers}).then(r => {
        commit('SHOW_LOADING', false);
        return r
      })
        .catch(e => {
          commit('SHOW_LOADING', false);
          console.log(e)
        });

    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async createOrderAPI({commit, state}, data) {
    try {
      const headers = {Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')};
      commit('SHOW_LOADING', true);
      return await axiosInstance.post(`/api/web/order`,data,{headers : headers}).then(r => {
        commit('SHOW_LOADING', false);
        return r
      })
        .catch(e => {
          commit('SHOW_LOADING', false);
          console.log(e)
        });

    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async getListProductNew({commit, state}, data) {
    try {
      const headers = {Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')};
      return await axiosInstance.get(`/api/web/productNews`,{headers : headers}).then(r => {
        commit('SHOW_LOADING', false);
        return r
      })
        .catch(e => {
          commit('SHOW_LOADING', false);
          console.log(e)
        });

    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async getListProductCare({commit, state}, data) {
    try {
      let str = JSON.parse(data).join(",")
      const headers = {Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')};
      return await axiosInstance.get(`/api/web/productCare?categories=${str}`,{headers : headers}).then(r => {
        commit('SHOW_LOADING', false);
        return r
      })
        .catch(e => {
          commit('SHOW_LOADING', false);
          console.log(e)
        });

    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async getDetailProduct({commit, state}, data) {
    try {
      const headers = {Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')};
      return await axiosInstance.get(`/api/web/productDetail/${data}`,{headers : headers}).then(r => {
        commit('SHOW_LOADING', false);
        return r
      })
        .catch(e => {
          commit('SHOW_LOADING', false);
          console.log(e)
        });

    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async filterProduct({commit, state}, data) {
    try {
      const headers = {Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')};
      // commit('SHOW_LOADING', true);
      console.log('data filterProduct', data)
      var bodyFormData = new FormData();

      let endPoint = '/api/web/productFilter';
      if(data.name !== undefined && data.name != null){
        bodyFormData.append('name', data.name);
      }
      if(data.category_id !== undefined && data.category_id != null){
        bodyFormData.append('category_id', data.category_id);
      }
      if(data.minPrice !== undefined && data.minPrice != null){
        bodyFormData.append('minPrice', data.minPrice);
        bodyFormData.append('maxPrice', data.maxPrice);
      }

      return await axiosInstance.post(endPoint,bodyFormData,{headers : headers}).then(r => {
        commit('SHOW_LOADING', false);
        return r
      })
        .catch(e => {
          commit('SHOW_LOADING', false);
          console.log(e)
        });

    } catch (error) {
      console.log(error);
      return false;
    }
  },
}
