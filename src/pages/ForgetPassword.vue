<template>
    <div class="page-content">
        <div class="container">
            <article id="post-22" class="post-22 page type-page status-publish hentry">
                <div class="entry-content">
                    <div class="woocommerce">
                        <div class="u-columns col2-set" id="customer_login">
                            <div class="u-column1 col-1" style="float: none;margin: 100px auto;">
                                <h2>Quên mật khẩu</h2>
                                <form class="woocomerce-form woocommerce-form-login login" method="post">
                                    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                        <label for="username">Email</label><br />
                                        <input v-model="email" type="email"
                                            class="woocommerce-Input woocommerce-Input--text input-text" name="username"
                                            value="">
                                    </p>

                                    <p class="form-row" style="margin-top: 20px">
                                        <input @click="submitForm()" type="button" class="woocommerce-Button button"
                                            name="login" value="Xác nhận">
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
import { mapActions } from "vuex";

export default {
    name: "Login",
    data() {
        return {
            email: '',
        }
    },
    methods: {
        ...mapActions(['forget']),
        validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        },
        submitForm() {
            if (this.email === '') {
                alert('Vui lòng nhập đầy đủ thông tin !')
                return false;
            }
            if (!this.validateEmail(this.email)) {
                alert("nhập đúng định dạng email")
            }
            let data = {
                email: this.email,

            }
            if (this.email !== '' && this.validateEmail(this.email)) {
                this.forget(data).then(res => {
                    if (res.success == true) {
                        alert(res.data.message)
                        this.$router.push('/login').catch(() => { })
                    }
                    else {
                        alert("không tìm thấy tài khoản")
                    }
                }).catch(e => {
                    alert(e)
                    console.log(e)
                })
            }
        },
    },

}
</script>

<style scoped>

</style>
