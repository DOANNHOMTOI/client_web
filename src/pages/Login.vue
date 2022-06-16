<template>
  <main class="bg_gray pattern">
    <div class="container margin_60_40">
      <div class="row justify-content-center content-login">
        <div class="col-lg-4">
          <div class="sign_up">
            <div class="head">
              <div class="title">
                <h3>Đăng Nhập</h3>
              </div>
            </div>
            <!-- /head -->
            <div class="main">
              <form action="" @submit.prevent="submitForm()">
                <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
                  <input v-model="$v.email.$model" class="form-control" :class="{ 'form-control--error': $v.email.$error}"
                         placeholder="Email">
                  <i class="icon_mail"></i>
                </div>
                <div class="error-form-msg" v-if="$v.email.$error && !$v.email.required">Nhập Email của bạn</div>

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
                <div class="error-form-msg" v-if="$v.password.$error && !$v.password.required">Nhập mật khẩu</div>
                <div class="clearfix add_bottom_15">
                  <div class="checkboxes float-left" style="width: 100%;">
                    <label class="container_check">Nhớ mật khẩu
                      <input type="checkbox"> <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="float-right mt-1">
<!--                    <a id="forgot" href="javascript:void(0);">Quên mật khẩu?</a>-->
                  </div>
                </div>
                <div class="text-center">
                  <input
                    type="submit"
                    value="Đăng Nhập"
                    class="btn_1 full-width mb_5">
                  Bạn chưa có tài khoản?
                  <router-link to="/register">
                    Đăng ký tại đây
                  </router-link>
                </div>
              </form>
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
    if (this.$route.params != null){
      this.email = this.$route.params.data.email;
      this.password = this.$route.params.data.password
    }
  }
}
</script>

<style scoped>

</style>
