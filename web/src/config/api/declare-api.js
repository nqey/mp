import { xhr, msg } from '@/config/api/http'
import { DECLARE_BASE_URL } from '@/config/api/env'

/**
 * @author 秦超
 * @returns login
 */
export const doLogin = async (params) => {
  const res = await xhr.post(`${DECLARE_BASE_URL}publics/declarer`, params)
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
 * @returns 申报服务处列表
 */
export const getDeclareOrganiz = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}publics/declare/organiz`, params)
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
 * @returns 申报服务处总数
 */
export const getDeclareOrganizCount = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}publics/declare/organiz/count`, params)
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
 * param type 2: 市级 3:省级
 * @returns 查询服务中心列表
 */
export const getDeclareFwzx = async (type, params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}publics/user/${type}`, params)
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
 * param type 2: 市级 3:省级
 * @returns 查询服务中心列表
 */
export const getDeclareFwzxCount = async (type, params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}publics/user/count/${type}`, params)
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
 * @returns 修改密码
 */
export const putPassword = async (params) => {
  const res = await xhr.post(`${DECLARE_BASE_URL}publics/user/password`, params)
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
 * @returns 申报服务处注册
 */
export const postOrganiz = async (params) => {
  const res = await xhr.post(`${DECLARE_BASE_URL}publics/organiz`, params)
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
 * @returns 完善基本信息
 */
export const putBaseinfo = async (params) => {
  const res = await xhr.post(`${DECLARE_BASE_URL}organiz/baseInfo`, params)
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
 * @returns 查询申报服务处基本信息
 */
export const getBaseinfo = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/baseInfo`)
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
 * @returns 填表登记
 */
export const registInfo = async (params) => {
  const res = await xhr.post(`${DECLARE_BASE_URL}organiz/registInfo`, params)
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
 * @returns 获取负责区域名额
 */
export const getArealimitAreacode = async (areaCode) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/registInfo/${areaCode}`)
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
 * @returns 获取推荐列表
 */
export const declareGetRecommend = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/recommend/list`, {
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
 * @returns 获取推荐列表总条数
 */
export const declareGetRecommendCount = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/recommend/count`)
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
 * @returns 我的补贴金额
 */
export const organizDeclarerRecommendAmount = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/subsidy/amount`)
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
 * @returns 申报官、申报服务处补贴明细
 */
export const organizDeclarerRecommendAmountDetail = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/subsidy/detail`)
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
 * @returns 查询企业列表
 */
export const exterpriseList = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/enterprise/list`, {
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
 * @returns 企业总条数
 */
export const exterpriseListCount = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/enterprise/count`, {
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
 * @returns 获取银行列表
 */
export const getBankList = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}publics/bank`)
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
 * @returns 申请提现
 */
export const applySubsidy = async (params) => {
  const res = await xhr.post(`${DECLARE_BASE_URL}organiz/subsidy`, params)
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
 * @returns 提现记录
 */
export const subsidyRecard = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/subsidy/list`)
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
 * @returns 提现记录总数
 */
export const subsidyRecardCount = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/subsidy/count`)
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
 * @returns 获取历史提现银行
 */
export const getOrganizSubsidyBank = async () => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/subsidy/bank`)
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
 * @author zsp
 * @returns 申报服务处
 */
export const getOrganizList = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/list`, {
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
 * @author zsp
 * @returns 申报服务处总数
 */
export const getOrganizListCount = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/count`, {
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
 * @author zsp
 * @returns 申报官
 */
export const getOrganizDeclarerList = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/declarer/list`, {
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
 * @author zsp
 * @returns 申报官总数
 */
export const getOrganizDeclarerListCount = async (params) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/declarer/count`, {
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
 * @author zsp
 * @returns 删除
 */
export const deletePlatformDeclarer = async (id) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}platform/declarer/delete/${id}`)
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
 * @author zsp
 * @returns 删除
 */
export const delPlatformOrganiz = async (id) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}platform/organiz/delete/${id}`)
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
  const res = await xhr.post(`${DECLARE_BASE_URL}organiz/enterprise/info`, params)
  // 判断http状态码
  if (res && [200, 304, 400].indexOf(res.status) > -1) {
    if (!res.data.success) {
      msg.error(res.data.message)
    }
  } else {
    msg.error('网络异常')
  }
  if (res.data.message) Promise.reject(new Error(res.data.message))
  return res.data.data
}

/**
 * @author zsp
 * @returns 企业详情
 */
export const getOrganizEnterpriseId = async (id) => {
  const res = await xhr.get(`${DECLARE_BASE_URL}organiz/enterprise/${id}`)
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
