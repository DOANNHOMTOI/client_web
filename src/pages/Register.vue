<template>
  <div class="page-content">
    <div class="container">

      <article id="post-22" class="post-22 page type-page status-publish hentry">

        <div class="entry-content">
          <div class="woocommerce">


            <div class="u-columns col2-set" id="customer_login">

              <div class="u-column1 col-1" style="float: none;margin: 100px auto;">


                <h2>Tạo tài khoản</h2>

                <form class="woocomerce-form woocommerce-form-login login" method="post">

                  <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label for="username">Họ tên<span class="required">*</span></label>
                    <input v-model="name" type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username">
                  </p>
                  <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label for="username">Số điện thoại<span class="required">*</span></label>
                    <input v-model="phone" type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username"
                           id="username" value="">
                  </p>
                  <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label for="username">Mật khẩu<span class="required">*</span></label>
                    <input v-model="password" type="password" class="woocommerce-Input woocommerce-Input--text input-text" name="username"
                            value="">
                  </p>
                  <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label for="username">Email</label>
                    <input v-model="email" type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="username"
                           value="">
                  </p>

                  <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label for="password">Địa chỉ <span class="required">*</span></label>
                    <input v-model="address" class="woocommerce-Input woocommerce-Input--text input-text" type="text" name="password"
                           id="password">
                  </p>


                  <p class="form-row" style="margin-top: 20px">
                    <input @click="submitForm()" type="button"
                           class="woocommerce-Button button"
                           name="login" value="Xác nhận">
                  </p>
                  <p class="woocommerce-LostPassword lost_password">
                    <router-link to="/login">Bạn đã có tài khoản ? Đăng Nhập tại đây</router-link>
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
import {mapActions} from "vuex";

export default {
  name: "Login",
  data() {
    return {
      name: '',
      email: '',
      password: '',
      phone: '',
      address: '',
    }
  },
  methods: {
    ...mapActions(['register']),
    submitForm() {
      if (this.name === '' || this.address === '' || this.phone === '' || this.password === ''){
        alert('Vui lòng nhập đầy đủ thông tin !')
        return false;
      }
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        phone: this.phone,
        address: this.address,
      }
      this.register(data).then(res => {
        console.log('RES', res)
        if (res.data.success){
          alert('Tạo tài khoản thành công !')
          this.$router.push('/login')
        }else{
          alert('Số điện thoại này đã đăng ký tài khoản trước đó !')
        }
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
