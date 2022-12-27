<template>
  <div class="btn-go-home">
    <router-link to="/">
      <span>
        bạn đã thanh toán thành công chúng tôi sẽ gửi bạn đơn hàng sớm
        nhất</span
      >
      về trang chủ để mua sắm nào
    </router-link>
  </div>
</template>

<script>
import { axiosInstance } from "../helpers/axiosInstance";

export default {
  name: "CallBack",
  methods: {
    async goHome(data) {
      try {
        await axiosInstance
          .post("/api/web/callback-momo", data, {})
          .then(async res => {
            console.log(res);
            alert(res.data.message);
            return res;
          })
          .catch(error => {
            return false;
          });
      } catch (error) {
        return false;
      }
    }
  },
  mounted() {
    console.log("ok", this.$route.query.orderId);

    this.goHome({
      orderId: this.$route.query.orderId
    });
  }
};
</script>

<style>
.btn-go-home {
  margin: auto;
  height: 100px;
  margin-top: 100px;
  background: blue;
  margin-bottom: 200px;
  padding: 20px;
}
span {
  color: white;
}
</style>

<!-- partnerCode&orderId&requestId&amount -->
