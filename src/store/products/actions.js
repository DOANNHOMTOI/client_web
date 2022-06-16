
export default {
  async getListMerchant({commit, state}, {}) {
    try {
      var result;
        // result = await axiosDigitalOceanService.get(`/regions`);
      // if (result.status == 200){
      //   let data = result.data.regions.length > 0 ? result.data : [];
      //   commit('SET_LIST_REGIONS_DO', data);
      //   return result;
      // }else {
      //   return false;
      // }
    } catch (error) {
      console.log(error);
      return false;
    }
  },
}
