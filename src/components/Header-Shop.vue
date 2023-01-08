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
