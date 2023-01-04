<template>
  <div class="header-container">
    <div class="banner-top">
    </div>

    <div class="header">
      <div class="header-sticky ">
        <div class="container">
          <div class="row">
            <div class="col-xs-2 col-md-2">
              <div class="logo">
                <router-link to="/">
                  <img
                    src="https://bizweb.dktcdn.net/100/302/397/themes/754809/assets/slider_2.jpg?1614149879141"
                    class="logo-img"
                  />
                </router-link>
              </div>
            </div>
            <div class="col-xs-0 col-md-8">
              <div class="visible-lg visible-md">
                <div class="horizontal-menu">
                  <!-- begin "mega_main_menu" -->
                  <div
                    id="mega_main_menu_first"
                    class="primary primary_style-flat icons-left first-lvl-align-left first-lvl-separator-smooth direction-horizontal fullwidth-disable pushing_content-disable mobile_minimized-disable dropdowns_trigger-hover dropdowns_animation-anim_5 no-logo no-search no-woo_cart no-buddypress responsive-enable coercive_styles-disable indefinite_location_mode-disable language_direction-ltr version-2-1-2 mega_main mega_main_menu"
                  >
                    <div class="menu_holder">
                      <div class="mmm_fullwidth_container"></div>
                      <!-- class="fullwidth_container" -->
                      <div class="menu_inner">
                        <span class="nav_logo">
                          <a class="mobile_toggle">
                            <span class="mobile_button">
                              Menu &nbsp;
                              <span class="symbol_menu">&equiv;</span>
                              <span class="symbol_cross">&#x2573;</span> </span
                            ><!-- class="mobile_button" -->
                          </a> </span
                        ><!-- /class="nav_logo" -->
                        <ul
                          id="mega_main_menu_ul_first"
                          class="mega_main_menu_ul"
                        >
                          <li
                            id="menu-item-4017"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4017 multicolumn_dropdown default_style drop_to_right submenu_full_width columns3"
                          >
                            <router-link
                              to="/shop"
                              tabindex="4"
                              class="item_link  disable_icon"
                            >
                              <i class=""></i>
                              <span class="link_content">
                                <span class="link_text">
                                  Cửa hàng
                                </span>
                              </span>
                            </router-link>
                          </li>
                          <li
                            v-for="(cate, i) in listCate"
                            :key="i"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4017 multicolumn_dropdown default_style drop_to_right submenu_full_width columns3"
                          >
                            <router-link
                              :to="{
                                name: 'Shop',
                                params: { category_id: cate.id }
                              }"
                              class="item_link  disable_icon"
                            >
                              <i class=""></i>
                              <span class="link_content">
                                <span class="link_text">
                                  {{ cate.name }}
                                </span>
                              </span>
                            </router-link>
                          </li>
                        </ul>
                      </div>

                      <!-- /class="menu_inner" -->
                    </div>
                    <!-- /class="menu_holder" -->
                  </div>
                  <!-- /id="mega_main_menu" -->
                </div>
              </div>
            </div>
            <div class="col-xs-8 col-md-2">
              <div class="evo-main-hotline">
                <a href="tel:0901250190" title="Gọi mua hàng:"
                  ><span>Gọi mua hàng:</span>0901 250 190</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col-md-3 text-animas">
            <div class="typewriter">Black friday up sale 60%</div>
          </div>
          <div
            class=" col-md-9 d-flex login-box"
            style="display: flex;align-items: center;"
          >
            <div style="width: 85%;position: relative">
              <div
                class="form-group mx-sm-3 mb-2"
                style="display: flex;margin-bottom: 0;"
              >
                <input
                  v-model="search"
                  @keyup="searchProductInput()"
                  @focus="setShowRS(true)"
                  type="text"
                  class="form-control"
                  placeholder="Tên sản phẩm, mô tả, ..."
                  id="email"
                />
                <!--                <button type="button" class="btn btn-primary mb-2">Tìm kiếm</button>-->
              </div>
              <ul v-if="showSearchResult" class="list-group listSearch">
                <li
                  v-for="(item, index) in listSearch"
                  class="list-group-item"
                  :key="index"
                >
                  <a @click="toDetailProduct(item)" href="#">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="widget woocommerce widget_shopping_cart">
              <h2 class="widgettitle">Cart</h2>
              <div class="widget_shopping_cart_content">
                <div class="cart-toggler">
                  <span class="cart-quantity">
                    {{ getterListItemInCart.length }}
                  </span>
                </div>
                <div class="mini_cart_content" style="height: 0px;">
                  <div class="mini_cart_inner">
                    <template v-if="getterListItemInCart.length > 0">
                      <div class="mini_cart_arrow"></div>
                      <ul class="cart_list product_list_widget ">
                        <li
                          id="mcitem-40b5f25a228570053bc64a043c3f1833"
                          v-for="(item, i) in getterListItemInCart"
                          :key="i"
                        >
                          <a class="product-image" href="#">
                            <img
                              width="200"
                              height="200"
                              :src="getPathFile(item.product.image)"
                              class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                              alt="7"
                              sizes="(max-width: 200px) 100vw, 200px"
                            />
                            <span class="quantity">{{ item.qty }}</span>
                          </a>
                          <div class="product-details">
                            <a class="product-name">
                              {{ item.product.name }}
                            </a>
                            <span class="quantity"
                              ><span class="woocommerce-Price-amount amount"
                                >{{ item.attribute.size }} /
                                {{ item.attribute.color }} /
                                {{
                                  item.product.price_sale > 0
                                    ? parseInt(item.product.price_sale)
                                    : item.product.price
                                }}
                                đ</span
                              ></span
                            >
                          </div>
                        </li>
                      </ul>
                      <!-- end product list -->
                      <p class="total">
                        Tổng tiền:
                        <span class="woocommerce-Price-amount amount">
                          {{ totalPriceCart() }}</span
                        >
                      </p>
                      <p class="buttons">
                        <router-link to="/cart" class="button wc-forward">
                          Xem giỏ
                        </router-link>
                        <router-link
                          to="/checkout"
                          class="button checkout wc-forward"
                        >
                          Đặt hàng
                        </router-link>
                      </p>
                    </template>
                    <template v-if="getterListItemInCart.length == 0">
                      <h5 style="font-weight: bold; text-align: center">
                        Chưa có sản phẩm nào trong giỏ
                      </h5>
                    </template>
                  </div>
                  <div class="loading"></div>
                </div>
              </div>
            </div>
            <router-link
              v-if="!getStatusLogin"
              to="/login"
              tag="button"
              class="btn btn-primary btn-login mb-2"
            >
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>
              Đăng nhập</router-link
            >
            <div
              v-if="getStatusLogin"
              class="top-menu"
              style="display:flex;align-items: center"
            >
              <img
                style="width: 25px;padding-top: 0;padding-right: 5px;margin-left: 10px"
                src="/static/images/user.png"
                alt=""
              />
              <span style="display:block;width: 100px;overflow:hidden;">{{
                JSON.parse(getInfoUser).name
              }}</span>
              <div class="top-menu-container">
                <ul id="menu-top-menu" class="nav-menu">
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page last menu-item-4009"
                  >
                    <router-link to="/shop">Cửa hàng</router-link>
                  </li>
                  <li
                    id="menu-item-4009"
                    class="menu-item menu-item-type-post_type menu-item-object-page last menu-item-4009"
                  >
                    <router-link to="/cart">Giỏ hàng</router-link>
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page last menu-item-4009"
                  >
                    <router-link to="/checkout">Đặt hàng</router-link>
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page last menu-item-4009"
                  >
                    <router-link to="/info">thông tin người dùng</router-link>
                  </li>
                  <li
                    @click="logoutWeb()"
                    class="menu-item menu-item-type-post_type menu-item-object-page last menu-item-4009"
                  >
                    <a href="#">Đăng Xuất</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-menu clearfix">
      <div class="container">
        <div class="mobile-menu visible-xs visible-sm">
          <div class="mbmenu-toggler">
            Menu<span class="mbmenu-icon"><i class="fa fa-bars"></i></span>
          </div>
          <div class="clearfix"></div>
          <div class="mobile-menu-container">
            <ul id="menu-horizontal-menu" class="nav-menu">
              <li
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4017"
              >
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
import { mapActions, mapGetters } from "vuex";
import { config } from "../constants/config";

export default {
  name: "Header",
  data() {
    return {
      listCate: [],
      listSearch: [],
      showSearchResult: false,
      search: ""
      // carts: localStorage.getItem('carts') != null ? JSON.parse(localStorage.getItem('carts')) : []
    };
  },
  mounted() {},
  methods: {
    ...mapActions(["getListProductCategory", "filterProduct"]),
    getPathFile(path) {
      return config.url_api_back_end_real + path;
    },
    convertCurrency(x) {
      return x.toLocaleString("vi-VN") + " đ";
    },
    totalPriceCart() {
      let totalPrice = 0;
      this.getterListItemInCart.forEach(function(item) {
        let price =
          item.product.price_sale > 0
            ? parseInt(item.product.price_sale)
            : item.product.price;
        totalPrice += price * item.qty;
      });
      return this.convertCurrency(totalPrice);
    },
    logoutWeb() {
      this.$store.commit("LOG_OUT", "");
      window.location.href = "";
    },
    setShowRS(flag) {
      this.showSearchResult = flag;
    },
    searchProductInput() {
      if (this.search === "") {
        this.showSearchResult = false;
        return false;
      }
      let filter = {
        name: this.search
      };
      this.filterProduct(filter)
        .then(r => {
          if (r.data.data.products.length == 0) {
            this.listSearch = [{ name: "Không tìm thấy kết quả !" }];
          } else {
            this.listSearch = r.data.data.products;
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    toDetailProduct(item) {
      // kết quả tìm kiếm
      let listCate =
        localStorage.getItem("cates") != null
          ? JSON.parse(localStorage.getItem("cates"))
          : [];

      if (!listCate.includes(item.category_id)) {
        listCate.push(item.category_id);
      }
      localStorage.setItem("cates", JSON.stringify(listCate));

      this.search = "";
      this.showSearchResult = false;
      this.$router.push("/product/" + item.id);
    }
  },
  computed: {
    ...mapGetters(["getterListItemInCart", "getStatusLogin", "getInfoUser"])
  },
  created() {
    this.getListProductCategory(-1)
      .then(r => {
        this.listCate = r.data.data.data;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style scoped>
.header .router-link-exact-active,
.header .router-link-exact-active .logo-img {
  width: 100%;
  object-fit: cover;
}

.banner-top  {
  background-size: contain;
  height: 200px;

  width: 100%;
  max-width: 100%;
  object-fit: cover;
  background-image: url("https://bizweb.dktcdn.net/100/302/397/themes/754809/assets/slider_2.jpg?1614149879141");

}

.listSearch {
  position: absolute;
  z-index: 999;
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .login-box {
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .btn-login {
    margin-left: 0 !important;
  }
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

.header-container .top-menu {
  width: auto;
}

.listSearch li {
  cursor: pointer;
}

.listSearch li:hover {
  background: lightblue;
}

.typewriter {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #212121;
  animation: cursor 1s step-start infinite, text 5s steps(18) alternate infinite;
}

@keyframes cursor {
  0%,
  100% {
    border-color: #212121;
  }
}

@keyframes text {
  0% {
    width: 0;
  }

  100% {
    width: 21.5ch;
  }
}

.horizontal-menu
  #mega_main_menu_first
  > .menu_holder
  .menu_inner
  > ul
  > li
  > a.item_link {
  padding: 0 15px !important;
  min-height: unset !important;
  line-height: 1.5 !important;
}

.evo-main-hotline {
  display: inline-block;
  padding: 7px 0;
}

.evo-main-hotline span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  color: #333;
}

.evo-main-hotline a {
  color: #bf2929;
  font-size: 20px;
  font-weight: 700;
  display: inline-block;
  line-height: 1.3;
  text-align: left;
}

.horizontal-menu
  #mega_main_menu_first
  > .menu_holder
  .menu_inner
  > ul
  > li
  > a.item_link
  .link_text {
  line-height: 60px !important;
  min-height: 60px !important;
}

.text-animas {
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 55px;
  color: #fff;
}

.header-container .header {
  min-height: 60px !important;
}

.cart-toggler {
  border-right: none !important;
}

.header-container .logo {
  margin-top: 0 !important;
  margin-top: 0 !important;
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 10px;
}

.header-sticky {
  background: #fff;
}

.header-container .top-bar {
  background: #bf2929 !important;
}

.btn-login {
  position: relative;
  padding: 7px 10px;
  color: #bf2929;
  text-decoration: none;
  letter-spacing: 2px;
  font: 700 16px consolas;
  overflow: hidden;
  background-color: #fff !important;
  margin-left: 10px;
}

.btn-login:hover {
  background-color: #bf2929 !important;
  color: #fff;
  border: 1px solid transparent !important;
}

.btn-login:hover span:nth-child(1),
.btn-login:hover span:nth-child(2),
.btn-login:hover span:nth-child(3),
.btn-login:hover span:nth-child(4) {
  background: #fff;
}

.btn-login span:nth-child(1) {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 3px;
  background: #d52027;
  animation: animate1 2s linear infinite;
}

@keyframes animate1 {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

.btn-login span:nth-child(2) {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 3px;
  background: #d52027;
  animation: animate2 2s linear infinite;
  animation-delay: 1s;
}

@keyframes animate2 {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100%);
  }
}

.btn-login span:nth-child(3) {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 3px;
  background: #d52027;
  animation: animate3 2s linear infinite;
}

@keyframes animate3 {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.btn-login span:nth-child(4) {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 3px;
  background: #d52027;
  animation: animate4 2s linear infinite;
  animation-delay: 1s;
}

@keyframes animate4 {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(-100%);
  }
}
</style>
