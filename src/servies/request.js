import axios from 'axios'

import { TIMEOUT, baseURL } from './config'

const instance = axios.create({
  timeout: TIMEOUT,
  baseURL,
})

instance.interceptors.request.use(config => {
  return config
}, err => {
  console.log(err);
})
instance.interceptors.response.use(res => {
  return res.data
}, err => {
  console.log(err);
})

export default instance