<template>
  <div>
    <div class="main-container full-width">
      <div class="container">
        <div class="breadcrumbs">
          <router-link to="/">
            Trang chủ
          </router-link>
          <span class="separator">/</span><span> Thanh toán</span>
        </div>
      </div>
      <header class="entry-header">
        <div class="container">
          <h3 style="font-size: 23px" class="entry-title">
            Thông tin đặt hàng
          </h3>
        </div>
      </header>

      <div class="page-content">
        <div class="container">
          <article
            id="post-21"
            class="post-21 page type-page status-publish hentry"
          >
            <div class="entry-content">
              <div class="woocommerce">
                <form
                  name="checkout"
                  method="post"
                  class="checkout woocommerce-checkout"
                  action="http://demo.roadthemes.com/james/checkout/"
                  enctype="multipart/form-data"
                >
                  <div class="row">
                    <div class="col-xs-12 col-md-6">
                      <div id="customer_details">
                        <div class="woocommerce-billing-fields">
                          <div
                            class="woocommerce-billing-fields__field-wrapper"
                          >
                            <p
                              class="form-row form-row-first validate-required"
                              id="billing_first_name_field"
                              data-priority="10"
                            >
                              <label for="billing_first_name" class=""
                                >Họ tên<abbr class="required" title="required"
                                  >*
                                </abbr>
                              </label>
                              <br />
                              <input
                                v-model="name"
                                type="text"
                                class="input-text "
                                name="billing_first_name"
                                required
                                id="billing_first_name"
                                placeholder=""
                                value=""
                                autocomplete="given-name"
                                autofocus="autofocus"
                              />
                            </p>

                            <p
                              class="form-row form-row-last validate-required"
                              id="billing_last_name_field"
                              data-priority="20"
                            >
                              <label for="billing_last_name" class=""
                                >Số điện thoại
                                <abbr class="required" title="required"
                                  >*</abbr
                                ></label
                              >
                              <br /><input
                                v-model="phone"
                                type="number"
                                class="input-text "
                                name="billing_last_name"
                                id="billing_last_name"
                                placeholder=""
                                value=""
                                required
                                autocomplete="family-name"
                              />
                            </p>

                            <p
                              class="form-row form-row-wide address-field validate-required"
                              data-priority="50"
                            >
                              <label for="shipping_address_1" class=""
                                >Email
                              </label>
                              <br /><input
                                type="text"
                                v-model="email"
                                class="input-text "
                                name="shipping_address_1"
                                placeholder="Địa chỉ Email"
                                value=""
                                autocomplete="address-line1"
                              />
                            </p>
                            <p
                              class="form-row form-row-wide address-field validate-required"
                              id="shipping_address_1_field"
                              data-priority="50"
                            >
                              <label for="shipping_address_1" class=""
                                >Địa chỉ nhận hàng
                                <abbr class="required" title="required"
                                  >*</abbr
                                ></label
                              >
                              <br /><input
                                type="text"
                                v-model="address"
                                class="input-text "
                                name="shipping_address_1"
                                required
                                id="shipping_address_1"
                                placeholder="Số nhà, đường , xã , quận ...."
                                value=""
                                autocomplete="address-line1"
                              />
                            </p>
                            <p
                              class="form-row form-row-wide address-field update_totals_on_change validate-required"
                              id="billing_country_field"
                              data-priority="40"
                            >
                              <label class=""
                                >Phương thức thanh toán
                                <abbr class="required" title="required"
                                  >*</abbr
                                ></label
                              >
                              <br />
                              <select
                                class="country_to_state country_select"
                                v-model="selected"
                              >
                                <option value="1"
                                  >Thanh toán khi nhận hàng</option
                                >
                                <option value="2">Thanh toán QR</option>
                                <option value="3"
                                  >Thanh toán qua ngân hàng</option
                                >
                              </select>
                            </p>
                            <p
                              class="form-row form-row-wide address-field update_totals_on_change validate-required"
                            >
                              <label class="">Phương thức vận chuyển</label>
                              <br />
                              <select class="country_to_state country_select">
                                <option value="1"
                                  >Ship toàn quốc (30.000 đ)</option
                                >
                              </select>
                            </p>
                          </div>
                        </div>
                        <div
                          class="woocommerce-additional-fields"
                          style="margin-bottom: 100px"
                        >
                          <div
                            class="woocommerce-additional-fields__field-wrapper"
                          >
                            <p
                              class="form-row notes"
                              id="order_comments_field"
                              data-priority=""
                            >
                              <label class="">Ghi chú</label>
                              <br />
                              <textarea
                                name="order_comments"
                                v-model="note"
                                style="height: 100px"
                                class="input-text "
                                id="order_comments"
                                placeholder="Ghi chú đơn hàng"
                                rows="1"
                                cols="12"
                              ></textarea>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                      <div class="order-box">
                        <div
                          id="order_review"
                          class="woocommerce-checkout-review-order"
                        >
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
                                    width="40"
                                    :src="getPathFile(item.product.image)"
                                    class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                    alt="7"
                                    sizes="(max-width: 200px) 100vw, 200px"
                                  />
                                </a>
                                <div
                                  class="product-details"
                                  style="margin-bottom: 10px"
                                >
                                  <a
                                    style="font-size: 16px"
                                    class="product-name"
                                  >
                                    {{ item.product.name }}
                                  </a>
                                  <span class="quantity"
                                    ><span
                                      class="woocommerce-Price-amount amount"
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
                            <p class="buttons">
                              <router-link to="/cart" class="button wc-forward">
                                Xem giỏ
                              </router-link>
                            </p>
                            <div style="margin-top: 20px">
                              <div
                                class="form-group mx-sm-3 mb-2"
                                style="display: flex;margin-bottom: 0;"
                              >
                                <input
                                  v-model="voucher"
                                  style="border: 1px solid lightgray;height: 38px;"
                                  type="text"
                                  class="form-control"
                                  placeholder="Nhập mã giảm giá nếu có"
                                />
                                <button
                                  @click="applyCode()"
                                  type="button"
                                  class="btn btn-primary mb-2"
                                >
                                  Áp dụng
                                </button>
                              </div>
                              <small
                                style="color: red"
                                v-html="err_code"
                              ></small>
                            </div>
                            <div style="margin-top: 50px">
                              <p
                                style="display: flex;justify-content: space-between;font-size: 16px"
                              >
                                <span style="font-weight: bold">
                                  Giảm giá:
                                </span>
                                <span>
                                  - 20.000 đ
                                </span>
                              </p>
                              <p
                                style="display: flex;justify-content: space-between;font-size: 16px"
                              >
                                <span style="font-weight: bold">
                                  Vận chuyển:
                                </span>
                                <span>
                                  30.000 đ
                                </span>
                              </p>
                              <p
                                style="display: flex;justify-content: space-between;font-size: 16px"
                              >
                                <span style="font-weight: bold">
                                  Tổng thanh toán:
                                </span>
                                <span style="font-weight: bold">
                                  {{ totalPriceOrder() }}
                                </span>
                              </p>
                            </div>
                            <div>
                              <button
                                @click="createOrder()"
                                class="btn btn-primary"
                                type="button"
                                style="width: 100%;margin-top: 30px"
                              >
                                Xác nhận đặt hàng
                              </button>
                            </div>
                          </template>
                          <template v-if="getterListItemInCart.length == 0">
                            <h5 style="font-weight: bold; text-align: center">
                              Chưa có sản phẩm nào trong giỏ
                            </h5>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "./TopBar";
import SideBar2 from "./SideBar2";
import Slide from "../components/Slide";
import Cart from "../components/Cart";
import { mapActions, mapGetters } from "vuex";
import { config } from "../constants/config";

export default {
  name: "Checkout",
  data() {
    return {
      err_code: "",
      name: "",
      phone: "",
      address: "",
      email: "",
      note_customer: "",
      products: "",
      total_price: "",
      shipment_type: 1,
      payment_type: 1,
      voucher_id: "",
      note: "",
      voucher: "",
      percent: "",
      selected: 0
    };
  },
  components: { Cart, Slide, SideBar2, TopBar },
  methods: {
    ...mapActions(["getListProductCategory", "checkVoucher", "createOrderAPI"]),
    getPathFile(path) {
      return config.url_api_back_end_real + path;
    },
    convertCurrency(x) {
      return x.toLocaleString("vi-VN") + " đ";
    },
    totalPriceOrder() {
      let totalPrice = 0;
      this.getterListItemInCart.forEach(function(item) {
        let price =
          item.product.price_sale > 0
            ? parseInt(item.product.price_sale)
            : item.product.price;
        totalPrice += price * item.qty;
      });
      let percent = 1;
      if (this.percent !== "") {
        percent = parseInt(this.percent) / 100;
      } else percent = 1;

      totalPrice = (totalPrice + 30000) * percent;
      return this.convertCurrency(totalPrice);
    },
    createOrder() {
      if (this.name === "" || this.phone === "" || this.address === "") {
        alert("Vui lòng điền đầy đủ thông tin để đặt hàng !");
        return false;
      }
      let obj = {
        name: this.name,
        phone: this.phone,
        address: this.address,
        email: this.email,
        products: JSON.stringify(this.getterListItemInCart),
        total_price: parseInt(
          this.totalPriceOrder()
            .replace(" đ", "")
            .replace(".", "")
        ).toString(),
        shipment_type: "1",
        payment_type: +this.selected,
        voucher_id: this.voucher_id ? this.voucher_id : "null",
        note: this.note
      };
      JSON.parse(JSON.stringify(obj));
      if (this.selected === "1") {
        this.createOrderAPI(obj)
          .then(r => {
            if (r.data.success) {
              alert(
                "Tạo đơn hàng thành công , chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhât !"
              );
              localStorage.removeItem("carts");
              this.$store.commit("SET_LIST_ITEM_IN_CART", []);
              window.location.href = "/";
            } else {
              alert("Có lỗi xảy ra, vui lòng thử lại !");
              return false;
            }
          })
          .catch(e => {
            alert(
                "Tạo đơn hàng thành công , chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhât !"
              );
          });
      }
      if (this.selected === "3") {
        this.createOrderAPI(obj)
          .then(r => {
            if (r.data.success) {
               localStorage.removeItem("carts");
              this.$store.commit("SET_LIST_ITEM_IN_CART", []);
              window.location.href = r.data.data.payUrl;
            } else {
              alert("Có lỗi xảy ra, vui lòng thử lại !");
              return false;
            }
          })
          .catch(e => {
            alert(
                "Tạo đơn hàng thành công , chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhât !"
              );
          });
      }
    },
    applyCode() {
      if (this.voucher === "") return false;
      this.checkVoucher(this.voucher)
        .then(r => {
          if (r.data.data == null) {
            this.err_code = "Mã giảm giá không đúng !";
            return false;
          }
          this.voucher_id = r.data.data.id;
          this.percent = r.data.data.percent_value;
          this.err_code = "";
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  computed: {
    ...mapGetters(["getterListItemInCart"])
  }
};
</script>

<style scoped>
[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}

[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #666;
}

[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
}

[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "";
  width: 12px;
  height: 12px;
  background: #fb9401;
  position: absolute;
  top: 3px;
  left: 3px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}

[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.form-group.checkbox-ip {
  display: block;
  margin-bottom: 15px;
}

.checkbox-ip input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.checkbox-ip label {
  position: relative;
  cursor: pointer;
}

.checkbox-ip label:before {
  content: "";
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid #0079bf;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
}

.checkbox-ip input:checked + label:after {
  content: "";
  display: block;
  position: absolute;
  top: 2px;
  left: 9px;
  width: 6px;
  height: 14px;
  border: solid #0079bf;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.confirm-checkout button {
  width: 100%;
}
</style>
