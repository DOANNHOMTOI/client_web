
export default {
  getterListItemInCart: state => {
    const idUser = state.idUser.id;
    let listItemInCart =  state.listItemInCart;
    let listItemInCart_New = listItemInCart.filter(item => {
      if(item.idUser == idUser)
      {
        return item
      }
    })
      return listItemInCart_New;
  },
  getterAddressUser: state => {
    return localStorage.getItem('addressUser') != null ? localStorage.getItem('addressUser') : state.addressUser;
  },
}
