<template>
  <div class="page-content">
    <div class="container">
      <article
        id="post-22"
        class="post-22 page type-page status-publish hentry"
      >
        <div class="entry-content">
          <div class="woocommerce">
            <div class="u-columns col2-set" id="customer_login">
              <div
                class="u-column1 col-1"
                style="float: none;margin: 100px auto;"
              >
                <h2>thông tin tài khoản</h2>

                <form
                  class="woocomerce-form woocommerce-form-login login"
                  method="post"
                >
                  <p
                    class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
                  >
                    <label for="username"
                      >Họ tên<span class="required">*</span></label
                    ><br />
                    <input
                      v-model="name"
                      type="text"
                      class="woocommerce-Input woocommerce-Input--text input-text"
                      name="username"
                    />
                  </p>
                  <p
                    class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
                  ></p>
                  <p
                    class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
                  >
                    <label for="username"
                      >Mật khẩu<span class="required">*</span></label
                    ><br />
                    <input
                      v-model="password"
                      type="text"
                      class="woocommerce-Input woocommerce-Input--text input-text"
                      name="username"
                      value=""
                    />
                  </p>
                  <p
                    class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
                  >
                    <label for="username">Email</label><br />
                    <input
                      v-model="email"
                      type="email"
                      class="woocommerce-Input woocommerce-Input--text input-text"
                      name="username"
                      value=""
                    />
                  </p>

                  <p
                    class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"
                  >
                    <label for="password"
                      >Địa chỉ <span class="required">*</span></label
                    ><br />
                    <input
                      v-model="address"
                      class="woocommerce-Input woocommerce-Input--text input-text"
                      type="text"
                      name="password"
                      id="password"
                    />
                  </p>

                  <p class="form-row" style="margin-top: 20px">
                    <input
                      @click="submitForm()"
                      type="button"
                      class="woocommerce-Button button"
                      name="login"
                      value="cập nhật thông tin"
                    />
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
import { mapActions, mapGetters, mapState } from "vuex";
import { axiosInstance } from "../helpers/axiosInstance";

export default {
  name: "Info",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      userPhone: null
    };
  },
  created() {
    this.getInfo();
  },
  computed: {
    ...mapGetters(["getInfoUser"])
  },
  methods: {
    ...mapActions(["register"]),
    async getInfo() {
      const info = JSON.parse(this.getInfoUser);
      this.userPhone = info.phone;
      const data = {
        phone: this.userPhone
      };
      JSON.stringify(data);
      await axiosInstance
        .post(`/api/getinfo`, data, {})
        .then(r => {
          (this.name = r.data.data.name),
            (this.email = r.data.data.email),
            (this.password = r.data.data.password),
            (this.phone = r.data.data.phone),
            (this.address = r.data.data.address);
        })
        .catch(e => {
          console.log(e);
        });
    },
    async submitForm() {
      if (
        this.name === "" ||
        this.address === "" ||
        this.phone === "" ||
        this.password === ""
      ) {
        alert("Vui lòng nhập đầy đủ thông tin !");
        return false;
      }
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        phone: this.phone,
        address: this.address
      };
      JSON.stringify(data);
      await axiosInstance
        .post(`/api/update`, data, {})
        .then(r => {
          localStorage.setItem("USER_INFO", JSON.stringify(r.data.data));
          alert("sửa thông tin thành công");
        })
        .catch(e => {
          console.log(e);
        });
      this.getInfo();
    }
  }
};
</script>

<style scoped></style>
