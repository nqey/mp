import { xhr, msg } from '@/config/api/http'
import { DECLARE_BASE_URL } from '@/config/api/env'

/**
 * @author 秦超
 * @returns login
 */
export const doLogin = async (params) => {
  const res = await xhr.post(`${DECLARE_BASE_URL}publics/declarer`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 申报服务处列表
 */
export const getDeclareOrganiz = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}publics/declarer/list`, {
    params
  })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 申报服务处列表
 */
export const getFreedomList = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}publics/organiz/freedomList`, {
    params
  })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 申报服务处列表
 */
export const getfreedomCount = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}publics/organiz/freedomCount`, {
    params
  })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 申报服务处总数
 */
export const getDeclareOrganizCount = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}publics/declarer/count`, {
    params
  })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * param type 2: 市级 3:省级
 * @returns 查询服务中心列表
 */
export const getDeclareFwzx = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}publics/provence/list`, { params })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * param type 2: 市级 3:省级
 * @returns 查询服务中心列表
 */
export const getDeclareFwzxCount = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}publics/provence/count`, { params })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 修改密码
 */
export const putPassword = async (params) => {
  const res = await xhr.post(`${DECLARE_BASE_URL}publics/user/password`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 申报服务处注册
 */
export const postOrganiz = async (params) => {
  const res = await xhr.post(`${DECLARE_BASE_URL}publics/organiz/addInfo`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 完善基本信息
 */
export const putBaseinfo = async (params) => {
  const res = await xhr.post(`${DECLARE_BASE_URL}organiz/baseInfo`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 查询申报服务处基本信息
 */
export const getBaseinfo = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/baseInfo`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 填表登记
 */
export const registInfo = async (params) => {
  const res = await xhr.post(`${DECLARE_BASE_URL}organiz/registInfo`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 获取负责区域名额
 */
export const getArealimitAreacode = async (areaCode) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}publics/arealimit`, {
    params: {
      areaCode
    }
  })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 获取推荐列表
 */
export const declareGetRecommend = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/recommend/list`, {
    params
  })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 获取推荐列表总条数
 */
export const declareGetRecommendCount = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/recommend/count`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 我的补贴金额
 */
export const organizDeclarerRecommendAmount = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/subsidy/amount`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 申报官、申报服务处补贴明细
 */
export const organizDeclarerRecommendAmountDetail = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/subsidy/detail`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 查询企业列表
 */
export const exterpriseList = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/enterprise/list`, {
    params
  })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 企业总条数
 */
export const exterpriseListCount = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/enterprise/count`, {
    params
  })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 获取银行列表
 */
export const getBankList = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}publics/bank`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 申请提现
 */
export const applySubsidy = async (params) => {
  const res = await xhr.post(`${DECLARE_BASE_URL}organiz/subsidy`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 提现记录
 */
export const subsidyRecard = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/subsidy/list`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 提现记录总数
 */
export const subsidyRecardCount = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/subsidy/count`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 获取历史提现银行
 */
export const getOrganizSubsidyBank = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/subsidy/bank`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author zsp
 * @returns 申报服务处
 */
export const getOrganizList = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/list`, {
    params
  })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author zsp
 * @returns 申报服务处总数
 */
export const getOrganizListCount = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/count`, {
    params
  })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author zsp
 * @returns 申报官
 */
export const getOrganizDeclarerList = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/declarer/list`, {
    params
  })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author zsp
 * @returns 申报官总数
 */
export const getOrganizDeclarerListCount = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/declarer/count`, {
    params
  })
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author zsp
 * @returns 删除
 */
export const deletePlatformDeclarer = async (id) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}platform/declarer/delete/${id}`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author zsp
 * @returns 删除
 */
export const delPlatformOrganiz = async (id) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}platform/organiz/delete/${id}`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author 秦超
 * @returns 我的申请记录列表、分页信息
 */
export const addEnterprise = async (params) => {
  const res = await xhr.post(`${DECLARE_BASE_URL}organiz/enterprise/info`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author zsp
 * @returns 企业详情
 */
export const getOrganizEnterpriseId = async (id) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/enterprise/${id}`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author zsp
 * @returns 申报官详情
 */
export const getOrganizDeclarerDetails = async (id) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/declarer/details/${id}`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author zsp
 * @returns 省级服务中心注册
 */
export const postPublicsProvenceRegister = async (params) => {
  const res = await xhr.post(`${DECLARE_BASE_URL}publics/provence/register`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author zsp
 * @returns 省级服务中心详情
 */
export const getOrganizProvenceId = async (id) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/provence/${id}`)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}

/**
 * @author zsp
 * @returns 省级服务中心修改
 */
export const putOrganizProvenceId = async (id, params) => {
  const res = await xhr.put(`${DECLARE_BASE_URL}organiz/provence/${id}`, params)
  if (!res.data.success) msg.error(res.data.message)
  return res.data.success ? res.data.data : Promise.reject(new Error(res.data.message))
}
