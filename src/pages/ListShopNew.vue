<template>
  <main>
    <div class="page_header element_to_stick">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-7 col-md-7 d-none d-md-block">
            <div class="breadcrumbs">
              <ul>
                <li>
                  <router-link to="/" >Trang chủ</router-link>
                </li>
              </ul>
            </div>
            <h1>{{ this.$route.params.location }}</h1>
          </div>
          <div class="col-xl-4 col-lg-5 col-md-5">
            <SearchAddress />
          </div>
        </div>
        <!-- /row -->
      </div>
    </div>
    <!-- /page_header -->
    <!-- /filters -->

    <div class="container margin_30_40">
      <div class="row" v-if="getterListMerchantSearch.length > 0">
        <div style="margin-bottom: 10px" v-for="(item,index) in getterListMerchantSearch"
             v-if="checkDisplayMerchant(item)"
             class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
        <router-link style="color: #444" :to="'/shop/' + item.slug">
            <div class="strip">
              <figure>

                <div v-if="!checkOpenTime(convertUTC7(item.time_open),convertUTC7(item.time_close))" class="bg-close-time">CLOSE</div>
                <img :src="item.image != null ? item.image.path : '/static/images/location_1.jpg'"
                     :data-src="item.image != null ? item.image.path : '/static/images/location_1.jpg'"
                     class="img-fluid lazy loaded" alt=""
                     data-was-processed="true">
                <router-link :to="'/shop/' + item.slug" class="strip_info">
                  <small v-if="item.categoryInfo !== '' && item.categoryInfo.name">{{item.categoryInfo.name}}</small>
                  <div class="item_title" :class="!checkOpenTime(convertUTC7(item.time_open),convertUTC7(item.time_close)) ? 'shop-close-time' : ''">
                    <h3>{{ item.name}}</h3>

                    <small>{{item.location.address}}</small>
                  </div>
                </router-link>
              </figure>
              <ul>
                <li v-if="convertUTC7(item.time_open) != null && convertUTC7(item.time_close) != null">
                  <span><i class="fas fa-clock"></i> {{convertUTC7(item.time_open)}}:00 - {{convertUTC7(item.time_close)}}:00</span>
                </li>
                <li>
                  <span v-if="checkOpenTime(convertUTC7(item.time_open),convertUTC7(item.time_close))" class="loc_open">Đang mở cửa</span>
                  <span v-if="!checkOpenTime(convertUTC7(item.time_open),convertUTC7(item.time_close))" class="loc_closed">Đóng cửa</span>
                </li>
              </ul>
            </div>
          </router-link>
        </div>
      </div>
      <div class="row" style="margin-bottom: 50px" v-if="getterListMerchantSearch.length == 0">
        <h6>Không tìm thấy nhà hàng nào gần bạn!</h6>
      </div>
    </div>
    <CartBottom />
  </main>
</template>

<script>
import {config} from "../constants/config";
import HeaderShop from "../components/Header-Shop";
import SearchAddress from "../components/SearchAddress";
import {mapActions, mapGetters} from "vuex";
import CartBottom from "../components/CartBottom";

export default {
  name: "ListShopNew",
  components: {CartBottom, SearchAddress, HeaderShop},
  props:{
    listShop : Array
  },
  computed:{
    ...mapGetters(['getterListMerchantSearch'])
  },
  methods:{
    ...mapActions(['getMerchantFilter','getCategoryByMerchant']),
    checkOpenTime(timeOpen,timeClose){
      if (timeOpen === undefined || timeClose === undefined) return false;
      let hourCurrent = new Date().getHours()
      return hourCurrent >= timeOpen && hourCurrent <= timeClose
    },
    checkDisplayMerchant(merchant){
      if (this.convertUTC7(merchant.time_open) === undefined || this.convertUTC7(merchant.time_close) === undefined || merchant.image == null) return false;
      return true
    },
    convertUTC7(time){
      return config.timeUTV7[time]
    }
  },
  created() {
    this.getMerchantFilter(this.$route.params.location)
  },
  mounted() {
    let data = this.$route.params;
    // console.log("params is mounted", data);
    this.$store.commit('SHOW_DROPDOWN_CART',false)
  },
}
</script>

<style scoped>
.custom-search-input .col-left{
  max-width: 70%;
}
.custom-search-input .col-right{
  max-width: 30%;
}
</style>
