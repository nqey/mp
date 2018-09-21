import { xhr, msg } from '@/config/api/http'

// const apiSrv = process.env.NODE_ENV === 'development' ? '//dec.cpsdb61.com/' : '//dec.cpsdb.com/'
const env = (() => {
  if (/cpsdb61.com/.test(window.location.hostname)) {
    return 'test'
  } else if (/cpsdb.com/.test(window.location.hostname)) {
    return 'online'
  }
  return 'local'
})()

const apiSrv = {
  test: '//dec.cpsdb61.com/',
  online: '//dec.cpsdb.com/',
  local: location.hostname
}[env]

/**
 * @author 秦超
 * @returns login
 */
export const doLogin = async (params) => {
  const res = await xhr.post(`${apiSrv}publics/login`, params)
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
  const res = await xhr.get(`${apiSrv}publics/declare/organiz`, params)
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
  const res = await xhr.get(`${apiSrv}publics/declare/organiz/count`, params)
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
  const res = await xhr.get(`${apiSrv}publics/user/${type}`, params)
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
  const res = await xhr.get(`${apiSrv}publics/user/count/${type}`, params)
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
  const res = await xhr.post(`${apiSrv}publics/user/password`, params)
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
  const res = await xhr.post(`${apiSrv}publics/organiz`, params)
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
  const res = await xhr.post(`${apiSrv}organiz/baseInfo`, params)
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
  const res = await xhr.get(`${apiSrv}organiz/baseInfo`)
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
  const res = await xhr.post(`${apiSrv}organiz/registInfo`, params)
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
  const res = await xhr.get(`${apiSrv}organiz/registInfo/${areaCode}`)
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
