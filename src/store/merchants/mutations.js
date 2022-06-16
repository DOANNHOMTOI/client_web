

export default {
  SET_LIST_REGIONS_DO(state, payload) {
    state.listRegionsDO = payload.regions;
    state.totalRegionDO = payload.meta.total;
  },
  SET_LIST_MERCHANT_FILTER_SEARCH(state, payload) {
    // console.log('SET_LIST_MERCHANT_FILTER_SEARCH', payload)
    state.listShopFilterSearch = payload;
  },
  SET_PRICE_MATRIX(state, payload) {
    console.log('SET_PRICE_MATRIX', payload)
    state.priceMatrix = payload;
  }
}
