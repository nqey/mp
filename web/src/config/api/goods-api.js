import { xhr, msg } from '@/config/api/http'
import { GOODS_BASE_URL } from '@/config/api/env'

/**
 * @author 秦超
 * @returns 商品列表
 */
export const platformGoodsQuery = async (params) => {
  const res = await xhr.get(`${GOODS_BASE_URL}organiz/goods/query`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 商品列表总数
 */
export const platformGoodsQueryCount = async (params) => {
  const res = await xhr.get(`${GOODS_BASE_URL}organiz/goods/query/count`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 获取/设置商品规则
 */
export const addPlatformGoodsRules = async (goodsId, params) => {
  const res = await xhr.post(`${GOODS_BASE_URL}organiz/goods/rules/${goodsId}`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 获取/设置商品规则
 */
export const getPlatformGoodsRules = async (goodsId, params) => {
  const res = await xhr.get(`${GOODS_BASE_URL}organiz/goods/rules/${goodsId}`, {
    params
  })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 二维码管理、二维码列表（分页）
 */
export const platformStatisticalCodeQuery = async (params) => {
  const res = await xhr.get(`${GOODS_BASE_URL}organiz/statistical/code/query`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 二维码管理、二维码列表（分页）
 */
export const platformStatisticalCodeQueryCount = async (params) => {
  const res = await xhr.get(`${GOODS_BASE_URL}organiz/statistical/code/query/count`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 二维码管理、二维码列表（分页）
 */
export const platformCodeGetLogs = async () => {
  const res = await xhr.get(`${GOODS_BASE_URL}organiz/code/get/logs`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 二维码管理、二维码列表（分页）
 */
export const platformCodeGetLog = async () => {
  const res = await xhr.get(`${GOODS_BASE_URL}organiz/code/get/log`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 二维码管理、二维码列表（分页）
 */
export const goodsAddress = async () => {
  const res = await xhr.get(`${GOODS_BASE_URL}organiz/statistical/sku/everyday`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 二维码接口地址
 */
export const qrCodeAddress = async () => {
  const res = await xhr.get(`${GOODS_BASE_URL}organiz/statistical/code/everyday`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 二维码接口地址
 */
export const qrCodeSummaryAddress = async () => {
  const res = await xhr.get(`${GOODS_BASE_URL}organiz/statistical/code/summary`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 二维码汇总统计
 */
export const summaryAddress = async () => {
  const res = await xhr.get(`${GOODS_BASE_URL}organiz/statistical/code/summary`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}
