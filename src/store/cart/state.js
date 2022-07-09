import {isEmptyObject} from "../../helpers";

export default {
  listItemInCart: !isEmptyObject(localStorage.getItem('carts')) ? JSON.parse(localStorage.getItem('carts')) : [],
  addressUser: ''
}
