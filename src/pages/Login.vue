<template>
  <div class="page-content">
    <div class="container">

      <article id="post-22" class="post-22 page type-page status-publish hentry">

        <div class="entry-content">
          <div class="woocommerce">


            <div class="u-columns col2-set" id="customer_login">

              <div class="u-column1 col-1" style="float: none;margin: 100px auto;">


                <h2>Đăng Nhập</h2>

                <form class="woocomerce-form woocommerce-form-login login" method="post">


                  <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label for="username">Số điện thoại<span class="required">*</span></label>
                    <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username"
                           id="username" value="">
                  </p>
                  <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label for="password">Mật khẩu <span class="required">*</span></label>
                    <input class="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password"
                           id="password">
                  </p>


                  <p class="form-row" style="margin-top: 20px">
                   <input
                    type="hidden" name="_wp_http_referer" value="/james/my-account/">
                    <input type="button"
                                                                                             class="woocommerce-Button button"
                                                                                             name="login" value="Xác nhận">
                  </p>
                  <p class="woocommerce-LostPassword lost_password">
                    <router-link style="color: #f25862" to="/register">Tạo tài khoản mới ?</router-link>
                  </p>


                </form>


              </div>

            </div>

          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import {validationMixin} from "vuelidate"
import {mapActions} from "vuex";

const {required, maxLength, minLength} = require("vuelidate/lib/validators")

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  mixins: [validationMixin],
  validations: {
    email: {
      required,
    },
    password: {
      required,
    },
  },
  methods: {
    ...mapActions(['login']),
    submitForm() {
      let data = {
        email: this.email,
        password: this.password,
      }
      this.login(data).then(res => {
        console.log('RES', res)
      }).catch(e => {
        console.log(e)
      })
    },
  },
  created() {
    if (this.$route.params != null) {
      this.email = this.$route.params.data.email;
      this.password = this.$route.params.data.password
    }
  }
}
</script>

<style scoped>

</style>
