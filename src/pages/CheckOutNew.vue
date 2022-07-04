<template>
  <div>
    <main v-if="!this.isShowOrderStatus" class="bg_gray pattern" style="transform: none;">

      <div class="container margin_60_40" style="transform: none;">
        <div class="row justify-content-center" style="transform: none;">
          <div class="col-xl-6 col-lg-8">
            <div class="box_booking_2 style_2">
              <div class="head">
                <div class="title">
                  <h3>Thông tin khách hàng</h3>
                </div>
              </div>
              <!-- /head -->
              <div class="main">
                <div class="form-group">
                  <label>Họ tên</label>
                  <input @change="checkFillDataToShowPrice" v-model="name" type="text" required class="form-control" placeholder="">
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Email</label>
                      <input @change="checkFillDataToShowPrice" v-model="email" type="email" required class="form-control" placeholder="">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Số điện thoại</label>
                      <input @change="checkFillDataToShowPrice" v-model="phone" type="number" required class="form-control" placeholder="">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Địa chỉ</label>
                  <SearchAddressInCheckout/>
                </div>
              </div>
            </div>
            <div class="box_booking_2 style_2">
              <div class="head">
                <div class="title">
                  <h3>Phương thức vận chuyển</h3>
                </div>
              </div>
              <!-- /head -->
              <div class="main">
                <div class="payment_select">
                  <label class="container_radio">Tới lấy
                    <input type="radio" value="2" v-model="deliveryShipping">
                    <span class="checkmark"></span>
                  </label>
                  <span class="">Miễn Phí</span>
                </div>
                <div class="payment_select">
                  <label class="container_radio">Ahamove
                    <input type="radio" value="5" v-model="deliveryShipping">
                    <span class="checkmark"></span>
                  </label>
                  <span class="font-weight-bold">{{ convertCurrency(this.getterPriceMatrix) }}</span>
                </div>
              </div>
            </div>
            <!-- /box_booking -->
            <div class="box_booking_2 style_2">
              <div class="head">
                <div class="title">
                  <h3>Thanh Toán</h3>
                </div>
              </div>
              <!-- /head -->
              <div class="main d-flex justify-content-between payment_box_form flex-wrap">
                <div class="payment_select col-md-5 col-12">
                  <label class="container_radio">AlePay
                    <input type="radio" value="2" v-model="paymentMethod">
                    <span class="checkmark"></span>
                  </label>
                  <img style="width: 25px;float: right" src="/static/images/alepaylogo.png" alt="">
                </div>
                <div class="payment_select col-md-5 col-12">
                  <label class="container_radio">VietQr
                    <input type="radio" value="3" v-model="paymentMethod">
                    <span class="checkmark"></span>
                  </label>
                  <img style="width: 25px;float: right" src="/static/images/photo_2022-01-24_22-09-37.jpg" alt="">
                </div>
                <div class="payment_select col-md-5 col-12">
                  <label class="container_radio">ATM nội địa
                    <input type="radio" value="4" v-model="paymentMethod">
                    <span class="checkmark"></span>
                  </label>
                  <img style="width: 25px;float: right" src="/static/images/debit-card-icon-10.jpg" alt="">
                </div>
                <div class="payment_select col-md-5 col-12">
                  <label class="container_radio">Thẻ quốc tế
                    <input type="radio" value="5" v-model="paymentMethod">
                    <span class="checkmark"></span>
                  </label>
                  <img style="width: 25px;float: right" src="/static/images/credit-card.png" alt="">
                </div>
                <div class="payment_select col-md-5 col-12">
                  <label class="container_radio">VN Pay
                    <input type="radio" value="6" v-model="paymentMethod">
                    <span class="checkmark"></span>
                  </label>
                  <img style="width: 25px;float: right" src="/static/images/vnpay.png" alt="">
                </div>
                <div class="payment_select col-md-5 col-12">
                  <label class="container_radio">Chuyển khoản
                    <input type="radio" value="7" v-model="paymentMethod">
                    <span class="checkmark"></span>
                  </label>
                  <img style="width: 25px;float: right" src="/static/images/bank.png" alt="">
                </div>
              </div>

              <div class="text-center" style="margin: 30px auto;">
                <button v-if="this.getterListItemInCart.length > 0" @click.prevent="handleCreateOrder" style="width: 100%;padding: 12px" class="btn_1">Đặt Ngay
                </button>
              </div>
            </div>
            <!-- /box_booking -->

            <!-- /box_booking -->
          </div>
          <!-- /col -->
          <CartSideBar/>
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->

    </main>
    <ModalQrCode />
  </div>
</template>

<script>
import HeaderShop from "../components/Header-Shop";
import CartSideBar from "../components/CartSideBar";
import SearchAddress from "../components/SearchAddress";
import SearchAddressInCheckout from "../components/SearchAddressInCheckout";
import {mapActions, mapGetters} from "vuex";
import ModalQrCode from "../components/ModalQrCode";

export default {
  name: "CheckOutNew",
  components: {ModalQrCode, SearchAddressInCheckout, SearchAddress, CartSideBar, HeaderShop},
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      priceShipping: 0,
      paymentMethod : 2,
      deliveryShipping : 2,
      isOrderSuccess : false,
      isShowOrderStatus : false
    }
  },
  computed: {
    ...mapGetters(['getterListItemInCart', 'getterAddressUser', 'getterPriceMatrix'])
  },
  created() {

  },
  mounted() {
    this.$store.commit('SHOW_DROPDOWN_CART',false)
  },
  methods: {
    ...mapActions(['calculateDeliveriesMatrix', 'createOrder']),
    convertCurrency(x) {
      return x.toLocaleString('vi-VN') + ' VNĐ'
    },
    checkFillDataToShowPrice() {

    },
    handleCreateOrder() {
      let orderType = 4;
      let orderMethod = null;
      if (this.paymentMethod == 2){
        orderType = 2
      }
      if (this.paymentMethod == 3){
        orderType = 3
      }
      if (this.paymentMethod == 4){
        orderMethod = 'ATMCARD';
      }
      if (this.paymentMethod == 5){
        orderMethod = 'CREDITCARD';
      }
      if (this.paymentMethod == 6){
        orderMethod = 'QRPAY';
      }
      if (this.paymentMethod == 7){
        orderMethod = 'BANKTRANSFER';
      }
      let data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        orderType : orderType,
        orderMethod : orderMethod,
        deliveryShipping : parseInt(this.deliveryShipping),
        cart: this.getterListItemInCart,
        addressUer: this.getterAddressUser,
        priceTotal: this.getterPriceMatrix
      }
      this.createOrder(data).then(res => {
        // this.isShowOrderStatus = true
        console.log('RES handleCreateOrder', res)
        if (res && res.data.status_code == 200) {
          // this.isOrderSuccess = true
          if (this.paymentMethod == 3) {
            $('#imgQrCode').attr('src',res.data.data.qr_code)
            $('#modalQrCode').modal({
              backdrop: 'static',
              keyboard: true,
              show: true
            });
          }
          else{
            if (!res.data.data.checkout_url){
              this.isShowOrderStatus = true
            }else{
              window.location.href = res.data.data.checkout_url
            }
          }
        }else {
          console.log('false handleCreateOrder')
          this.isShowOrderStatus = true
        }
      }).catch(e => {
        this.isShowOrderStatus = true
        console.log('catch handleCreateOrder', e)
      });
    }
  }
}
</script>

<style scoped>
.box_booking_2 {
  overflow: unset !important;
  box-shadow: unset;
  margin-bottom: 0;
  -webkit-box-shadow: unset;
}

.head {
  background: gray;
}

.payment_select span {
  float: right;
  font-size: 16px;
}
.payment_box_form .payment_select{
  padding: 25px;
  width: 100%;
  border-radius: 20px;
}
@media (max-width: 768px) {
  .payment_box_form .payment_select{
    padding: 12px;
  }
  .payment_box_form .payment_select img{
  }
}
</style>
