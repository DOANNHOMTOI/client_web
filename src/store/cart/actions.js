import {config} from "../../constants/config";
import {axiosInstance} from "../../helpers/axiosInstance";

var headers = {
  'Content-Type': 'application/json',
  'X-MONMI-API': config.x_monmi_api,
}

async function getLongLatByMerchant(address, headers) {
  try {
    let obj = {
      address: {
        province_id: null,
        province_name: null,
        district_id: null,
        district_name: null,
        address: address,
        ward_id: null,
        ward_name: null,
        long: null,
        lat: null
      }
    }
    return await axiosInstance.post('/api/v1/locations/geocode', obj, {headers})
      .then(async res => {
        if (res.data.status_code == 200) {
          return res.data.data
        } else {
          return false
        }
      })
      .catch(er => {
        console.log('res getLongLatByMerchant catch', er)
        return false
      })
  } catch (error) {
    return false;
  }
}

async function getServiceId(longLat, address, headers) {
  try {
    let obj = {
      long: longLat.long,
      lat: longLat.lat,
      address: address,
      delivery: {
        status: 1,
        type: 5
      }
    }
    return await axiosInstance.post('/api/v1/deliveries/services', obj, {headers})
      .then(async res => {
      })
      .catch(er => {
        console.log('res getServiceId catch', er)
        return false
      })
  } catch (error) {
    return false;
  }
}

async function getMatrix(objMatrix, headers) {
  try {
    return await axiosInstance.post('/api/v1/deliveries/matrix', objMatrix, {headers})
      .then(async res => {
        console.log('res in getMatrix', res)
        return res
      })
      .catch(er => {
        console.log('res getMatrix catch', er)
        return false
      })
  } catch (error) {
    return false;
  }
}
function getProductByMerchant(cartDatas,merchantId){
  let arr = []
  for (let i = 0; i < cartDatas.length; i++) {
    if (cartDatas[i].merchant.id === merchantId){
      let obj = {
        product: cartDatas[i].product,
        quantity: cartDatas[i].qty,
      }
      arr.push(obj)
    }
  }
  return arr;
}
function getTotalQuantityQuantityShop(arr){
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total +=  arr[i].quantity
  }
  return total;
}
function getTotalPriceQuantityShop(arr){
  console.log('arr getTotalPriceQuantityShop', arr)
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total +=  arr[i].product.price * arr[i].quantity
  }
  return total;
}
export default {
  async actionAddToCart({commit, state}, data) {
    try {
      let listItemIncart = state.listItemInCart
      // check product isset in cart
      let issetProduct = false;
      listItemIncart.forEach(function (item, index) {
        if (data.product.id === item.product.id) {
          item.qty = item.qty + 1;
          listItemIncart[index] = item;
          issetProduct = true;
        }
      });
      if (!issetProduct) {
        listItemIncart.push({
          product: data.product,
          merchant: data.merchant,
          qty: 1
        })
      }
      sessionStorage.setItem('CARTS', JSON.stringify(listItemIncart));
      commit('SET_LIST_ITEM_IN_CART', listItemIncart)
      return 1
    } catch (error) {
      return false;
    }
  },
  async updateCart({commit, state}, data) {
    try {
      let indexItem = data.index;
      let action = data.action;
      let listItemIncart = state.listItemInCart
      if (action === 'plus') {
        listItemIncart[indexItem].qty = listItemIncart[indexItem].qty + 1
      } else {
        listItemIncart[indexItem].qty = listItemIncart[indexItem].qty - 1
      }
      sessionStorage.setItem('CARTS', JSON.stringify(listItemIncart));
      commit('SET_LIST_ITEM_IN_CART', listItemIncart)
      return 1
    } catch (error) {
      return false;
    }
  },
  async removeItemCart({commit, state}, index) {
    try {
      let listItemIncart = state.listItemInCart
      listItemIncart.splice(index, 1);
      sessionStorage.setItem('CARTS', JSON.stringify(listItemIncart));
      commit('SET_LIST_ITEM_IN_CART', listItemIncart)
      return 1
    } catch (error) {
      return false;
    }
  },

  async calculateDeliveriesMatrix({commit, state}, data) {
    let totalPriceMatrix = 0
    let merchants = [];
    let carts = data.data.cart
    for (let i = 0; i < carts.length; i++) {
      merchants.push(carts[i].merchant.id)
    }
    for (let j = 0; j < merchants.length; j++) {
      try {
        const headers = {
          'Content-Type': 'application/json',
          'X-MONMI-API': config.x_monmi_api,
        }
        let objMatrix = {
          merchant_id: merchants[j],
          address_to: data.data.addressUser,
          delivery: {
            type: 5,
            service_id: "SGN-BIKE"
          }
        }
        await getMatrix(objMatrix, headers).then(matrix => {
          console.log('res getMatrix in deliveriesMatrix', matrix)
          totalPriceMatrix += matrix.data.data.fee
          commit('SET_PRICE_MATRIX', totalPriceMatrix)
          return totalPriceMatrix;
        }).catch(e => {
          console.log(e)
          return 0;
        })
      } catch (error) {
        console.log(error)
        commit('SET_PRICE_MATRIX', 0)
        return 0
      }
    }
    return totalPriceMatrix;
  },
  async createOrder({commit, state}, data) {
    console.log('DATA TO ACTION createOrder', data)
    await commit('SHOW_LOADING', true)
    // let cartDatas = config.cartFake
    let cartDatas = data.cart
    let longLatFromAdressUser = await getLongLatByMerchant(data.addressUer, headers)
    // lấy long lat từ địa chỉ của user
    console.log('longLatFromAdressUser', longLatFromAdressUser)
    // gom các sản phẩm theo từng shop
    var shops =  []
    for (let i = 0; i < cartDatas.length; i++) {
      shops[cartDatas[i].merchant.id] = getProductByMerchant(cartDatas,cartDatas[i].merchant.id)
    }
    console.log('SHOPS', shops)
    for (let i = 0; i < Object.keys(shops).length; i++) {
      let obj = {}
      let location = {
        province_id: "",
        province_name: "",
        district_id: "",
        district_name: "",
        address: data.addressUer,
        ward_id: "",
        ward_name: "",
        lat: longLatFromAdressUser.lat,
        long: longLatFromAdressUser.long,
      }
      obj.customer = {
        id: "",
        name: data.name,
        phone: data.phone,
        email: data.email,
        location: location,
      }
      obj.location = location
      obj.delivery_config = {
        type: data.deliveryShipping
      }
      obj.order_type = data.orderType
      obj.order_method = data.orderMethod
      obj.product_tag = 1
      obj.status = 1;
      obj.shipping_fee = data.priceTotal;
      obj.merchant_id = Object.keys(shops)[i]
      obj.line_items = shops[Object.keys(shops)[i]]
      obj.quantity = getTotalQuantityQuantityShop(shops[Object.keys(shops)[i]])
      obj.total = getTotalPriceQuantityShop(shops[Object.keys(shops)[i]])

      console.log('OBJ CREATE ORDER', JSON.stringify(obj))

      return await axiosInstance.post('/api/v1/orders', obj, {headers})
        .then(async res => {
          await commit('SHOW_LOADING', false)
          if (res.data.status_code == 200) {
            return res
          } else {
            return false
          }
        })
        .catch(async er => {
          await commit('SHOW_LOADING', false)
          console.log('/api/v1/orders catch', er)
          return false
        })
    }
    await commit('SHOW_LOADING', false)
    return false;
  },
  async matrixByMerchant({commit, state}, {merchantId,addressUser}) {
    try {
      let objMatrix = {
        merchant_id: merchantId,
        address_to: addressUser,
        delivery: {
          type: 5,
          service_id: "SGN-BIKE"
        }
      }
      return await axiosInstance.post('/api/v1/deliveries/matrix', objMatrix, {headers})
        .then(async res => {
          console.log('res in matrixByMerchant', res)
          return res
        })
        .catch(er => {
          console.log('res matrixByMerchant catch', er)
          return false
        })
    } catch (error) {
      return false;
    }
  },
}
