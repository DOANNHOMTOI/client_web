
export default {
  getterListMerchantSearch: state => {
    console.log('getterListMerchantSearch')
    return state.listShopFilterSearch;
  },
  getterPriceMatrix: state => {
    console.log('getterPriceMatrix')
    return state.priceMatrix;
  },
}
