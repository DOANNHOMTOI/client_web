import {isEmptyObject} from "../../helpers";

export default {
  listItemInCart: !isEmptyObject(localStorage.getItem('carts')) ? JSON.parse(localStorage.getItem('carts')) : [],
  addressUser: '',
  idUser :!isEmptyObject(localStorage.getItem('USER_INFO')) ? JSON.parse(localStorage.getItem('USER_INFO')) : "", 
}
