import { xhr } from '@/config/api/http'

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
  test: '//base.cpsdb61.com/',
  online: '//base.cpsdb.com/',
  local: location.hostname
}[env]

export const DOMAIN = {
  test: 'cpsdb61.com',
  online: 'cpsdb.com',
  local: location.hostname
}[env]

export const VERIFICATION_CODE = `${apiSrv}publics/checknumber.jpg`

/**
 * @author 秦超
 * @returns 最新系统公告
 */
export const getNoticesNewest = async () => {
  const res = await xhr.get(`${apiSrv}publics/notices/newest/declare`)

  return res.data.data
}

/**
 * @author 秦超
 * @returns 系统公告的详情
 */
export const getNoticesDetails = async () => {
  const res = await xhr.get(`${apiSrv}publics/notices/newest/details`)
  return res.data.data
}

/**
 * @author 秦超
 * @returns 系统公告列表
 */
export const getNoticesListing = async () => {
  const res = await xhr.get(`${apiSrv}publics/notices/newest/listing`)
  return res.data.data
}

/**
 * @author 秦超
 * @returns 系统公告总数
 */
export const getNoticesCounts = async () => {
  const res = await xhr.get(`${apiSrv}publics/notices/newest/counts`)
  return res.data.data
}
