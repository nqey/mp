import { xhr, msg } from '@/config/api/http'
import { ENTERPRISE_BASE_URL } from '@/config/api/env'

/**
 * @author 秦超
 * @returns 企业管理、工厂中心列表（分页）
 */
export const platformFactoryQuery = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/factory/query`, params)
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
 * @returns 企业管理、工厂中心列表（分页）
 */
export const platformFactoryQueryCount = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/factory/query/count`, params)
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
 * @returns 企业管理、经销商列表（分页）
 */
export const platformFranchiserQuery = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/franchiser/query`, params)
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
 * @returns 企业管理、经销商列表（分页）总数
 */
export const platformFranchiserQueryCount = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/franchiser/query/count`, params)
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
 * @returns 二维码管理、获取赋码工厂名称
 */
export const platformFactoryUsable = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/factory/usable`, params)
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
 * @returns 企业接口地址
 */
export const enterpriseAddress = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/statistical/enterprise/everyday`, params)
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
 * @returns 工厂接口地址
 */
export const factoryAddress = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/statistical/factory/everyday`, params)
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
 * @returns 实时状态接口地址
 */
export const statusAddress = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/statistical/query/count`, params)
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
 * @returns 我的申请记录列表、分页信息
 */
export const organizSubsidyRecommendRecordQuery = async (params) => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/subsidy/recommend/record/query`, params)
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
 * @returns 我的申请记录列表、分页信息
 */
export const organizSubsidyRecommendRecordCount = async () => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}organiz/subsidy/recommend/record/count`)
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
 * @returns 我的申请记录列表、分页信息
 */
export const addEnterprise = async (params) => {
  const res = await xhr.post(`${ENTERPRISE_BASE_URL}organiz/enterprise/info`, params)
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
 * @returns 获取银行列表
 */
export const getBankList = async () => {
  const res = await xhr.get(`${ENTERPRISE_BASE_URL}publics/bank`)
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
