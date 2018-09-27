import axios from 'axios'
import qs from 'query-string'
import { Message } from 'element-ui'
import { reomveBlank } from '@/config/utils'

// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = true
// 超时时间20s
axios.defaults.timeout = 20000

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  config.paramsSerializer = params => qs.stringify(params)
  // 在发送请求之前做些什么
  if (['post', 'put', 'patch'].indexOf(config.method) >= 0) {
    if (config.type !== 'upload') {
      config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  } else if (config.method === 'get') {
    config.params = reomveBlank(config.params)
  }
  return config
}, (error) => {
  Promise.reject(error)
})

export const xhr = axios
export const msg = Message
