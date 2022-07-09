import {axiosClientAPI,axiosInstance} from "../../helpers/axiosInstance"
import router from '@/router'
export default {
  async register({commit, dispatch}, data) {
    if (data.email === '' || data.password === '' || data.repeatPassword === ''){
      dispatch('showNotification', {
        title: 'Error',
        type: 'error',
        duration: 5000,
        text: 'Vui lòng điền Email và mật khẩu để đăng ký !',
      })
      return false;
    }
    commit('SHOW_LOADING', true)
    try {
      console.log('data get', data)
      await axiosClientAPI.post('/api/register', data, {})
        .then(async (res) => {
          if (res.data.status == 201){
            await dispatch('showNotification', {
              title: 'Error',
              type: 'error',
              duration: 5000,
              text: res.data.message,
            })
          }else {
            await dispatch('showNotification', {
              title: 'Success !', type: 'success', duration: 5000, text: 'Thành Công !',
            })
            setTimeout(() => {
              router.push({ name: 'Login', params: { data }})
            }, 1500)
          }
          await commit('SHOW_LOADING', false)
      })
        .catch(error => {
          dispatch('showNotification', {
            title: 'Error',
            type: 'error',
            duration: 5000,
            text: error.response.data.message,
          })
          commit('SHOW_LOADING', false)
        })
    } catch (error) {
      commit('SHOW_LOADING', false)
      dispatch('showNotification', {
        title: 'Error',
        type: 'error',
        duration: 5000,
        text: 'Có lỗi xảy ra, vui lòng thử lại !',
      })
      return false
    }
  },
  async login({commit, dispatch}, data) {
    if (data.email === '' || data.password === ''){
      dispatch('showNotification', {
        title: 'Error',
        type: 'error',
        duration: 5000,
        text: 'Nhập Email và mật khẩu để đăng nhập !',
      })
      return false;
    }
    commit('SHOW_LOADING', true)
    try {
      await axiosClientAPI.post('/api/login', data, {})
        .then(async (res) => {
          if (res.data.status == 201){
            await dispatch('showNotification', {
              title: 'Error',
              type: 'error',
              duration: 5000,
              text: 'Đăng nhập không thành công !',
            })
          }else {
            await commit('SET_TOKEN_LOCAL_STORAGE', {res, data});
            setTimeout(() => {
              location.href = '/'
            }, 500)
          }
          await commit('SHOW_LOADING', false)
        })
        .catch(error => {
          dispatch('showNotification', {
            title: 'Error',
            type: 'error',
            duration: 5000,
            text: 'Đăng nhập không thành công !',
          })
          commit('SHOW_LOADING', false)
        })
    } catch (error) {
      commit('SHOW_LOADING', false)
      dispatch('showNotification', {
        title: 'Error',
        type: 'error',
        duration: 5000,
        text: 'Có lỗi xảy ra, vui lòng thử lại !',
      })
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
      let endPoint = '/api/web/productFilter';
      if(data.category_id !== undefined && data.category_id != null){
        endPoint += '?category_id=' + parseInt(data.category_id);
        if(data.minPrice !== undefined && data.minPrice != null){
          endPoint += `&minPrice=${data.minPrice}&maxPrice=${data.maxPrice}`;
        }
      }
      else {
        if(data.minPrice !== undefined && data.minPrice != null){
          endPoint += `?minPrice=${data.minPrice}&maxPrice=${data.maxPrice}`;
        }
      }

      return await axiosInstance.get(endPoint,{headers : headers}).then(r => {
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
