// const DECLARE_BASE_URL = process.env.NODE_ENV === 'development' ? '//dec.cpsdb61.com/' : '//dec.cpsdb.com/'

export const env = (() => {
  if (/cpsdb61.com/.test(window.location.hostname)) {
    return 'test'
  } else if (/cpsdb.com/.test(window.location.hostname)) {
    return 'online'
  }
  return 'local'
})()
export const LOCAL_URL = '.test.com'

export const ENTERPRISE_BASE_URL = {
  test: '//ep.cpsdb61.com/',
  online: '//ep.cpsdb.com/',
  local: location.hostname
}[env]

export const BASE_URL = {
  test: '//base.cpsdb61.com/',
  online: '//base.cpsdb.com/',
  local: location.hostname
}[env]

export const EXAM_BASE_URL = {
  test: '//exam.cpsdb61.com/',
  online: '//exam.cpsdb.com/',
  local: location.hostname
}[env]

export const DECLARE_BASE_URL = {
  test: '//dec.cpsdb61.com/',
  online: '//dec.cpsdb.com/',
  local: location.hostname
}[env]

export const IMAGE_SERVER_URL = {
  test: '//pic.cpsdb61.com/',
  online: '//pic.cpsdb.com/',
  local: location.hostname
}[env]

export const DOMAIN = {
  test: 'cpsdb61.com',
  online: 'cpsdb.com',
  local: location.hostname.indexOf(LOCAL_URL) >= 0 ? LOCAL_URL : location.hostname
}[env]

export const GOODS_BASE_URL = {
  test: '//g.cpsdb61.com/',
  online: '//g.cpsdb.com/',
  local: location.hostname.indexOf(LOCAL_URL) >= 0 ? LOCAL_URL : location.hostname
}[env]

export const FANS_BASE_URL = {
  test: '//fans.cpsdb61.com/',
  online: '//fans.cpsdb.com/',
  local: location.hostname.indexOf(LOCAL_URL) >= 0 ? LOCAL_URL : location.hostname
}[env]

export const EXCEL_SERVER_URL = {
  test: '//mp.cpsdb61.com/',
  online: '//mp.cpsdb.com/',
  local: location.hostname
}[env]
