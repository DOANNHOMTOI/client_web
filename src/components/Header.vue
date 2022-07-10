<template>
  <div class="header-container">
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col-md-offset-3 col-md-9 d-flex" style="display: flex;align-items: center;">
            <div style="width: 85%;position: relative">
              <div class="form-group mx-sm-3 mb-2" style="display: flex;margin-bottom: 0;">
                <input v-model="search" @keyup="searchProductInput()" @focus="setShowRS(true)" type="text" class="form-control" placeholder="Tên sản phẩm, mô tả, ..." id="email">
                <button type="button" class="btn btn-primary mb-2">Tìm kiếm</button>
              </div>
              <ul v-if="showSearchResult" class="list-group listSearch">
                <li v-for="item in listSearch" class="list-group-item">
                  <a @click="toDetailProduct(item.id)" href="#">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="widget woocommerce widget_shopping_cart"><h2 class="widgettitle">Cart</h2>
              <div class="widget_shopping_cart_content">
                <div class="cart-toggler">
	<span class="cart-quantity">
		{{ getterListItemInCart.length}}	</span>
                </div>
                <div class="mini_cart_content" style="height: 0px;">
                  <div class="mini_cart_inner">
                    <template v-if="getterListItemInCart.length >0">
                      <div class="mini_cart_arrow"></div>
                      <ul class="cart_list product_list_widget ">
                        <li id="mcitem-40b5f25a228570053bc64a043c3f1833" v-for="(item,i) in getterListItemInCart">
                          <a class="product-image" href="#">
                            <img width="200" height="200"
                                 :src="getPathFile(item.product.image)"
                                 class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="7"
                                 sizes="(max-width: 200px) 100vw, 200px">
                            <span class="quantity">{{ item.qty }}</span> </a>
                          <div class="product-details">
                            <a
                              class="product-name">
                              {{ item.product.name }}
                            </a>
                            <span class="quantity"><span class="woocommerce-Price-amount amount">{{ item.attribute.size }} / {{ item.attribute.color }} / {{ item.product.price_sale > 0 ? parseInt(item.product.price_sale) : item.product.price }} đ</span></span></div>
                        </li>
                      </ul><!-- end product list -->
                      <p class="total">Tổng tiền: <span class="woocommerce-Price-amount amount">
                        {{ totalPriceCart() }}</span></p>
                      <p class="buttons">
                        <router-link to="/cart" class="button wc-forward">
                          Xem giỏ
                        </router-link>
                        <router-link to="/checkout" class="button checkout wc-forward">
                          Đặt hàng
                        </router-link>
                      </p>
                    </template>
                    <template v-if="getterListItemInCart.length == 0">
                      <h5 style="font-weight: bold; text-align: center">Chưa có sản phẩm nào trong giỏ</h5>
                    </template>
                  </div>
                  <div class="loading"></div>
                </div>
              </div>
            </div>
            <router-link v-if="!getStatusLogin" to="/login" tag="button" class="btn btn-primary mb-2">Đăng nhập</router-link>
            <div v-if="getStatusLogin" class="top-menu" style="display:flex;align-items: center">
              <img style="width: 25px;padding-top: 0;padding-right: 5px;margin-left: 10px" src="/static/images/user.png" alt="">
              <span style="display:block;width: 100px;overflow:hidden;">{{ JSON.parse(getInfoUser).name}}</span>
              <div class="top-menu-container">
                <ul id="menu-top-menu" class="nav-menu">
                  <li
                      class="menu-item menu-item-type-post_type menu-item-object-page last menu-item-4009">
                    <router-link to="/shop">Cửa hàng</router-link>
                  </li>
                  <li id="menu-item-4009"
                      class="menu-item menu-item-type-post_type menu-item-object-page last menu-item-4009">
                    <router-link to="/cart">Giỏ hàng</router-link>
                  </li>
                  <li
                      class="menu-item menu-item-type-post_type menu-item-object-page last menu-item-4009">
                    <router-link to="/checkout">Đặt hàng</router-link>
                  </li>
                  <li
                    @click="logoutWeb()"
                    class="menu-item menu-item-type-post_type menu-item-object-page last menu-item-4009">
                    <a href="#">Đăng Xuất</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="header-sticky ">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-3">
              <div class="logo">
                <router-link to="/">
                  <img src="http://demo.roadthemes.com/james/wp-content/uploads/2015/12/logo.png" alt=""/>
                </router-link>
              </div>
            </div>
            <div class="col-xs-12 col-md-9">
              <div class="visible-lg visible-md">
                <div class="horizontal-menu">

                  <!-- begin "mega_main_menu" -->
                  <div id="mega_main_menu_first"
                       class="primary primary_style-flat icons-left first-lvl-align-left first-lvl-separator-smooth direction-horizontal fullwidth-disable pushing_content-disable mobile_minimized-disable dropdowns_trigger-hover dropdowns_animation-anim_5 no-logo no-search no-woo_cart no-buddypress responsive-enable coercive_styles-disable indefinite_location_mode-disable language_direction-ltr version-2-1-2 mega_main mega_main_menu">
                    <div class="menu_holder">
                      <div class="mmm_fullwidth_container"></div><!-- class="fullwidth_container" -->
                      <div class="menu_inner">
			<span class="nav_logo">
				<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>
			</span><!-- /class="nav_logo" -->
                        <ul id="mega_main_menu_ul_first" class="mega_main_menu_ul">
                          <li id="menu-item-4017"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4017 multicolumn_dropdown default_style drop_to_right submenu_full_width columns3">
                            <router-link to="/shop" tabindex="4" class="item_link  disable_icon">
                              <i class=""></i>
                              <span class="link_content">
                                <span class="link_text">
                                  Cửa hàng
                                </span>
                              </span>
                            </router-link>
                          </li>
                          <li
                            v-for="cate in listCate"
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4017 multicolumn_dropdown default_style drop_to_right submenu_full_width columns3">
                            <router-link :to="{ name: 'Shop', params: { category_id: cate.id } }" class="item_link  disable_icon">
                              <i class=""></i>
                              <span class="link_content">
                                <span class="link_text">
                                  {{ cate.name }}
                                </span>
                              </span>
                            </router-link>
                          </li>
                        </ul>
                      </div><!-- /class="menu_inner" -->
                    </div><!-- /class="menu_holder" -->
                  </div><!-- /id="mega_main_menu" -->                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-menu clearfix">
      <div class="container">
        <div class="mobile-menu visible-xs visible-sm">
          <div class="mbmenu-toggler">Menu<span class="mbmenu-icon"><i class="fa fa-bars"></i></span></div>
          <div class="clearfix"></div>
          <div class="mobile-menu-container">
            <ul id="menu-horizontal-menu" class="nav-menu">
              <li
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4017">
                <a href="http://demo.roadthemes.com/james/shop/">Shop</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix"></div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {config} from "../constants/config";

export default {
  name: "Header",
  data(){
    return{
      listCate:[],
      listSearch: [],
      showSearchResult: false,
      search: ''
      // carts: localStorage.getItem('carts') != null ? JSON.parse(localStorage.getItem('carts')) : []
    }
  },

  methods:{
    ...mapActions(['getListProductCategory','filterProduct']),
    getPathFile(path){
      return config.url_api_back_end_real + path
    },
    convertCurrency(x){
      return x.toLocaleString('vi-VN') + ' đ'
    },
    totalPriceCart(){
      let totalPrice = 0;
      this.getterListItemInCart.forEach(function (item) {
        let price = item.product.price_sale > 0 ? parseInt(item.product.price_sale) : item.product.price
        totalPrice += price * item.qty
      })
      return this.convertCurrency(totalPrice)
    },
    logoutWeb(){
      this.$store.commit('LOG_OUT','')
      window.location.href = ''
    },
    setShowRS(flag){
      this.showSearchResult = flag
    },
    searchProductInput(){
      console.log(this.search)
      if (this.search === '') {
        this.showSearchResult = false
        return false
      }
      let filter = {
        name : this.search
      }
      this.filterProduct(filter).then(r=>{
        console.log('res filterProduct', r)
        if (r.data.data.products.length == 0){
          this.listSearch = [{name: "Không tìm thấy kết quả !"}]
        }else {
          this.listSearch = r.data.data.products
        }


      }).catch(e=>{
        console.log(e)
      })
    },
    toDetailProduct(id){

      this.showSearchResult = false
      this.$router.push('/product/' + id)
    }
  },
  computed:{
    ...mapGetters(['getterListItemInCart','getStatusLogin','getInfoUser']),

  },
  created() {
    this.getListProductCategory(-1).then(r=>{
      console.log('res getProductCategory', r)
      this.listCate = r.data.data.data
    }).catch(e=>{
      console.log(e)
    })
  },
}
</script>

<style scoped>
.listSearch{
  position: absolute;
  z-index: 999;
  width: 100%;
}
.header-container .top-menu:before {
  content: "";
  font-family: FontAwesome;
  display: none;
  width: 50px;
  height: 55px;
  text-align: center;
  line-height: 55px;
}
.header-container .top-menu{
  width: auto;
}
.listSearch li{
  cursor: pointer;
}
.listSearch li:hover{
  background: lightblue;
}
</style>
