<template>
  <div class="modal fade" id="modalQrCode" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Quét mã QR sau để hoàn thành đơn hàng</h5>
        </div>
        <div class="modal-body">
          <img src="" alt="Lỗi khi lấy dữ liệu" id="imgQrCode">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalQrCode"
}
</script>

<style scoped>

</style>
