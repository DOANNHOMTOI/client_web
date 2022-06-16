import {isEmptyObject} from "../../helpers";

export default {
  listItemInCart: !isEmptyObject(sessionStorage.getItem('CARTS')) ? JSON.parse(sessionStorage.getItem('CARTS')) : [],
  addressUser: ''
}
