<template>
  <div id="app">
    <div id="yith-wcwl-popup-message">
      <div id="yith-wcwl-message"></div>
    </div>
    <div class="wrapper ">
      <div class="page-wrapper">
        <Header />
        <Loading v-bind:class="{ show: this.isLoading }"/>
        <div class="main-container front-page">
          <div class="page-content">
            <router-view></router-view>
          </div>
        </div>
       <Foot />
      </div><!-- .page -->
    </div><!-- .wrapper -->
  </div>
</template>

<script>
import {mapState} from "vuex";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Foot from "./components/Foot";
import HeaderShop from "./components/Header-Shop";
import {mapActions} from "vuex";

export default {
  name: 'App',
  components: {HeaderShop, Foot, Header, Loading},
  computed: {
    ...mapState(['isLoading']),
  },
  methods: {
    ...mapActions(['checkLogin'])
  },
  created() {
    this.checkLogin();
  },
}
</script>

<style>

</style>
