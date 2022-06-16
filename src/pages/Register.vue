<template>
  <main class="bg_gray pattern">

    <div class="container margin_60_40">
      <div class="row justify-content-center content-login">
        <div class="col-lg-4">
          <div class="sign_up">
            <div class="head">
              <div class="title">
                <h3>Đăng Ký</h3>
              </div>
            </div>
            <!-- /head -->
            <div class="main">
              <h6>Thông tin của bạn</h6>
              <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
                <input v-model="$v.email.$model" class="form-control" :class="{ 'form-control--error': $v.email.$error}"
                       placeholder="Email">
                <i class="icon_mail"></i>
              </div>
              <div class="error-form-msg" v-if="$v.email.$error && !$v.email.required">Nhập Email của bạn</div>

              <div class="form-group">
                <input v-model="phone" class="form-control" placeholder="Số điện thoại">
                <i class="icon_phone"></i>
              </div>

              <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                <div class="hideShowPassword-wrapper"
                     style="position: relative; display: block; vertical-align: baseline; margin: 0px;">
                  <input v-model="$v.password.$model"
                         class="form-control hideShowPassword-hidden hideShowPassword-field"
                         placeholder="Mật khẩu" id="password_sign"
                         name="password_sign"
                         autocapitalize="off" autocomplete="off" spellcheck="true" type="password"
                         :class="{ 'form-control--error': $v.password.$error}"
                         style="margin: 0px; padding-right: 51.1094px;">
                  <button type="button" role="button" aria-label="Show Password"
                          title="Show Password" tabindex="0"
                          class="my-toggle hideShowPassword-toggle-show"
                          aria-pressed="false"
                          style="position: absolute; right: 0px; top: 50%; margin-top: -15px; display: none;">Hiện
                  </button>
                </div>
                <i class="icon_lock"></i>
              </div>
              <div class="error-form-msg" v-if="$v.password.$error && !$v.password.required">Nhập mật khẩu mới</div>


              <div class="form-group" :class="{ 'form-group--error': $v.repeatPassword.$error }">
                <div class="hideShowPassword-wrapper"
                     style="position: relative; display: block; vertical-align: baseline; margin: 0px;">
                  <input v-model="$v.repeatPassword.$model"
                         class="form-control hideShowPassword-hidden hideShowPassword-field"
                         placeholder="Nhập lại mật khẩu" id=""
                         :class="{ 'form-control--error': $v.repeatPassword.$error}"
                         name=""
                         autocapitalize="off" autocomplete="off" spellcheck="true" type="password"
                         style="margin: 0px; padding-right: 51.1094px;">
                  <button type="button" role="button" aria-label="Show Password"
                          title="Show Password" tabindex="0"
                          class="my-toggle hideShowPassword-toggle-show"
                          aria-pressed="false"
                          style="position: absolute; right: 0px; top: 50%; margin-top: -15px; display: none;">Hiện
                  </button>
                </div>
                <i class="icon_lock"></i>
              </div>
              <div class="error-form-msg" v-if="$v.repeatPassword.$error && !$v.repeatPassword.sameAsPassword">Mật khẩu
                không khớp
              </div>

              <a href="" class="btn_1 full-width mb_5" @click.prevent="submitForm()">Đăng ký</a>
              <div data-v-24d25cc4="" class="text-center">
                Bạn đã có tài khoản?
                <router-link to="/login">
                  Đăng nhập tại đây
                </router-link>
              </div>
            </div>
          </div>
          <!-- /box_booking -->
        </div>
        <!-- /col -->

      </div>
      <!-- /row -->
    </div>
    <!-- /container -->

  </main>
</template>

<script>
import {validationMixin} from "vuelidate"
import {mapActions} from "vuex";

const {required, maxLength, sameAs, minLength} = require("vuelidate/lib/validators")

export default {
  name: "Register",
  data() {
    return {
      email: '',
      phone: '',
      password: '',
      repeatPassword: '',
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
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    ...mapActions(['register']),
    submitForm() {
      let data = {
        email: this.email,
        phone: this.phone,
        password: this.password,
      }
      this.register(data).then(res => {
        console.log('RES', res)
      }).catch(e => {
        console.log(e)
      })
    },
  }
}
</script>

<style scoped>

</style>
