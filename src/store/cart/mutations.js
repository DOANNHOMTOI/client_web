

export default {
  SET_LIST_ITEM_IN_CART(state, payload) {
    state.listItemInCart = payload.length > 0 ? JSON.parse(payload) : []
  },
  SET_ADDRESS_USER(state, payload) {
    state.addressUser = payload
  }
}
