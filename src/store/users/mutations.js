export default {
  SET_LIST_REGIONS_DO(state, payload) {
    state.listRegionsDO = payload.regions;
    state.totalRegionDO = payload.meta.total;
  }
}
