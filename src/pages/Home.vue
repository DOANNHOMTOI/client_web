<template>
  <article id="post-4430" class="post-4430 page type-page status-publish hentry mt-4" style="margin-top: 50px">
    <div class="entry-content">
      <div class="vc_row wpb_row vc_row-fluid home-banner">
        <div class="row-container">
          <div class="wpb_column vc_column_container vc_col-sm-4">
            <div class="vc_column-inner ">
              <div class="wpb_wrapper">
                <div class="wpb_single_image wpb_content_element vc_align_center">

                  <figure class="wpb_wrapper vc_figure">
                    <a href="#" target="_self" class="vc_single_image-wrapper   vc_box_border_grey"><img
                      width="370" height="542"
                      src="http://demo.roadthemes.com/james/wp-content/uploads/2015/12/jbanner-1.jpg"
                      class="vc_single_image-img attachment-full" alt="jbanner-1"
                      srcset="http://demo.roadthemes.com/james/wp-content/uploads/2015/12/jbanner-1.jpg 370w, http://demo.roadthemes.com/james/wp-content/uploads/2015/12/jbanner-1-205x300.jpg 205w"
                      sizes="(max-width: 370px) 100vw, 370px"/></a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div class="wpb_column vc_column_container vc_col-sm-4">
            <div class="vc_column-inner ">
              <div class="wpb_wrapper">
                <div class="wpb_single_image wpb_content_element vc_align_center">

                  <figure class="wpb_wrapper vc_figure">
                    <a href="#" target="_self" class="vc_single_image-wrapper   vc_box_border_grey"><img
                      width="370" height="542"
                      src="http://demo.roadthemes.com/james/wp-content/uploads/2015/12/jbanner-2.jpg"
                      class="vc_single_image-img attachment-full" alt="jbanner-2"
                      srcset="http://demo.roadthemes.com/james/wp-content/uploads/2015/12/jbanner-2.jpg 370w, http://demo.roadthemes.com/james/wp-content/uploads/2015/12/jbanner-2-205x300.jpg 205w"
                      sizes="(max-width: 370px) 100vw, 370px"/></a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div class="wpb_column vc_column_container vc_col-sm-4">
            <div class="vc_column-inner ">
              <div class="wpb_wrapper">
                <div class="wpb_single_image wpb_content_element vc_align_center  vc_custom_1450967869062">

                  <figure class="wpb_wrapper vc_figure">
                    <a href="#" target="_self" class="vc_single_image-wrapper   vc_box_border_grey"><img
                      width="370" height="280"
                      src="http://demo.roadthemes.com/james/wp-content/uploads/2015/12/jbanner-3.jpg"
                      class="vc_single_image-img attachment-full" alt="jbanner-3"
                      srcset="http://demo.roadthemes.com/james/wp-content/uploads/2015/12/jbanner-3.jpg 370w, http://demo.roadthemes.com/james/wp-content/uploads/2015/12/jbanner-3-300x227.jpg 300w"
                      sizes="(max-width: 370px) 100vw, 370px"/></a>
                  </figure>
                </div>

                <div class="wpb_single_image wpb_content_element vc_align_center">

                  <figure class="wpb_wrapper vc_figure">
                    <a href="#" target="_self" class="vc_single_image-wrapper   vc_box_border_grey"><img
                      width="370" height="234"
                      src="http://demo.roadthemes.com/james/wp-content/uploads/2015/12/jbanner-4.jpg"
                      class="vc_single_image-img attachment-full" alt="jbanner-4"
                      srcset="http://demo.roadthemes.com/james/wp-content/uploads/2015/12/jbanner-4.jpg 370w, http://demo.roadthemes.com/james/wp-content/uploads/2015/12/jbanner-4-300x190.jpg 300w"
                      sizes="(max-width: 370px) 100vw, 370px"/></a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vc_row wpb_row vc_row-fluid products-tabs">
        <div class="row-container">
          <div class="wpb_column vc_column_container vc_col-sm-12">
            <div class="vc_column-inner ">
              <div class="wpb_wrapper">
                <div class="vc_tta-container" data-vc-action="collapse">
                  <div
                    class="vc_general vc_tta vc_tta-tabs vc_tta-color-grey vc_tta-style-classic vc_tta-shape-rounded vc_tta-spacing-1 vc_tta-tabs-position-left vc_tta-controls-align-left ">
                    <div class="vc_tta-tabs-container">
                      <ul class="vc_tta-tabs-list">
                        <li class="vc_tta-tab" :class="{ vc_active: cateIndex === cate.id}" v-for="(cate,i) in listCate" :key="i" data-vc-tab>
                          <a @click="setProduct(cate.id)"
                             style="cursor: pointer"
                            data-vc-tabs
                            data-vc-container=".vc_tta">
                          <span class="vc_tta-title-text">{{ cate.name }}</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="vc_tta-panels-container">
                      <div v-if="listProduct.length" class="vc_tta-panels">
                        <div class="vc_tta-panel vc_active" id="1450790267996-59361fa5-cf71"
                             data-vc-content=".vc_tta-panel-body">
                          <div class="vc_tta-panel-heading"><h4 class="vc_tta-panel-title"><a
                            href="#1450790267996-59361fa5-cf71" data-vc-accordion
                            data-vc-container=".vc_tta-container"><span
                            class="vc_tta-title-text">Footwear</span></a>
                          </h4></div>
                          <div class="vc_tta-panel-body">
                            <div class="woocommerce columns-3">
                              <div class="shop-products row grid-view">
                                <div v-for="(product,i) in listProduct" class="item-col col-xs-12 col-sm-4 post-2299 product type-product status-publish has-post-thumbnail product_cat-fashion product_cat-footwear first instock featured shipping-taxable purchasable product-type-simple">
                                  <div class="product-wrapper">
                                    <div class="list-col4">
                                      <div class="product-image">
                                        <router-link :to="'/shop/' + product.id" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                          <img width="500" height="500"
                                               :src="getPathFile(product.image)"
                                               class="primary_image wp-post-image" alt="7"
                                               :srcset="getPathFile(product.image)"
                                               sizes="(max-width: 500px) 100vw, 500px"/>
                                        </router-link>
                                        <div class="list-col2">
                                          <div class="list-col8 ">
                                            <div class="gridview">
                                              <h2 class="product-name">
                                                <router-link :to="'/shop/' + product.id">
                                                  {{ product.name }}
                                                </router-link>
                                              </h2>
                                              <div class="ratings">
                                                <div class="star-rating"><span style="width:80%">Rated <strong
                                                  class="rating">4.00</strong> out of 5</span></div>
                                              </div>
                                              <div class="price-box"><span
                                                class="woocommerce-Price-amount amount"><span
                                                class="woocommerce-Price-currencySymbol">&pound;</span>{{ product.price }} Đ</span>
                                              </div>

                                            </div>
                                          </div>
                                        </div>

                                      </div>
                                    </div>
                                    <div class="list-col8 ">
                                      <div class="gridview">
                                        <h2 class="product-name">
                                          <router-link :to="'/shop/' + product.id">
                                            {{ product.name }}
                                          </router-link>
                                        </h2>
                                        <div class="price-box"><span
                                          class="woocommerce-Price-amount amount"><span
                                          class="woocommerce-Price-currencySymbol"></span>{{ product.price }} đ</span>
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
                      </div>
                      <div v-if="!listProduct.length" class="vc_tta-panels">
                        <h4 style="padding:20px" class="vc_tta-panel-title">Không có sản phẩm nào</h4>
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
                  <div class="wpb_wrapper">
                    <h3>Sản phẩm mới</h3>

                  </div>
                </div>
                <div class="woocommerce columns-1" style="margin-top: 20px">

                  <div class="shop-products row grid-view">
                    <div
                      v-for="(item,i) in listProductNew"
                      class=" item-col col-xs-12 col-sm-3 post-2309 product type-product status-publish has-post-thumbnail product_cat-fashion product_cat-footwear product_cat-handbags product_cat-health-beauty product_cat-jewellery product_cat-shoes first instock featured shipping-taxable purchasable product-type-simple">
                      <div class="product-wrapper">

                        <div class="list-col4 ">
                          <div class="product-image">
                            <router-link :to="'product/' + item.id" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                              <img
                                width="500" height="500"
                                :src="getPathFile(item.image)"
                                class="primary_image wp-post-image" alt="5"
                                :srcset="getPathFile(item.image)"
                                sizes="(max-width: 500px) 100vw, 500px"/>
                              <img width="500" height="500"
                                   :src="getPathFile(item.image)"
                                   class="secondary_image" alt="6"
                                   sizes="(max-width: 500px) 100vw, 500px"/>
                            </router-link>
                            <div class="list-col2">
                              <div class="list-col8 ">
                                <div class="gridview">
                                  <div class="price-box"><span class="woocommerce-Price-amount amount">{{item.price}}</span></div>

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
                            <div class="price-box"><span class="woocommerce-Price-amount amount">
                              {{ item.price}} đ</span></div>

                          </div>
                        </div>
                        <div class="clearfix"></div>

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
                  <div class="wpb_wrapper">
                    <h3>Bán chạy</h3>

                  </div>
                </div>
                <div class="woocommerce columns-1" style="margin-top: 20px">

                  <div class="shop-products row grid-view">
                    <div
                      v-for="(item,i) in listProductNew"
                      class=" item-col col-xs-12 col-sm-3 post-2309 product type-product status-publish has-post-thumbnail product_cat-fashion product_cat-footwear product_cat-handbags product_cat-health-beauty product_cat-jewellery product_cat-shoes first instock featured shipping-taxable purchasable product-type-simple">
                      <div class="product-wrapper">

                        <div class="list-col4 ">
                          <div class="product-image">
                            <router-link :to="'product/' + item.id" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                              <img
                                width="500" height="500"
                                :src="getPathFile(item.image)"
                                class="primary_image wp-post-image" alt="5"
                                :srcset="getPathFile(item.image)"
                                sizes="(max-width: 500px) 100vw, 500px"/>
                              <img width="500" height="500"
                                   :src="getPathFile(item.image)"
                                   class="secondary_image" alt="6"
                                   sizes="(max-width: 500px) 100vw, 500px"/>
                            </router-link>
                            <div class="list-col2">
                              <div class="list-col8 ">
                                <div class="gridview">
                                  <div class="price-box"><span class="woocommerce-Price-amount amount">{{item.price}}</span></div>

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
                            <div class="price-box"><span class="woocommerce-Price-amount amount">
                              {{ item.price}} đ</span></div>

                          </div>
                        </div>
                        <div class="clearfix"></div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vc_row wpb_row vc_row-fluid banner-text vc_custom_1458807635262">
        <div class="row-container">
          <div class="wpb_column vc_column_container vc_col-sm-6">
            <div class="vc_column-inner ">
              <div class="wpb_wrapper">
                <div class="wpb_text_column wpb_content_element ">
                  <div class="wpb_wrapper">
                    <div class="des-banner">
                      <p class="des-1">online&amp;in-store</p>
                      <h4>sport shoes collection</h4>
                      <h2>entire shoes purchase<br/>
                        save up to $70</h2>
                      <p><a class="buton" href="#">see the collection</a></p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="wpb_column vc_column_container vc_col-sm-6">
            <div class="vc_column-inner ">
              <div class="wpb_wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import {mapActions} from "vuex";
import {config} from "../constants/config";
export default {
  name: "Home",
  components: {VueGoogleAutocomplete},

  data: function () {
    return {
      address: '',
      cateID: 0,
      listCate:[],
      listProduct:[],
      listProductNew:[],
      cateIndex: 0
    }
  },
 created() {
   this.getListProductCategory(-1).then(r=>{
     console.log('res getProductCategory', r)
     this.listCate = r.data.data.data
     this.cateID = r.data.data.data[0].id
     this.cateIndex = r.data.data.data[0].id
     this.filterProduct({category_id:r.data.data.data[0].id}).then(res=>{
       console.log('res filterProduct',res)
       this.listProduct = res.data.data.products

     })
   }).catch(e=>{
     console.log(e)
   })
   this.getListProductNew(-1).then(r=>{
     console.log('res getListProductNew', r)
     this.listProductNew = r.data.data
     console.log('this.listProductNew', this.listProductNew)
   }).catch(e=>{
     console.log(e)
   })
 },
  mounted() {
    // To demonstrate functionality of exposed component functions
    // Here we make focus on the user input

  },


  methods: {
    /**
     * When the location found
     * @param {Object} addressData Data of the found location
     * @param {Object} placeResultData PlaceResult object
     * @param {String} id Input container ID
     */
    ...mapActions(['getListProductCategory','filterProduct','getListProductNew']),
    setProduct(category_id){
      this.cateIndex = category_id
      this.filterProduct({category_id: category_id}).then(res=>{
        console.log('res filterProduct',res)
        this.listProduct = res.data.data.products
      })
    },
    getPathFile(path){
      return config.url_api_back_end_real + path
    }
  }
}
</script>

<style scoped>
.inp-search{
  width: 350px;
  border-radius: 23px;
  height: 48px;
  border: 0;
}
.icon-address{
  position: absolute;
  top: 10px;
  left: 10px;
}
.icon-goto-search{
  position: absolute;
  right: 2px;
  top: 4px;
}
.btn-icon-search{
  background-color: rgb(235, 23, 0) !important;
  color: white;
  height: 40px;
  border: 0;
  width: 40px;
  border-radius: 100%;
  box-shadow: transparent 0px 0px 0px 1px inset;
}
.main-container .shop-products .item-col.first{
  clear: unset;
}
</style>
