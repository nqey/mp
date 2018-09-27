import cache from '@/config/cache'
import { xhr } from '@/config/api/http'
import { EXAM_BASE_URL } from '@/config/api/env'

/**
 * @author 秦超
 * @returns 获取答卷
 */
export const getExams = async (id) => {
  const res = await xhr.get(`${EXAM_BASE_URL}exams/declareexamination/app/allsubjects`, {
    adapter: cache({
      local: true
    })
  })
  return res.data.success ? res.data.data : false
}

/**
 * @author 秦超
 * @returns 提交答卷
 */
export const postAnswer = async (params, self) => {
  const res = await xhr.post(`${EXAM_BASE_URL}/exams/declareexamination/submission`, params)
  if (!res.data.success) {
    self.$popup.show({
      title: '提示信息',
      message: `<p style='color: red;padding: 15px;'>${res.data.message}</p>`,
      button: false
    })
  } else {
    let errQS = []
    let scroe = 0;
    [
      res.data.data.single,
      res.data.data.multiple,
      res.data.data.judge,
      res.data.data.fill,
      res.data.data.essay
    ].forEach((o) => {
      errQS = [...errQS, ...o.errorSubjectSortList]
      scroe = scroe + o.score
    })
    self.$popup.show({
      title: '考试提交成功',
      message: `得分<span style="color: #01c853">${scroe}</span>分<hr style="margin:10px 0px"/>错误题号<span style='color: red'>${errQS.sort().join(',')}</span>`,
      button: false
    })
  }
}
