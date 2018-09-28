export const ENTERPRISE_TYPE = {
  wait: '待支付',
  pending: '待初审',
  collectting: '待认证官上门采集',
  confirmFailed: '初审未通过',
  reject2: '审核未通过',
  pending2: '待复审',
  confirm2Failed: '复审未通过',
  passed: '通过审核'
}

export const TRAFFIC_LIGHT = {
  red: 'red',
  yellow: '#ec971f',
  green: '#5cb85c'
}

// 工厂管理新增 9-20 zsp
export const FACTORY_TYPE = {
  1: '生产工厂',
  2: '赋码工厂'
}

export const FACTORY_STATE = {
  pending: '待审核',
  passed: '已审核',
  // deleted: '已作废',
  failed: '未通过',
  draft: '待提交'
}

export const VALID_PERIOD_TYPE = {
  year: '年',
  month: '个月',
  day: '天'
}
export const FRANCHISER_USER_STATE = {
  unusering: '信息未完善',
  wait: '信息待审核',
  failed: '审核未通过',
  usering: '正常',
  lock: '锁定'
}
export const getShelflife = (value, type) => {
  if (value === -1) {
    return '永久'
  }
  return value + VALID_PERIOD_TYPE[type]
}
export const CODE_TYPE = {
  1: '数据一物一码',
  2: '图像一物一码',
  3: '普通图像'
}

export const CODE_DETAIL_STATE = {
  normal: '正常',
  highRisk: '异常'
}

export const ORGANIZ_STATE = {
  baseWaitSubmit: {
    name: '基本信息待填写',
    color: TRAFFIC_LIGHT.yellow
  },
  baseWaitPending: {
    name: '基本信息待初审',
    color: TRAFFIC_LIGHT.yellow
  },
  baseWaitAudit: {
    name: '基本信息待审核',
    color: TRAFFIC_LIGHT.yellow
  },
  baseUnPass: {
    name: '基本信息未通过',
    color: TRAFFIC_LIGHT.red
  },

  registWaitSubmit: {
    name: '登记信息待填写',
    color: TRAFFIC_LIGHT.yellow
  },
  registWaitPending: {
    name: '登记信息待初审',
    color: TRAFFIC_LIGHT.yellow
  },
  registWaitAudit: {
    name: '登记信息待审核',
    color: TRAFFIC_LIGHT.yellow
  },
  registUnPass: {
    name: '登记信息未通过',
    color: TRAFFIC_LIGHT.red
  },
  delete: {
    name: '已删除',
    color: TRAFFIC_LIGHT.red
  },
  passed: {
    name: '通过审核',
    color: TRAFFIC_LIGHT.green
  }
}
export const DECLARE_STATE = {
  waitPay: {
    name: '待支付',
    color: TRAFFIC_LIGHT.yellow
  },
  waitPending: {
    name: '待初审',
    color: TRAFFIC_LIGHT.yellow
  },
  waitAuthen: {
    name: '认证信息待填写',
    color: TRAFFIC_LIGHT.yellow
  },
  waitAudit: {
    name: '待审核',
    color: TRAFFIC_LIGHT.yellow
  },
  unpass: {
    name: '未通过',
    color: TRAFFIC_LIGHT.red
  },
  passed: {
    name: '已通过',
    color: TRAFFIC_LIGHT.green
  },
  delete: {
    name: '删除中',
    color: TRAFFIC_LIGHT.red
  },
  deleted: {
    name: '已删除',
    color: TRAFFIC_LIGHT.red
  }
}
