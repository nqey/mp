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
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 粉丝接口地址
 */
export const fansAddress = async (params) => {
  const res = await xhr.get(`${FANS_BASE_URL}organiz/statistical/linechart`, {
    params
  })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}
