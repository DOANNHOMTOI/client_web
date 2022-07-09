<template>
  <div class="main-container full-width">
    <div class="container">
      <div class="breadcrumbs">
        <router-link to="/">Trang chủ</router-link>
        <span
        class="separator">/</span><span> Giỏ hàng</span></div>
    </div>
    <header class="entry-header">
      <div class="container">
        <h2 class="entry-title">Giỏ hàng</h2>
      </div>
    </header>

    <div class="page-content">
      <div class="container">

        <article id="post-20" class="post-20 page type-page status-publish hentry">

          <div class="entry-content">
            <div v-if="getterListItemInCart.length" class="woocommerce">
              <form action="http://demo.roadthemes.com/james/cart/" method="post">


                <table class="shop_table cart" cellspacing="0">
                  <thead>
                  <tr>
                    <th class="product-name">Tên sản phẩm</th>
                    <th class="product-price">Giá</th>
                    <th class="product-quantity">Số lượng</th>
                    <th class="product-subtotal">Màu</th>
                    <th class="product-subtotal">Size</th>
                    <th class="product-remove"></th>
                  </tr>
                  </thead>
                  <tbody>

                  <tr class="cart_item" v-for="(item,i) in getterListItemInCart">
                    <td class="product-name" style="text-align: left">
                      <img width="55"
                           style="padding-right: 15px"
                           :src="getPathFile(item.product.image)"
                           class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                           alt="7"
                           sizes="(max-width: 200px) 100vw, 200px">
                      <router-link style="color: #3071a9" :to="'/shop/' + item.product.id">{{ item.product.name }}</router-link>
                    </td>
                    <td class="product-name">
                      {{ item.product.price_sale > 0 ? parseInt(item.product.price_sale) : item.product.price }}
                    </td>
                    <td class="product-name">
                      <input class="form-control" type="number" :value="item.qty" @change="changeQtyItem(i,$event)" min="1" max="1000">
                    </td>
                    <td class="product-name">
                      {{ item.attribute.color }}
                    </td>
                    <td class="product-name">
                      {{ item.attribute.size }}
                    </td>
                    <td>
                      <button type="button" @click="delItemCart(i)" class="btn btn-danger">Xoá</button>
                    </td>
                  </tr>

                  </tbody>
                </table>
                <div class="d-flex" style="display: flex;align-items: center;justify-content: flex-end;margin-bottom: 50px">
                  <h3 style="margin: 0; padding-right: 20px">Tổng tiền : </h3> <h2>{{ totalPriceCart() }}</h2>
                </div>
                <div class="d-flex" style="display: flex;align-items: center;justify-content: center;margin-bottom: 100px">
                  <router-link type="button" class="btn btn-primary mb-5" to="/checkout" style="width: 300px;height: 35px">
                    Đặt hàng ngay
                  </router-link>
                </div>
              </form>
            </div>
            <h3 style="padding-bottom: 100px" v-if="!getterListItemInCart.length">
              Chưa có sản phẩm nào trong giỏ
            </h3>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderShop from "./Header-Shop";
import {mapActions, mapGetters} from "vuex";
import {isEmptyObject} from "../helpers";
import {config} from "../constants/config";
export default {
  name: "Cart",
  components: {HeaderShop},
  computed:{
    ...mapGetters(['getterListItemInCart'])
  },
  methods:{
    changeQtyItem(index,e){
      console.log(index)

      let qtyChange = e.target.value
      if (qtyChange < 1) return false
      console.log(qtyChange)

      let carts = this.getterListItemInCart
      console.log(carts[index])
      carts[index].qty = qtyChange
      // carts.splice(i, 1); // 2nd parameter means remove one item only
      //
      localStorage.setItem('carts', JSON.stringify(carts))
      this.$store.commit('SET_LIST_ITEM_IN_CART',JSON.stringify(carts))
    },
    getPathFile(path){
      return config.url_api_back_end_real + path
    },
    delItemCart(i){
      if (!confirm("Xoá sản phẩm khỏi giỏ hàng !")){
        return false
      }
      let carts = this.getterListItemInCart
      carts.splice(i, 1); // 2nd parameter means remove one item only

      localStorage.setItem('carts', JSON.stringify(carts))
      this.$store.commit('SET_LIST_ITEM_IN_CART',JSON.stringify(carts))
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
  },
}
</script>
