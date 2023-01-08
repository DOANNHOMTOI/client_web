
export default {
  getterListItemInCart: state => {
    const idUser = state.idUser;
    let listItemInCart =  state.listItemInCart;
    let listItemInCart_New = listItemInCart.map(item => {
      item.idUser = idUser
    })
    return listItemInCart_New || [];
  },
  getterAddressUser: state => {
    return localStorage.getItem('addressUser') != null ? localStorage.getItem('addressUser') : state.addressUser;
  },
}
