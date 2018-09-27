import { xhr, msg } from '@/config/api/http'
import { FANS_BASE_URL } from '@/config/api/env'

/**
 * @author 秦超
 * @returns 关注人数接口地址
 */
export const fansNumberAddress = async (params) => {
  const res = await xhr.get(`${FANS_BASE_URL}organiz/statistical/fansnumber`, {
    params
  })
  // 判断http状态码
  if (res && [200, 304, 400].indexOf(res.status) > -1) {
    if (!res.data.success) {
      msg.error(res.data.message)
    }
  } else {
    msg.error('网络异常')
  }
  return res.data.data || Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 粉丝接口地址
 */
export const fansAddress = async (params) => {
  const res = await xhr.get(`${FANS_BASE_URL}organiz/statistical/linechart`, {
    params
  })
  // 判断http状态码
  if (res && [200, 304, 400].indexOf(res.status) > -1) {
    if (!res.data.success) {
      msg.error(res.data.message)
    }
  } else {
    msg.error('网络异常')
  }
  return res.data.data || Promise.reject(new Error(res.data.message))
}
