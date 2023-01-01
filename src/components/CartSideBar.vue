<template>
  <div class="col-xl-4 col-lg-4 cart-sidebar" id="sidebar_fixed">
    <!-- /box_booking -->
    <div class="theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: static; transform: none;"><div class="box_booking">
      <div class="head">
        <h3>Giỏ hàng</h3>
      </div>
      <!-- /head -->
      <div class="main">
        <template v-if="getterListItemInCart.length > 0">
          <ul class="clearfix list-item ">
            <li v-for="(item,index) in getterListItemInCart" :key="index">
              <a class="if-item-in-cart" href=""><span style="font-weight: bold;">{{item.qty}}x</span> {{item.product.name}}</a>
              <span class="price-item-cart">{{convertCurrency(item.product.price)}}</span>
            </li>
          </ul>
          <ul class="clearfix" style="list-style: none;padding: 0">
            <li class="total">Tổng: <span style="font-weight: bold">{{totalPriceCart()}}</span></li>
          </ul>
          <router-link  class="btn_1 full-width mb_5" to="/cart">Xem giỏ hàng</router-link>
        </template>
        <template v-if="getterListItemInCart.length == 0">
          <h6 style="text-align: center">
            Chưa có sản phẩm nào trong giỏ
          </h6>
        </template>
      </div>
    </div>
      <div class="resize-sensor"
           style="position: absolute; inset: 0px; overflow: hidden; z-index: -1; visibility: hidden;">
        <div class="resize-sensor-expand"
             style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
          <div
            style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 411px; height: 1012px;"></div>
        </div>
        <div class="resize-sensor-shrink"
             style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
          <div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "CartSideBar",
  data(){
    return {

    }
  },
  computed:{
    ...mapGetters(["getterListItemInCart"])
  },
  methods:{
    convertCurrency(x){
      return x.toLocaleString('vi-VN') + ' VNĐ'
    },
    totalPriceCart(){
      let totalPrice = 0;
      this.getterListItemInCart.forEach(function (item) {
        totalPrice += item.product.price * item.qty
      })
      return this.convertCurrency(totalPrice)
    }
  }
}
</script>

<style scoped>
.if-item-in-cart{
  color: black;
}
.list-item li{
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid lightgrey;
}
.list-item li:last-child{
  border-bottom: none;
}
.list-item {
  padding:0;
}
.total{
  font-size: 18px;
}
</style>
