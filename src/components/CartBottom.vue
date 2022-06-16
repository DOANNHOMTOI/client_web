<template>
  <div v-if="getterListItemInCart.length > 0" class="cart-bottom">
    <div class="content-cart-bottom container">
      <div class="num-product">
        <img class="img-cart-bottom" src="/static/images/red_shoppictbasket_1484336512-1.png" alt="">
        <p class="txt-cart-bottom"><span class="text-hidemobie">Sản phẩm đã chọn mua : </span><b>{{ countItemCart() }}</b> món</p>
      </div>
      <div class="price" style="padding-top:0 ">
        <span class="text-hidemobie">Tổng tiền : </span><b>{{totalPriceCart()}}</b>
      </div>
      <div class="btn-buy">
        <router-link  class="btn_1 full-width mb_5 btn-cart-bottom" to="/cart">Giỏ hàng</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CartBottom",
  computed:{
    ...mapGetters(["getterListItemInCart"]),
  },

  methods: {
    ...mapActions(['checkLogin']),
    convertCurrency(x){
      return x.toLocaleString('vi-VN') + ' VNĐ'
    },
    totalPriceCart(){
      let totalPrice = 0;
      this.getterListItemInCart.forEach(function (item) {
        totalPrice += item.product.price * item.qty
      })
      return this.convertCurrency(totalPrice)
    },
    countItemCart() {
      let totalItem = 0;
      this.getterListItemInCart.forEach(function (item) {
        totalItem += item.qty
      })
      return totalItem
    }
  },
}
</script>

<style scoped>
.cart-bottom{
  position: fixed;
  width: 100%;
  bottom: 0;
  background: cornsilk;
  z-index: 99999999999;
}
.cart-bottom .content-cart-bottom{
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.img-cart-bottom{
  width: 60px;
}
.num-product{
  align-items: center;
  display: flex;
}
.txt-cart-bottom{
  font-size: 17px;
  padding-top: 20px;
  padding-left: 10px;
  font-weight: 500;
}
.txt-cart-bottom b{
  font-size: 20px
}
.cart-bottom .price{
  font-size: 17px;
  padding-top: 20px;
  padding-left: 10px;
  font-weight: 500;
}
.btn-cart-bottom{
  background-color: brown !important;
}
@media (max-width: 992px) {
  .text-hidemobie {
    display: none;
  }

  .img-cart-bottom {
    width: 45px;
    margin-top: -10px;
  }

  .txt-cart-bottom {
    font-size: 14px;
    padding-left: 0;
  }

  .cart-bottom .content-cart-bottom[data-v-64da961b] {
    padding: 8px 10px;
  }

  .cart-bottom .price[data-v-64da961b] {
    font-size: 15px;
     padding-top: 0;
  }
}
@media (max-width: 450px) {
  .hero_in.detail_page .wrapper .main_info h1 {
    font-size: 23px;
  }
  .hero_in.detail_page {
    height: 300px;
  }
  .img-cart-bottom {
    width: 35px;
  }
  .cart-bottom .content-cart-bottom{
    padding: 4px 10px 4px 10px;
  }
  .txt-cart-bottom {
    font-size: 12px;
    margin-bottom: 7px;
    padding-top: 7px;
  }

  .cart-bottom .price[data-v-64da961b] {
    font-size: 15px;
  }
  .txt-cart-bottom b[data-v-64da961b] {
    font-size: 16px;
  }
  .btn-buy a{
    font-size: 12px;
    padding: 5px 15px;
  }
}
@media (max-width: 400px) {
  .img-cart-bottom[data-v-64da961b] {
    margin-top: -4px;
  }
  .img-cart-bottom {
    width: 30px;
  }
  .cart-bottom .price{
    font-size: 13px;
  }
  .txt-cart-bottom{
    padding-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
