import { xhr, msg } from '@/config/api/http'
import { ENTERPRISE_BASE_URL } from '@/config/api/env'

/**
 * @author 秦超
 * @returns 企业管理、工厂中心列表（分页）
 */
export const platformFactoryQuery = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/factory/query`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 企业管理、工厂中心列表（分页）
 */
export const platformFactoryQueryCount = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/factory/query/count`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 企业管理、经销商列表（分页）
 */
export const platformFranchiserQuery = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/franchiser/query`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 企业管理、经销商列表（分页）总数
 */
export const platformFranchiserQueryCount = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/franchiser/query/count`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 二维码管理、获取赋码工厂名称
 */
export const platformFactoryUsable = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/factory/usable`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 企业接口地址
 */
export const enterpriseAddress = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/statistical/enterprise/everyday`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 工厂接口地址
 */
export const factoryAddress = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/statistical/factory/everyday`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 实时状态接口地址
 */
export const statusAddress = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/statistical/query/count`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 我的申请记录列表、分页信息
 */
export const organizSubsidyRecommendRecordQuery = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/subsidy/recommend/record/query`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 我的申请记录列表、分页信息
 */
export const organizSubsidyRecommendRecordCount = async () => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/subsidy/recommend/record/count`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 获取银行列表
 */
export const getBankList = async () => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}publics/bank`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}
