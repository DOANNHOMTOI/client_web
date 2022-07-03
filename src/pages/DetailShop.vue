<template>
  <div class="product-page" v-if="product != null">
    <div class="container">

      <nav class="woocommerce-breadcrumb">


        <router-link to="/">Home</router-link>

        <span class="separator">></span>


        <router-link to="/shop">Shop</router-link>

        <span class="separator">></span>

        <router-link to="#">{{ product.detail.name}}</router-link>
      </nav>
    </div>
    <div class="product-view">


      <div class="container">
      </div>
      <div id="product-2266"
           class="post-2266 product type-product status-publish has-post-thumbnail product_cat-health-beauty first instock shipping-taxable purchasable product-type-simple">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class='col-md-12' id='main_image'>
                <img :src="getPathFile(product.detail.image)"
                     alt='image'>
              </div>
              <div class='col-md-12' id='thumb_container'>
                <img
                  v-for="(item) in product.images"
                  :src='getPathFile(item.image)'>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="summary entry-summary single-product-info">

                <h1 class="product_title entry-title" >{{ product.detail.name }}</h1>
                <div class="price-box" itemprop="offers" itemscope itemtype="http://schema.org/Offer">

                  <p class="price">

                    <template v-if="parseInt(product.detail.price_sale) > 0">
                      <span class="woocommerce-Price-amount amount">
                      {{ parseInt(product.detail.price_sale) }}đ
                      </span>
                        <span class="woocommerce-Price-amount amount" style="color: black;text-decoration: line-through;font-size: 20px;padding-left: 20px;">
                      {{ product.detail.price }}đ
                      </span>
                    </template>

                    <template v-if="parseInt(product.detail.price_sale) == 0">
                      <span class="woocommerce-Price-amount amount">
                      {{ product.detail.price }}đ
                      </span>
                    </template>
                  </p>

                  <meta itemprop="price" content="80"/>
                  <meta itemprop="priceCurrency" content="GBP"/>
                  <link itemprop="availability" href="http://schema.org/InStock"/>

                </div>

                <div class="short-description" itemprop="description">
                  <p>{{ product.detail.excerpt}}</p>
                  <p><b>Số lượng</b> : {{ product.detail.qty}}</p>
                  <p><b>Mô tả</b> : {{ product.detail.description}}</p>
                </div>
                <template v-if="product.detail.qty > 0">
                  <form class="cart" method="post" enctype='multipart/form-data'>
                    <div class="quantity">
                      <input v-model="qty" type="number" class="input-text qty text" step="1" min="1" max="" name="quantity"
                             title="Qty" size="4" pattern="[0-9]*" inputmode="numeric"/>
                    </div>

                    <button @click="addToCart()" type="button" name="add-to-cart" value="2266" class="single_add_to_cart_button button alt">Thêm vào giỏ
                    </button>

                  </form>
                  <h5 style="font-weight: bold">Size</h5>
                  <div class="yith-wcwl-add-to-wishlist add-to-wishlist-2266" style="display:flex;">
                    <div v-for="(size,i) in product.sizes" class="yith-wcwl-add-button show" style="display:block;margin: 10px">
                      <a @click="setSize(size.size)" :class="parseInt(size.size) == parseInt(sizeSet) ? 'active' : ''" href="javascript:void(0)" rel="nofollow">{{ size.size }}</a>
                    </div>

                    <div style="clear:both"></div>
                    <div class="yith-wcwl-wishlistaddresponse"></div>

                  </div>
                  <div style="clear:both"></div>
                  <h5 style="font-weight: bold">Màu</h5>
                  <div class="yith-wcwl-add-to-wishlist add-to-wishlist-2266" style="display:flex;">
                    <div v-for="(color,i) in product.colors" class="yith-wcwl-add-button show" style="display:block;margin: 10px">
                      <a :class="color.color === colorSet ? 'active' : ''" @click="setColor(color.color)" href="javascript:void(0)" rel="nofollow">{{ color.color }}</a>
                    </div>

                    <div style="clear:both"></div>
                    <div class="yith-wcwl-wishlistaddresponse"></div>

                  </div>
                </template>
                <div style="clear:both"></div>
                <template v-if="product.detail.qty === 0">
                  <div style="color: red"><b>Sản phẩm đã hết hàng</b></div>
                </template>
              </div><!-- .summary -->
            </div>
          </div>
        </div>

        <div class="container">

          <div class="woocommerce-tabs wc-tabs-wrapper">
            <ul class="tabs wc-tabs" role="tablist">
              <li class="description_tab" id="tab-title-description" role="tab" aria-controls="tab-description">
                <a href="#tab-description">Thông tin chi tiết</a>
              </li>
            </ul>
            <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                 id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">

              <p v-html="product.detail.body"></p>
            </div>
          </div>
          <div v-if="listOther.length" class="widget related_products_widget">
            <h3 class="widget-title"><span>Sản phẩm liên quan</span></h3>
            <div class="related products">
              <div class="shop-products row grid-view">
                <div
                  v-for="(other) in listOther"
                  class=" item-col col-xs-12 col-sm-12 post-2249 product type-product status-publish has-post-thumbnail product_cat-health-beauty product_tag-laptop first instock sale shipping-taxable purchasable product-type-simple">
                  <div class="product-wrapper">
                    <div class="list-col4 ">
                      <div class="product-image">
                        <router-link :to="'/product/' + other.id">
                          <img width="500"
                               height="500"
                               :src="getPathFile(other.image)"
                               class="primary_image wp-post-image"
                               alt="16"
                               sizes="(max-width: 500px) 100vw, 500px"/>
                          <img
                            width="500" height="500"
                            :src="getPathFile(other.image)"
                            class="secondary_image" alt="17"
                            sizes="(max-width: 500px) 100vw, 500px"/>
                        </router-link>
                        <div class="list-col2">
                          <div class="list-col8 ">
                            <div class="gridview">
                              <h2 class="product-name">
                                <router-link :to="'/product/' + other.id">
                                  {{other.name}}
                                </router-link>
                              </h2>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="list-col8 ">
                      <div class="gridview">
                        <h2 class="product-name">
                          <router-link :to="'/product/' + other.id">
                            {{other.name}}
                          </router-link>
                        </h2>
                        <div class="price-box">
                          <ins><span class="woocommerce-Price-amount amount">{{ other.price}} đ</span></ins>
                        </div>

                      </div>
                    </div>
                    <div class="clearfix"></div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div><!-- #product-2266 -->


    </div>

  </div>
</template>

<script>
import HeaderShop from "../components/Header-Shop";
import CartSideBar from "../components/CartSideBar";
import {mapActions, mapGetters} from "vuex";
import {isEmptyObject} from "../helpers";
import CartBottom from "../components/CartBottom";
import {config} from "../constants/config";

export default {
  name: "DetailShop",
  data() {
    return {
      product :null,
      sizeSet: 0,
      colorSet: 0,
      qty: 1,
      listOther: []
    }
  },
  methods: {
    ...mapActions(['getDetailProduct']),
    sendimg(a) {
      document.getElementById('mainimg').src = a.src;
    },
    getPathFile(path){
      return config.url_api_back_end_real + path
    },
    setSize(size){
      this.sizeSet = size
    },
    setColor(color){
      this.colorSet = color
    },
    addToCart(){
      if (this.qty <= 0){
        alert('Chọn số lượng !')
        return false;
      }
      if (this.sizeSet == 0){
        alert('Chọn size sản phẩm !')
        return false;
      }
      if (this.colorSet == 0){
        alert('Chọn màu sắc sản phẩm !')
        return false;
      }
      let carts = localStorage.getItem('carts') != null ? JSON.parse(localStorage.getItem('carts')) : []
      console.log('carts', carts)
      let obj = {
        product: this.product.detail,
        attribute: {
          size : this.sizeSet,
          color : this.colorSet,
        },
        qty: parseInt(this.qty)
      }
      // check sp ton tai
      let flag = carts.findIndex(x => x.product.id == this.$route.params.id && parseInt(x.attribute.size) == parseInt(this.sizeSet) && x.attribute.color === this.colorSet);
      console.log(flag)
      if (flag !== -1){
        carts[flag].qty =  carts[flag].qty + parseInt(this.qty)
      }else{
        carts.push(obj)
      }
      localStorage.setItem('carts', JSON.stringify(carts))
      alert('Đã thêm vào giỏ hàng !')
    }
  },
  created() {
    this.getDetailProduct(this.$route.params.id).then(r=>{
      console.log('res getDetailProduct', r)
      this.product = r.data.data
      this.listOther = r.data.data.other
    }).catch(e=>{
      console.log(e)
    })
  }
}
</script>
<style scoped>
#thumb_container {
  text-align: center;
  padding: 0px;
}

#thumb_container img {
  height: 100px;
  width: 100px;
  object-fit: cover;
  border: solid 1px lightgray;
  padding: 5px;
}

#main_image {
  border: solid 1px lightgray;

}

#main_image img {
  width: 100%;
}
.main-container .product-view .summary.single-product-info .yith-wcwl-add-to-wishlist a:before{
  content: "" !important;
}
.main-container .product-view .summary.single-product-info .yith-wcwl-add-to-wishlist a.active {
  background-color: #f25862;
  color: #fff;
  border-color: #f25862;
}
</style>
