import {config} from "../../constants/config";
import {axiosInstance} from "../../helpers/axiosInstance"
import router from '@/router'

export default {
  async getListMerchant({commit, state}, {}) {
    try {
      var result;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async getMerchant({commit, state}, data) {
    try {
      console.log('getMerchant id', data.id)
      const headers = {
        'Content-Type': 'application/json',
        'X-MONMI-API': config.x_monmi_api,
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk2N2FmYmI0NGExNWQ2ZjVhZTA2ZGEiLCJwYXNzd29yZCI6IiQyYiQwNyRHSlJLUkd0TS9TNndnVmlSbFdDSFJlZHVsT3NyYmZwRXc3R2t0SWdURXZIczZqQWZydDZHeSIsImxvY2F0aW9uIjp7ImFkZHJlc3MiOiIxMjMiLCJkaXN0cmljdElkIjoxLCJwcm92aW5jZUlkIjoxLCJjcmVhdGVkX2F0IjoiMjAyMS0xMS0xOFQxNjoxMDozNS40NDNaIiwidXBkYXRlZF9hdCI6IjIwMjEtMTEtMThUMTY6MTA6MzUuNDQzWiJ9LCJzdGF0dXMiOjEsImlzVmVyaWZpZWQiOjEsImRlc2NyaXB0aW9uIjoiZG9uZSIsInBob25lIjoiKzg0ODg4ODIwMDIwIiwiZW1haWwiOiJzc3NAZ21haWwuY29tIiwibmFtZSI6Imx1IGtoYW5oIGR1eSIsImNyZWF0ZWRfYXQiOiIyMDIxLTExLTE4VDE2OjEwOjM1LjQ0M1oiLCJ1cGRhdGVkX2F0IjoiMjAyMS0xMS0xOFQxNjoxMDozNS40NDNaIiwiY29kZSI6MSwiX192IjowLCJpYXQiOjE2MzcyNTU2MTIsImV4cCI6NTIzNzI1NTYxMn0.oAcfeNM6hYb4s2lVlDRGAgNrIaTfW9n67TOjV51L6VI`,
      }
      return await axiosInstance.post('/api/v1/merchants/61c5dfece6e6f4ccce8c7439', {}, {headers})
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async getShopBySearch({commit, state}, address) {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'X-MONMI-API': config.x_monmi_api,
      }
      let data = {
        "location": {
          "province_id": 269,
          "province_name": "TPHCM",
          "district_id": 2264,
          "district_name": "quan 10",
          "address": "123",
          "ward_id": 80213,
          "ward_name": "phuong 10"
        }
      }
      return await axiosInstance.post('/api/v1/merchants/filters', data, {headers})
    } catch (error) {
      console.log(error)
      return false
    }
  },
  async getLocationSearch({commit, state}, str) {
    try {
      console.log('str', str)
      const headers = {
        'Content-Type': 'application/json',
        'X-MONMI-API': config.x_monmi_api,
      }
      return await axiosInstance.get('/api/v1/locations/search?search=' + str, {headers})
    } catch (error) {
      return false
    }
  },
  async getMerchantFilter({commit, state}, address) {
    try {
      commit('SHOW_LOADING',true)
      const headers = {
        'Content-Type': 'application/json',
        'X-MONMI-API': config.x_monmi_api,
      }
      await axiosInstance.post('/api/v1/merchants/filters', {search: address,global_category_ids:[],area_category_ids:[],category_ids:[]}, {headers})
        .then(async res => {
          commit('SHOW_LOADING',false)
          if (res.data.status_code == 200){
            let arrData = res.data.data
            for (let i = 0; i < arrData.length; i++) {
              let category = arrData[i];
              let typeRequestCate = 'categories'
              let typeValueCate = category.category_ids
              let categoryInfoByMerchant;
              if (category.global_category_ids != null && category.global_category_ids.length > 0 ){
                typeRequestCate = 'global-categories'
                typeValueCate = category.global_category_ids
              }
              if (category.area_category_ids != null && category.area_category_ids.length > 0){
                typeRequestCate = 'area-categories'
                typeValueCate = category.area_category_ids
              }
              await axiosInstance.post(`/api/v1/${typeRequestCate}/filter`, {"category_ids" : typeValueCate},{headers})
                .then(res=>{
                  console.log('categories filter', res.data.data)
                  categoryInfoByMerchant = res.data.data.length > 0 ? res.data.data[0] : ''
                }).catch(e=>{
                  console.log('e categories filter', e)
                })
              // console.log('categoryInfoByMerchant', categoryInfoByMerchant)
              arrData[i].categoryInfo = categoryInfoByMerchant
            }
            console.log('MERCHANT FILTER', arrData)
            await commit('SET_LIST_MERCHANT_FILTER_SEARCH', arrData)
          }else {
            await commit('SET_LIST_MERCHANT_FILTER_SEARCH', [])
          }
        })
        .catch(er => {
          commit('SHOW_LOADING',false)
          console.log('res catch', er)
          commit('SET_LIST_MERCHANT_FILTER_SEARCH', [])
          return false
        })

    } catch (error) {
      commit('SHOW_LOADING',false)
      commit('SET_LIST_MERCHANT_FILTER_SEARCH', [])
      return false
    }
  },
  async getMerchantDetail({commit, state}, slug) {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'X-MONMI-API': config.x_monmi_api,
      }
      return await axiosInstance.get('/api/v1/merchants/' + slug + '?is_get_product=true', {headers})
    } catch (error) {
      return false
    }
  },
  async setAddressUSer({commit, state}, str) {
    console.log('setAddressUSer', str)
    commit('SET_ADDRESS_USER', str)
    return 1;
  },
  async getCategoryByMerchant({commit, state}, {typeCategory,category}) {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'X-MONMI-API': config.x_monmi_api,
      }
      return  await axiosInstance.post(`/api/v1/${typeCategory}/filter`, {"category_ids" : category},{headers})
        .then(res=>{
          return 'TAIBV';
        }).catch(e=>{
          return 'TAIBV';
        })
    } catch (error) {
      console.log('error', error)
      return 'TAIBV';
    }
  },
}
