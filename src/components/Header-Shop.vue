<template>
  <header class="header_in clearfix">
    <div class="container">
      <div id="logo">
        <router-link to="/">
          <img src="/static/images/moni.png" width="148px" class="">
        </router-link>
      </div>
      <ul id="top_menu">
        <li v-if="!getStatusLogin">
          <router-link to="/login" id="sign-in" class="login">Đăng Nhập</router-link>
        </li>
        <li v-if="getStatusLogin">
          <div class="dropdown user clearfix">
            <a href="#">
              <figure>
                <img src="/static/images/avatar1.jpg" alt="">
              </figure>
              {{ getInfoLogin }}
            </a>
          </div>
        </li>
<!--        <li v-if="!['Home','Login','Register'].includes(this.$route.name)" class="cart-icon-head-shop">-->
<!--          <div class="cart-div-head" @click="showDropDown()" style="cursor: pointer" >-->
<!--            <i class="icon_cart_alt"></i>-->
<!--            <span v-if="getterListItemInCart.length >0">{{ countItemCart() }}</span>-->
<!--          </div>-->
<!--          <div v-if="this.isShowDropDown" class="dropdown-menu menu-cart-head" style="min-width: 300px;left: -50px;display: block">-->
<!--            <ul class="list-group" style="list-style: none;padding: 5px 15px">-->
<!--              <li style="padding: 10px 0;border-bottom: 1px solid lightgrey;width: 100%;line-height: 20px" class="list-group-item w-100" v-for="(item,index) in getterListItemInCart">-->
<!--                <span style="color: brown;font-size: 16px;padding: 10px 4px" class="font-weight-bold">{{item.qty}}</span>x {{item.product.name}}</li>-->
<!--              <li style="width: 100%;margin-top: 20px">-->
<!--                <router-link class="btn_1 full-width mb_5" to="/cart">Xem giỏ hàng</router-link>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </li>-->
      </ul>
    </div>
  </header>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "Header-Shop",
  data(){
    return {

    }
  },
  computed: {
    ...mapState(['isShowDropDown']),
    ...mapGetters(['getStatusLogin', 'getInfoLogin', 'getterListItemInCart']),
  },
  methods: {
    showDropDown(){
      this.$store.commit('SHOW_DROPDOWN_CART',!this.isShowDropDown)
    },
    countItemCart() {
      let totalItem = 0;
      this.getterListItemInCart.forEach(function (item) {
        totalItem += item.qty
      })
      return totalItem
    }
  }
}
</script>
