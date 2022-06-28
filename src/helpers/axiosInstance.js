import axios from 'axios'
import {config} from "../constants/config";

const axiosInstance = axios.create({
  baseURL: config.url_api_back_end,
  headers: {
    'accept': 'application/json',
    'Authorization' :  'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
  }
});
const axiosClientAPI = axios.create({
  baseURL: config.api_monmi,
  // baseURL: config.api_monmi_local,
})
export {
  // eslint-disable-next-line import/prefer-default-export
  axiosInstance, axiosClientAPI
}
