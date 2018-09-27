import { xhr, msg } from '@/config/api/http'
import { BASE_URL } from '@/config/api/env'

export const VERIFICATION_CODE = `${BASE_URL}publics/checknumber.jpg`

/**
 * @author 秦超
 * @returns 最新系统公告
 */
export const getNoticesNewest = async () => {
  const res = await xhr.get(`${BASE_URL}publics/notices/newest/declare`)

  return res.data.data
}

/**
 * @author 秦超
 * @returns 系统公告的详情
 */
export const getNoticesDetails = async () => {
  const res = await xhr.get(`${BASE_URL}publics/notices/newest/details`)
  return res.data.data
}

/**
 * @author 秦超
 * @returns 系统公告列表
 */
export const getNoticesListing = async () => {
  const res = await xhr.get(`${BASE_URL}publics/notices/newest/listing`)
  return res.data.data
}

/**
 * @author 秦超
 * @returns 系统公告总数
 */
export const getNoticesCounts = async () => {
  const res = await xhr.get(`${BASE_URL}publics/notices/newest/counts`)
  return res.data.data
}

/**
 * @author 秦超
 * @returns 获取地区树
 */
export const getAreaTree = async () => {
  const res = await xhr.get(`${BASE_URL}publics/area/tree`)
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
 * @returns 获取手机验证码
 */
export const getValidatecode = async (type, cellphone) => {
  const res = await xhr.get(`${BASE_URL}publics/sms/${type}/${cellphone}`)
  // 判断http状态码
  if (res && [200, 304, 400].indexOf(res.status) > -1) {
    if (res.data.message) {
      msg.error(res.data.message)
    }
  } else {
    msg.error('网络异常')
  }
  return res.data.data || Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 图片上传
 */
export const uploadFile = async (params) => {
  const res = await xhr.post(`${BASE_URL}publics/file/upload`, params, {
    type: 'upload'
  })
  // 判断http状态码
  if (res && [200, 304, 400].indexOf(res.status) > -1) {
    if (res.data.message) {
      msg.error(res.data.message)
    }
  } else {
    msg.error('网络异常')
  }
  return res.data.data || Promise.reject(new Error(res.data.message))
}
