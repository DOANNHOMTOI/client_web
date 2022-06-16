<template>
  <form autocomplete="off">
    <div class="row no-gutters custom-search-input">
      <div class="col-lg-10" :class="this.$route.name !== 'Home' ? 'col-left-search' : ''">
        <div class="form-group autocomplete">
          <input v-model="search" @blur="toggle = false" @focus="toggle = true" id="ip-search"
                 class="form-control no_border_r"
                 type="text"
                 placeholder="Địa điểm gần bạn ...">
          <i class="icon_pin_alt"></i>
          <div class="results" v-if="toggle">
            <div class="result" v-for="item in newLocations">
              <span @click="selectResult(item)" @mousedown.prevent>
                {{ item }}
              </span>
            </div>
          </div>

        </div>
      </div>
      <div class="col-lg-2" :class="this.$route.name !== 'Home' ? 'col-right-search' : ''">
        <input type="submit"
               :class="this.search === '' ? 'ip-search-disabled' : ''"
               value="Tìm kiếm"
               @click.prevent="searchMerchant()">
      </div>
    </div>
  </form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "SearchAddress",
  data() {
    return {
      locations:[],
      field: 'name',
      search: this.getterAddressUser,
      toggle: false,
      newLocations: []
    }
  },
  watch: {
    search(val) {
      this.newLocations = [];
      this.getLocationSearch(this.search).then(res => {
        this.locations = res.data.data;
        this.locations.forEach(element => {
          if (this.newLocations.length < 5){ // chỉ lấy 5 item đầu
            this.newLocations.push(element);
          }
        });
      }).catch(e => {
        this.locations = []
      })
    }
  },
  created() {
    console.log('this.getterAddressUser', this.getterAddressUser)
  },
  mounted() {
    // console.log('this.getterAddressUser', this.getterAddressUser)
    this.search = localStorage.getItem('addressUser') != null ? localStorage.getItem('addressUser') :''
  },
  computed: {
    ...mapGetters(['getterAddressUser'])
  },
  methods: {
    ...mapActions(['getLocationSearch','getMerchantFilter']),
    selectResult(location) {
      this.search = location;
      this.$store.commit('SET_ADDRESS_USER',location)
      localStorage.setItem('addressUser',location)
    },
    searchMerchant() {
      if (this.search === '') {
        return false;
      } else {
        this.$router.push({
          path: '/shops/' + this.search, //use name for router push
          params: {location: this.search}
        });
        if (this.$route.name !== 'Home'){
          this.getMerchantFilter(this.search)
        }
      }
    }
  }
}
</script>

<style scoped>
.autocomplete {
  width: 100%;
  position: relative;
  display: inline-block;
}

input {
  border: 1px solid transparent;
  padding: 10px;
  font-size: 16px;
}

input[type=text] {
  width: 100%;
}

input[type=submit] {
  color: #fff;
  cursor: pointer;
}

.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
  background-color: ghostwhite;
  opacity: 0.9;
  text-align: left;
  padding-left: 20px;
}

.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
}

/*when hovering an item:*/
.autocomplete-items div:hover {
  background-color: #e9e9e9;
}

/*when navigating through the items using the arrow keys:*/
.autocomplete-active {
  background-color: DodgerBlue !important;
  color: #ffffff;
}

.custom-search-input {
  background-color: unset;
  padding: 0;
  border-radius: 10px;
}
.custom-search-input {
  box-shadow: none !important;
}
.ip-search-disabled{
 background-color: #bba785 !important;
}
</style>

