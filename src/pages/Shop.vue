<template>
  <div class="shop_content">
    <div class="category-desc sidebar">
    </div>
    <div class="container">

      <nav class="woocommerce-breadcrumb">


        <a href="http://demo.roadthemes.com/james">Home</a>

        <span class="separator">></span>


        Shop


      </nav>
    </div>
    <div class="container">
      <div class="row">

        <div id="secondary" class="col-xs-12 col-md-3 sidebar-shop">
          <aside id="woocommerce_product_categories-4" class="widget woocommerce widget_product_categories">
            <h3 class="widget-title"><span>Danh Mục</span></h3>
            <ul class="product-categories">
              <li class="cat-item cat-item-44" v-for="(cate, i) in listCategory" :key="i">
                <a :class="$route.params.category_id === cate.id ? 'active' : ''" @click="filCate(cate.id)" href="#">{{
    cate.name
}}</a>
                <span class="count" style="font-weight: bold">({{ cate.numProduct }})</span>
              </li>
            </ul>
          </aside>
          <aside id="woocommerce_price_filter-4" class="widget woocommerce widget_price_filter">
            <h3 class="widget-title"><span>Khoảng giá</span></h3>
            <form method="get" action="http://demo.roadthemes.com/james/shop/">
              <div class="price_slider_wrapper">
                <div class="price_slider" style="display:none;"></div>
                <div class="price_slider_amount">
                  <input v-model="min" type="text" id="min_price" name="min_price" value="" data-min="35"
                    placeholder="Từ" />
                  <input style="margin-top: 10px" v-model="max" type="text" id="max_price" name="max_price" value=""
                    data-max="515" placeholder="Đến" />
                  <button @click="fillPrice()" style="width: 100%;margin-top: 10px" type="button"
                    class="button">Lọc</button>

                  <button @click="clearFilter()" style="width: 100%;margin-top: 40px" type="button" class="button">Xoá
                    Lọc</button>
                  <div class="price_label" style="display:none;">
                    Price: <span class="from"></span> &mdash; <span class="to"></span>
                  </div>

                  <div class="clear"></div>
                </div>
              </div>
            </form>
          </aside>

          <aside id="woocommerce_products-2" class="widget woocommerce widget_products">
            <h3 class="widget-title">
              <span>Sản phẩm mới</span>
            </h3>
            <ul class="product_list_widget">
              <li v-for="(item, i) in listNew" :key="i">
                <div class="product-image">
                  <router-link :to="'/product/' + item.id"
                    class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                    <img width="200" height="200" :src="getPathFile(item.image)"
                      class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="5" />
                  </router-link>
                </div>
                <div class="product-info">
                  <a href="http://demo.roadthemes.com/james/shop/footwear/ornare-sed-consequat/" title="">
                    <span class="product-title">{{ item.name }}</span>
                  </a>
                  <span class="woocommerce-Price-amount amount">{{ item.price }} đ</span>
                </div>
              </li>
            </ul>
          </aside>
          <aside id="text-10" class="widget widget_text">
            <div class="textwidget"><a href="#"><img
                  src="https://babi.vn/images/promo/76/Banner-Web-B%C3%A9-Xinh-Nh%E1%BB%9D-M%E1%BA%B9-600-x-500.jpg" alt=""></a></div>
          </aside>
        </div>
        <div id="archive-product" class="col-xs-12 col-md-9">
          <div class="archive-border">
            <div v-if="listProduct.length > 0" class="shop-products products row grid-view sidebar"
              style="display:flex;flex-wrap: wrap;">
              <div v-for="(item, i) in listProduct" :key="i"
                class=" item-col col-xs-12 col-sm-3 post-2266 product type-product status-publish has-post-thumbnail product_cat-health-beauty first instock shipping-taxable purchasable product-type-simple">
                <div class="product-wrapper">
                  <span class="tragop">
                    Trả góp 0%
                  </span>
                  <div class="list-col4 ">
                    <div class="product-image">
                      <router-link :to="'/product/' + item.id"
                        class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <img width="500" height="500" :src="getPathFile(item.image)" class="primary_image wp-post-image"
                          alt="15" />
                        <img width="500" height="500" :src="getPathFile(item.image)" class="secondary_image" alt="17"
                          :srcset="getPathFile(item.image)" sizes="(max-width: 500px) 100vw, 500px" />
                      </router-link>
                    </div>
                  </div>
                  <div class="list-col8 ">
                    <div class="gridview">
                      <h2 class="product-name">
                        <router-link :to="'/product/' + item.id">{{ item.name
}}</router-link>
                      </h2>

                      <div class="price-box">
                        <span class="woocommerce-Price-amount amount">{{ item.price }} đ</span>
                        <span class="price-sale">12.000 đ</span>
                      </div>
                    </div>
                    <div class="listview">
                      <h2 class="product-name">
                        <router-link :to="'/product/' + item.id">Aenean
                          eu tristique</router-link>
                      </h2>
                      <div class="price-box"><span class="woocommerce-Price-amount amount"><span
                            class="woocommerce-Price-currencySymbol">&pound;</span>80.00</span></div>
                      <div class="ratings">
                        <div class="star-rating"><span style="width:100%">Rated <strong class="rating">5.00</strong> out
                            of 5</span></div>
                      </div>
                      <div class="product-desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                          fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi
                          ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu,
                          suscipit id nulla.</p>
                      </div>

                      <div class="actions">
                        <ul class="add-to-links clearfix">
                          <li>
                            <p class="product woocommerce add_to_cart_inline "
                              style="border:4px solid #ccc; padding: 12px;">

                              <span class="woocommerce-Price-amount amount"><span
                                  class="woocommerce-Price-currencySymbol">&pound;</span>80.00</span>
                              <a rel="nofollow" href="/james/shop/?add-to-cart=2266" data-quantity="1"
                                data-product_id="2266" data-product_sku=""
                                class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to
                                cart</a>
                            </p>
                          </li>

                          <li class="quickviewbtn">
                            <a class="detail-link quickview" data-quick-id="2266"
                              href="http://demo.roadthemes.com/james/shop/health-beauty/aenean-eu-tristique/"
                              title="Aenean eu tristique">Quick View</a>
                          </li>

                          <li>

                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-2266">
                              <div class="yith-wcwl-add-button show" style="display:block">


                                <a href="/james/shop/?add_to_wishlist=2266" rel="nofollow" data-product-id="2266"
                                  data-product-type="simple" class="add_to_wishlist">
                                  Add to Wishlist</a>

                              </div>

                              <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
                                <span class="feedback">Product added!</span>
                                <a href="http://demo.roadthemes.com/james/wishlist/?wishlist-action" rel="nofollow">
                                  Browse Wishlist </a>
                              </div>

                              <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
                                <span class="feedback">The product is already in the wishlist!</span>
                                <a href="http://demo.roadthemes.com/james/wishlist/?wishlist-action" rel="nofollow">
                                  Browse Wishlist </a>
                              </div>

                              <div style="clear:both"></div>
                              <div class="yith-wcwl-wishlistaddresponse"></div>

                            </div>

                            <div class="clear"></div>
                          </li>
                          <li>
                            <div class="woocommerce product compare-button"><a
                                href="http://demo.roadthemes.com/james?action=yith-woocompare-add-product&id=2266&lang=en"
                                class="compare button" data-product_id="2266" rel="nofollow">Compare</a></div>
                          </li>
                        </ul>

                      </div>
                    </div>
                  </div>
                  <div class="clearfix"></div>

                </div>
              </div>
              <div v-if="listProduct.length == 0">
                <h4>Sản phẩm đang được cập nhật !</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { config } from "../constants/config";

export default {
  name: "Shop",
  data() {
    return {
      listProduct: [],
      listCategory: [],
      listNew: [],
      min: null,
      max: null,
      filter: {
        category_id: this.$route.params.category_id,
        minPrice: null,
        maxPrice: null,
      }
    }
  },
  created() {
    this.filterProduct(this.filter).then(r => {
      this.listCategory = r.data.data.categories
      this.listProduct = r.data.data.products
      this.listNew = r.data.data.product_new
    }).catch(e => {
      console.log(e)
    })
  },
  methods: {
    ...mapActions(['filterProduct']),
    getPathFile(path) {
      return config.url_api_back_end_real + path
    },
    filCate(id) {
      this.filter.category_id = id;
      this.filterProduct(this.filter).then(r => {
        this.listProduct = r.data.data.products
      }).catch(e => {
        console.log(e)
      })
    },
    fillPrice() {
      if (this.min == null || this.max == null) {
        alert('Vui lòng chọn khoảng giá !')
        return false
      }
      this.filter.minPrice = this.min
      this.filter.maxPrice = this.max

      this.filterProduct(this.filter).then(r => {
        this.listProduct = r.data.data.products
      }).catch(e => {
        console.log(e)
      })
    },
    clearFilter() {
      this.filter.category_id = null
      this.filter.minPrice = null
      this.filter.maxPrice = null
      this.filterProduct(this.filter).then(r => {
        this.listProduct = r.data.data.products
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>
.main-container .shop-products .item-col .product-wrapper .product-image {
  overflow: hidden;
}

.main-container .shop-products .item-col .product-wrapper .product-image a img,
.item-img img {
  transition: 0.3s !important;

}

.main-container .shop-products .item-col .product-wrapper .product-image a img:hover,
.item-img img:hover {
  transform: scale(1.1) !important;
}

.price-sale {
  color: #716b6b;
  text-decoration: line-through;
  font-size: 12px;
}

.price-box {
  display: flex;
  justify-content: space-between;
  float: unset !important;
  margin-top: 15px !important;
}

.tragop {
  position: absolute;
  top: 10px;
  right: 5px;
  background: #bf2929;
  border-radius: 40px;
  width: auto;
  padding: 3px 5px;
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  display: flex;
  align-items: center;
  z-index: 2;
}

@media only screen and (max-width: 600px) {
  .img-responsive {
    margin-bottom: 20px;
  }
}

#secondary .widget.widget_products ul li {
  border-bottom: 1px solid #ccc;
  margin: 0 0 0px;
  padding: 10px 0;
}

.main-container .shop-products .item-col {
  margin: 0 0 10px;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 10px;
}

.main-container .shop-products .item-col:hover {
  border: 1px solid #ccc;
}

#secondary .widget.widget_price_filter .price_slider_wrapper .price_slider_amount .button {
  background: #f25862;
  color: #fff;
}

.widget-title {
  border-top: 1px solid #ccc;
  padding: 15px 0 0 0;
}

.evo-coll-banner .img-responsive {
  width: 100%;
  object-fit: cover;
}

.small-banner img {
  margin-bottom: 15px;
}

.evo-coll-banner {
  margin: 15px 0;
}

.cat-item a.active {
  color: #f25862;
}
</style>
