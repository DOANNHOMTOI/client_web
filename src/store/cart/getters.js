
export default {
  getterListItemInCart: state => {
    return state.listItemInCart;
  },
  getterAddressUser: state => {
    return localStorage.getItem('addressUser') != null ? localStorage.getItem('addressUser') : state.addressUser;
  },
}
