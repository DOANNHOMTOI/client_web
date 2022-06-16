<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <div style="" class="brand-topbar">
          <a id="menu-today-topbar" class="navbar-brand" href="#">Menu Today</a>
          <form role="form">
            <div class="form-group">
              <input id="input-search-topbar" type="text" name="" class="form-control input-lg"
                     placeholder="Search by Food Name" tabindex="1">
            </div>
          </form>
        </div>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="ti-bell"></i>
              <p class="notification">5</p>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#">Notification 1</a></li>
              <li><a href="#">Notification 2</a></li>
              <li><a href="#">Notification 3</a></li>
              <li><a href="#">Notification 4</a></li>
              <li><a href="#">Another notification</a></li>
            </ul>
          </li>
          <li>
            <a href="#" style="padding-top: 6px">
              <img style="width: 30px;" src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="">
              <p>Henrry</p>
            </a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopBar"
}
</script>

<style scoped>

</style>
