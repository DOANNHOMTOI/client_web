<template>
  <div class="sidebar" data-background-color="white" data-active-color="danger">
    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="" class="simple-text">
          <img class="img-logo-sidebar" src="/static/images/logo.png" alt="">
        </a>
      </div>

      <ul class="nav">
        <li class="active">
          <a href="dashboard.html">
            <i class="ti-panel"></i>
            <p>Home</p>
          </a>
        </li>
        <li>
          <a href="">
            <i class="ti-user"></i>
            <p>User Profile</p>
          </a>
        </li>
        <li>
          <a href="">
            <i class="ti-bell"></i>
            <p>Cart</p>
          </a>
        </li>
        <li>
          <a href="">
            <i class="ti-bell"></i>
            <p>Terms of Use</p>
          </a>
        </li>
        <li>
          <a href="">
            <i class="ti-bell"></i>
            <p>Privacy Policy</p>
          </a>
        </li>

        <li>
          <a href="">
            <i class="ti-bell"></i>
            <p>Notifications</p>
          </a>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar2",
}
</script>

<style scoped>

</style>
