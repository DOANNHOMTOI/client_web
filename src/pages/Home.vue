<template>
  <article id="post-4430" class="post-4430 page type-page status-publish hentry mt-4" style="margin-top: 10px">
    <div class="row-container category-img">
      <div class="row">
        <div class="col-xs-12 col-md-3">
          <div class="vc_tta-tabs-container">
            <ul class="vc_tta-tabs-list">
              <li class="vc_tta-tab" :class="{ vc_active: cateIndex === cate.id }" v-for="(cate, i) in listCate"
                :key="i" data-vc-tab>
                <router-link :to="{ name: 'Shop', params: { category_id: cate.id } }">
                  <a style="cursor: pointer" data-vc-tabs data-vc-container=".vc_tta">
                    <span class="vc_tta-title-text"> {{ cate.name }}</span>
                  </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xs-12 col-md-7">
          <div>
            <a href="#" target="_self">
              <img src="https://intphcm.com/data/upload/banner-thoi-trang-con-nit.jpg" class="slide-banner large" />
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-md-2">
          <div>
            <a href="#" target="_self">
              <img
                src="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-summer-children-s-clothing-poster-banner-clothing-image_153631.jpg"
                class="slide-banner" />
            </a>
            <a href="#" target="_self">
              <img src="https://baobikhoiphat.com/wp-content/uploads/2022/04/logo-shop-quan-ao-tre-em.jpg"
                class="slide-banner" />
            </a>
            <a href="#" target="_self">
              <img src="https://intphcm.com/data/upload/banner-thoi-trang-con-nit.jpg" class="slide-banner" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section_coupons">
      <div class="container"></div>
    </div>
    <div class="coundown">
      <h1 id="headline">COMBO HOT SALE</h1>
      <div id="countdown">
        <ul>
          <li><span id="days"></span>days</li>
          <li><span id="hours"></span>:</li>
          <li><span id="minutes"></span>:</li>
          <li><span id="seconds"></span></li>
        </ul>
      </div>
      <div id="content" class="emoji">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="entry-content">
      <div class="vc_row wpb_row vc_row-fluid home-banner">
        <div class="row-container">
          <div v-for="(item, i) in listBanner" :key="i" class="wpb_column vc_column_container vc_col-sm-4">
            <div class="vc_column-inner ">
              <div class="wpb_wrapper">
                <div class="wpb_single_image wpb_content_element vc_align_center">
                  <figure class="wpb_wrapper vc_figure">
                    <a href="#" target="_self" class="vc_single_image-wrapper   vc_box_border_grey">
                      <img style="height: 542px" width="370" height="542" :src="getPathFile(item.image)"
                        class="vc_single_image-img attachment-full" alt="jbanner-1"
                        sizes="(max-width: 370px) 100vw, 370px" /></a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="shop-products row grid-view">
        <h1 style="margin: auto;text-align: center;">mã giảm giá</h1>
        <div data-v-5a90ec03="" class="product-wrapper">
          <div class="woocommerce columns-3">
            <div class="shop-products row grid-view">
              <div>
                <div class="container">
                  <div v-for="(item, i) in voucher" :key="i" class="col-xs-2"
                    style="background-color: red; color: white;padding: 20px; margin: 50px;">
                    <div v-if="item.qty">
                      <span style="background: black; padding: 5px;cursor: pointer;" @click="copyText(item.code)">
                        copy mã
                      </span>
                      <span>:{{ item.code }}</span>
                      <br>
                      <br>
                      <span>
                        {{ item.title }}
                      </span>
                      <br>
                      <span>
                        số lượng : {{ item.qty }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-v-5a90ec03="" class="list-col8">
          <div data-v-5a90ec03="" class="gridview">
            <h2 data-v-5a90ec03="" class="product-name">
            </h2>
          </div>
        </div>
        <div data-v-5a90ec03="" class="clearfix"></div>
        <div data-v-5a90ec03="" class="product__box-btn"></div>
      </div>
    </div>

    <div class="vc_row wpb_row vc_row-fluid products-tabs">
      <div class="row-container">
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner ">
            <div class="wpb_wrapper cate-wrapper">
              <div class="evo-product-new-title">
                <h4 class="sport-titles">QUẦN ÁO TRẺ EM</h4>
              </div>
              <div class="row evo-product-new-banner-cate ">
                <div class="col-xl-6 col-md-3">
                  <!-- <img src="../assets/evo_block_product_banner_2.jpg" /> -->
                </div>
                <div class="vc_tta-tabs-container col-xl-6 col-md-9">
                  <ul class="vc_tta-tabs-list">
                    <li class="vc_tta-tab" :class="{ vc_active: cateIndex === cate.id }" v-for="(cate, i) in listCate"
                      :key="i" data-vc-tab>
                      <a @click="setProduct(cate.id)" style="cursor: pointer" data-vc-tabs data-vc-container=".vc_tta">
                        <div class="keyword-img"></div>
                        <span class="vc_tta-title-text">{{ cate.name }}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="vc_tta-container" data-vc-action="collapse">
                <div
                  class="vc_general vc_tta vc_tta-tabs vc_tta-color-grey vc_tta-style-classic vc_tta-shape-rounded vc_tta-spacing-1 vc_tta-tabs-position-left vc_tta-controls-align-left ">
                  <div class="vc_tta-panels-container">
                    <div v-if="listProduct.length" class="vc_tta-panels">
                      <div class="vc_tta-panel vc_active" id="1450790267996-59361fa5-cf71"
                        data-vc-content=".vc_tta-panel-body">
                        <div class="vc_tta-panel-heading">
                          <h4 class="vc_tta-panel-title">
                            <a href="#1450790267996-59361fa5-cf71" data-vc-accordion
                              data-vc-container=".vc_tta-container"><span class="vc_tta-title-text">Footwear</span></a>
                          </h4>
                        </div>
                        <div class="vc_tta-panel-body">
                          <div class="woocommerce columns-3">
                            <div class="shop-products row grid-view">
                              <div v-for="(product, i) in listProduct" :key="i"
                                class="item-col col-xs-12 col-sm-3 post-2299 product type-product status-publish has-post-thumbnail product_cat-fashion product_cat-footwear first instock featured shipping-taxable purchasable product-type-simple">
                                <div class="product-wrapper" style="min-height: 300px;">
                                  <span class="tragop">
                                    Trả góp 0%
                                  </span>
                                  <div class="list-col4">
                                    <div class="product-image">
                                      <router-link :to="'/product/' + product.id"
                                        class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                        <img :src="getPathFile(product.image)" class="primary_image wp-post-image"
                                          alt="7" :srcset="getPathFile(product.image)" />
                                      </router-link>
                                      <div class="list-col2">
                                        <div class="list-col8 ">
                                          <div class="gridview">
                                            <h2 class="product-name" style="min-height: 30px;">
                                              <router-link :to="'/product/' + product.id">
                                                {{ product.name }}
                                              </router-link>
                                            </h2>
                                            <div class="ratings">
                                              <div class="star-rating">
                                                <span style="width:80%">Rated
                                                  <strong class="rating">4.00</strong>
                                                  out of 5</span>
                                              </div>
                                            </div>
                                            <div class="price-box">
                                              <span class="woocommerce-Price-amount amount"><span
                                                  class="woocommerce-Price-currencySymbol">&pound;</span>{{
                                                    product.price
                                                  }} Đ</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="list-col8 ">
                                    <div class="gridview">
                                      <h2 class="product-name">
                                        <router-link :to="'/product/' + product.id">
                                          {{ product.name }}
                                        </router-link>
                                      </h2>
                                      <div class="price-box">
                                        <span class="woocommerce-Price-amount amount"><span
                                            class="woocommerce-Price-currencySymbol"></span>{{ product.price }}
                                          đ</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="clearfix"></div>
                                  <div class="product__box-btn">
                                    <router-link :to="'product/' + product.id">
                                      <p>Chi tiết</p>
                                    </router-link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="!listProduct.length" class="vc_tta-panels">
                      <h4 style="padding:20px" class="vc_tta-panel-title">
                        Không có sản phẩm nào
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="listProductCare.length"
      class="vc_row wpb_row vc_row-fluid products-carousel2 title-1 vc_custom_1450175009936">
      <div class="row-container">
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner ">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper">
                  <h3>Có thể bạn quan tâm</h3>
                </div>
              </div>
              <div class="woocommerce columns-1" style="margin-top: 20px">
                <div class="shop-products row grid-view">
                  <div v-for="(item, i) in listProductCare" :key="i"
                    class=" item-col col-xs-12 col-sm-3 post-2309 product type-product status-publish has-post-thumbnail product_cat-fashion product_cat-footwear product_cat-handbags product_cat-health-beauty product_cat-jewellery product_cat-shoes first instock featured shipping-taxable purchasable product-type-simple">
                    <div class="product-wrapper">
                      <div class="list-col4 ">
                        <div class="product-image">
                          <router-link :to="'product/' + item.id"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                            <img width="500" height="500" :src="getPathFile(item.image)"
                              class="primary_image wp-post-image" alt="5" :srcset="getPathFile(item.image)"
                              sizes="(max-width: 500px) 100vw, 500px" />
                            <img width="500" height="500" :src="getPathFile(item.image)" class="secondary_image" alt="6"
                              sizes="(max-width: 500px) 100vw, 500px" />
                          </router-link>
                          <div class="list-col2">
                            <div class="list-col8 ">
                              <div class="gridview">
                                <div class="price-box">
                                  <span class="woocommerce-Price-amount amount">{{ item.price }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-col8 ">
                        <div class="gridview">
                          <h2 class="product-name">
                            <router-link :to="'product/' + item.id">
                              {{ item.name }}
                            </router-link>
                          </h2>
                          <div class="price-box">
                            <span class="woocommerce-Price-amount amount">
                              {{ item.price }} đ</span>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                      <div class="product__box-btn">
                        <router-link :to="'product/' + item.id">
                          <p>Chi tiết</p>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vc_row wpb_row vc_row-fluid products-carousel2 title-1 vc_custom_1450175009936">
      <div class="row-container">
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner ">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper evo-product-new-title">
                  <h3 class="sport-titles">Sản phẩm mới</h3>
                </div>
              </div>
              <div class="woocommerce columns-1" style="margin-top: 20px">
                <div class="shop-products row grid-view">
                  <div v-for="(item, i) in listProductNew" :key="i"
                    class=" item-col col-xs-12 col-sm-3 post-2309 product type-product status-publish has-post-thumbnail product_cat-fashion product_cat-footwear product_cat-handbags product_cat-health-beauty product_cat-jewellery product_cat-shoes first instock featured shipping-taxable purchasable product-type-simple">
                    <div class="product-wrapper">
                      <span class="tragop">
                        Trả góp 0%
                      </span>
                      <div class="list-col4 ">
                        <div class="product-image">
                          <router-link :to="'product/' + item.id"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                            <img width="500" height="500" :src="getPathFile(item.image)"
                              class="primary_image wp-post-image" alt="5" :srcset="getPathFile(item.image)"
                              sizes="(max-width: 500px) 100vw, 500px" />
                            <img width="500" height="500" :src="getPathFile(item.image)" class="secondary_image" alt="6"
                              sizes="(max-width: 500px) 100vw, 500px" />
                          </router-link>
                          <div class="list-col2">
                            <div class="list-col8 ">
                              <div class="gridview">
                                <div class="price-box">
                                  <span class="woocommerce-Price-amount amount">{{ item.price }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-col8">
                        <div class="gridview">
                          <h2 class="product-name">
                            <router-link :to="'product/' + item.id">
                              {{ item.name }}
                            </router-link>
                          </h2>
                          <div class="price-box">
                            <span class="woocommerce-Price-amount amount">
                              {{ item.price }} đ</span>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                      <div class="product__box-btn">
                        <router-link :to="'product/' + item.id">
                          <p>Chi tiết</p>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vc_row wpb_row vc_row-fluid products-carousel2 title-1 vc_custom_1450175009936">
      <div class="row-container">
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner ">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper evo-product-new-title">
                  <h3 class="sport-titles">Bán chạy</h3>
                </div>
              </div>
              <div class="woocommerce columns-1" style="margin-top: 20px">
                <div class="shop-products row grid-view">
                  <div v-for="(item, i) in listProductNew" :key="i"
                    class=" item-col col-xs-12 col-sm-3 post-2309 product type-product status-publish has-post-thumbnail product_cat-fashion product_cat-footwear product_cat-handbags product_cat-health-beauty product_cat-jewellery product_cat-shoes first instock featured shipping-taxable purchasable product-type-simple">
                    <div class="product-wrapper">
                      <span class="tragop">
                        Trả góp 0%
                      </span>
                      <div class="list-col4 ">
                        <div class="product-image">
                          <router-link :to="'product/' + item.id"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                            <img width="500" height="500" :src="getPathFile(item.image)"
                              class="primary_image wp-post-image" alt="5" :srcset="getPathFile(item.image)"
                              sizes="(max-width: 500px) 100vw, 500px" />
                            <img width="500" height="500" :src="getPathFile(item.image)" class="secondary_image" alt="6"
                              sizes="(max-width: 500px) 100vw, 500px" />
                          </router-link>
                          <div class="list-col2">
                            <div class="list-col8 ">
                              <div class="gridview">
                                <div class="price-box">
                                  <span class="woocommerce-Price-amount amount">{{ item.price }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="list-col8 ">
                        <div class="gridview">
                          <h2 class="product-name">
                            <router-link :to="'product/' + item.id">
                              {{ item.name }}
                            </router-link>
                          </h2>
                          <div class="price-box">
                            <span class="woocommerce-Price-amount amount">
                              {{ item.price }} đ</span>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                      <div class="product__box-btn">
                        <router-link :to="'product/' + item.id">
                          <p>Chi tiết</p>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { mapActions } from "vuex";
import { config } from "../constants/config";
import { axiosInstance } from "../helpers/axiosInstance"

export default {
  name: "Home",
  components: { VueGoogleAutocomplete },

  data: function () {
    return {
      address: "",
      cateID: 0,
      listCate: [],
      listProduct: [],
      listProductNew: [],
      listProductCare: [],
      listBanner: [],
      cateIndex: 0,
      listImageCate: [],
      listCateImageBottom: [],
      voucher: null
    };
  },
  created() {
    this.callApivoucher();
    this.getListProductCategory(-1)
      .then(r => {
        this.listCate = r.data.data.data;
        this.cateID = r.data.data.data[0].id;
        this.cateIndex = r.data.data.data[0].id;
        this.filterProduct({ category_id: r.data.data.data[0].id }).then(
          res => {
            this.listProduct = res.data.data.products;
          }
        );
      })
      .catch(e => {
        console.log(e);
      });
    this.getListBanner(-1)
      .then(r => {
        this.listBanner = r.data.data;
      })
      .catch(e => {
        console.log(e);
      });
    this.getListProductNew(-1)
      .then(r => {
        this.listProductNew = r.data.data;
      })
      .catch(e => {
        console.log(e);
      });
    if (localStorage.getItem("cates") != null) {
      this.getListProductCare(localStorage.getItem("cates"))
        .then(r => {
          this.listProductCare = r.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    console.log(JSON.parse(this.$store.getters.getInfoUser).id);
  },

  methods: {
    ...mapActions([
      "getListProductCategory",
      "filterProduct",
      "getListProductNew",
      "getListProductCare",
      "getListBanner"
    ]),
    async callApivoucher() {
      await axiosInstance.get('/api/voucher').then(r =>
        this.voucher = r.data.data.data
      )
    },
    copyText(val) {
      navigator.clipboard.writeText(val)
    },
    setProduct(category_id) {
      this.cateIndex = category_id;
      this.filterProduct({ category_id: category_id }).then(res => {
        this.listProduct = res.data.data.products;
      });
    },
    getPathFile(path) {
      return config.url_api_back_end_real + path;
    }
  }
};
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

.product__box-btn {
  width: 100%;
  position: relative;
  display: flex;
  text-align: center;
  margin-top: 15px;
  justify-content: space-between;
}

.product__box-btn a {
  width: calc(50% - 10px);
  background: #99a2aa;
  color: #fff;
  border-radius: 2px;
}

.product__box-btn p {
  margin: 0;
  padding: 5px 0;
}

.product__box-btn a:first-child {
  background: #bf2929;
  color: #fff;
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
  .evo-product-new-banner-cate .vc_tta-tabs-container.col-md-9 {
    width: 100% !important;
  }

  .evo-product-new-banner-cate li {
    width: 50% !important;
  }

  .evo-product-new-banner-cate ul {
    padding-left: 0 !important;
  }

  .row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .coupon_item {
    margin-bottom: 15px;
  }

  .container {
    padding-left: 0;
    padding-right: 0;
  }

  .news-top_item_img {
    margin-top: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

  .banner-center img {
    margin-bottom: 20px;
  }

  .slide-banner.large {
    min-height: auto !important;
    margin-bottom: 15px;
  }

  .category-img .vc_tta-tabs-container {
    display: none;
  }
}

.new-blogs .item-img {
  width: 130px;
  height: 73px;
  object-fit: cover;
}

.new-blogs .item-img img {
  border-radius: 6px;
}

.new-blogs .news-top_item_img {
  display: flex;
  border-right: 1px solid #ccc;
}

.new-blogs {
  padding: 20px 0;
}

.new-blogs .news-top_item_img:hover h3 {
  opacity: 0.9;
  color: #bf2929;
}

.new-blogs .item-img-content {
  width: calc(100% - 130px);
  padding-left: 10px;
}

.new-blogs .item-img-content h3 {
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 2px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  font-size: 14px;
}

.new-blogs .item-img-content span {
  color: #999;
  font-size: 13px;
}

.section_banner img {
  margin-bottom: 20px;
}

.keyword-img img {
  margin: 0 auto 10px;
}

.vc_tta-panels {
  background: #fff !important;
}

.evo-product-new-banner-cate .vc_tta-tabs-container.col-md-9 {
  float: unset !important;
  width: 75%;
  margin-left: auto;
}

.evo-product-new-banner-cate .vc_tta-tab:hover {
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);
}

.woocommerce .item-col:hover {
  border: 1px solid #ccc;
}

.woocommerce .item-col {
  border: 1px solid transparent;
  padding: 10px;
  border-radius: 10px;
}

.evo-product-new-title {
  background: #bf2929;
  padding: 10px 0;
  text-align: center;
}

.evo-product-new-banner-cate .vc_tta-tabs-container {
  float: unset !important;
}

.evo-product-new-banner-cate li {
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.05);
  -webkit-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
  -ms-flex-preferred-size: calc(calc(100% / 5));
  flex-basis: calc(calc(100% / 5));
  width: calc(calc(100% / 5));
}

.evo-product-new-banner-cate li.vc_active a {
  color: #bf2929 !important;
}

.evo-product-new-banner-cate li a {
  border-bottom: unset !important;
  display: block;
}

.evo-product-new-banner-cate li:hover a {
  color: #bf2929 !important;
}

.evo-product-new-banner-cate ul {
  text-align: left;
}

.sport-titles {
  color: #fff;
  font-weight: 400 !important;
  text-transform: unset !important;
}

.sport-titles::before,
.sport-titles::after {
  display: none;
}

.cate-wrapper .vc_tta-tabs-container ul li a {
  background-color: transparent !important;
  color: #333;
}

.cate-wrapper .vc_tta-tabs-container ul li.vc_active a {
  color: #333;
  border-bottom: 1px solid #666666;
}

.front-page .vc_row {
  margin-bottom: 10px !important;
}

.banner-center {
  margin-bottom: 20px;
}

.coundown {
  text-align: center;
  padding: 20px 0;
}

.coundown {
  background-image: url("../assets/countdown.jpg");
  margin-bottom: 20px;
  color: #fff;
}

.coundown #days,
#hours,
#minutes,
#seconds {
  font-size: 50px;
  font-weight: 700;
}

.coundown #headline {
  margin-bottom: 15px;
  color: #fff;
  padding: 0 0 10px 0;
}

#countdown li {
  display: inline;
  font-size: 30px;
  padding: 0 7px;
}

.slide-banner {
  padding: 5px 0;
  max-width: 100%;
  cursor: pointer;
  border-radius: 10px;
}

.slide-banner:hover {
  opacity: 0.9;
}

.img-cate {
  width: 22px;
  height: 22px;
  object-fit: cover;
  margin-right: 5px;
}

.category-img {
  margin-bottom: 20px;
}

.category-img li {
  display: inline-block;
  padding: 8px 15px 8px 0px;
  color: #444;
  display: block;
  margin: 0 10px;
  font-size: 14px;
}

.inp-search {
  width: 350px;
  border-radius: 23px;
  height: 48px;
  border: 0;
}

.icon-address {
  position: absolute;
  top: 10px;
  left: 10px;
}

.slide-banner.large {
  padding: 0;
  min-height: 298px;
}

.icon-goto-search {
  position: absolute;
  right: 2px;
  top: 4px;
}

.btn-icon-search {
  background-color: rgb(235, 23, 0) !important;
  color: white;
  height: 40px;
  border: 0;
  width: 40px;
  border-radius: 100%;
  box-shadow: transparent 0px 0px 0px 1px inset;
}

.main-container .shop-products .item-col.first {
  clear: unset;
}

.category-img .vc_tta-tabs-list li+li {
  border-top: 1px solid rgba(0, 0, 0, 0.04);
}

.category-img .vc_tta-tabs-list {
  min-height: 298px;
  padding: 10px 0;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 10px;
}

.coupon_item {
  display: flex;
}

.coupon_item .coupon_body .coupon_title {
  font-size: 15px;
  color: #bf2929;
  font-weight: bold;
  margin-bottom: 3px;
}

.coupon_item {
  position: relative;
  background: #fff;
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.15));
  padding: 10px;
  display: flex;
  min-height: 120px;
  border-radius: 5px;
  min-height: 100px;
}

.coupon_body {
  width: calc(100% - 70px);
}

.section_coupons {
  margin: 20px 0;
}

.coupon_item .coupon_copy {
  border: none;
  padding: 2px 15px;
  margin-bottom: 3px;
  border-radius: 15px;
  background: #bf2929;
  color: #fff;
  margin-top: 5px;
}

.product-image {
  max-height: 200px;
}

.product-name {
  height: 50px;
}
</style>
