// 云函数：获取睡眠统计数据
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})

const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const openid = wxContext.OPENID
  const { period = 'week' } = event

  try {
    // 计算日期范围
    let startDate
    const today = new Date()
    
    switch (period) {
      case 'day':
        startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())
        break
      case 'week':
        startDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
        break
      case 'month':
        startDate = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)
        break
      case 'year':
        startDate = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000)
        break
      default:
        startDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
    }

    const startDateStr = startDate.toISOString().split('T')[0]

    // 查询睡眠记录
    const snapshot = await db.collection('sleepRecords').where({
      _openid: openid,
      date: _.gte(startDateStr),
    }).orderBy('date', 'desc').get()

    const records = snapshot.data

    // 计算统计数据
    let avgSleep = 0
    let avgQuality = 0
    
    if (records.length > 0) {
      avgSleep = Math.round((records.reduce((sum, r) => sum + r.duration, 0) / records.length) * 10) / 10
      avgQuality = Math.round((records.reduce((sum, r) => sum + r.quality, 0) / records.length) * 10) / 10
    }

    return {
      success: true,
      data: {
        period: period,
        avgSleep: avgSleep,
        avgQuality: avgQuality,
        recordCount: records.length,
        records: records,
      },
    }
  } catch (err) {
    console.error('Error getting sleep stats:', err)
    return {
      success: false,
      error: err.message,
    }
  }
}
