// 云函数：记录睡眠数据
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})

const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const openid = wxContext.OPENID

  const { bedtime, wakeup, duration, quality, notes, date } = event

  try {
    // 保存睡眠记录
    const res = await db.collection('sleepRecords').add({
      data: {
        _openid: openid,
        date: date,
        bedtime: bedtime,
        wakeup: wakeup,
        duration: duration,
        quality: quality,
        notes: notes,
        createTime: new Date(),
      },
    })

    // 更新用户的睡眠统计
    await updateUserStats(openid)

    return {
      success: true,
      data: {
        recordId: res._id,
      },
    }
  } catch (err) {
    console.error('Error recording sleep:', err)
    return {
      success: false,
      error: err.message,
    }
  }
}

async function updateUserStats(openid) {
  const db = cloud.database()
  const _ = db.command

  // 获取最近7天的睡眠记录
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  const snapshot = await db.collection('sleepRecords').where({
    _openid: openid,
    date: _.gte(sevenDaysAgo),
  }).get()

  const records = snapshot.data
  if (records.length === 0) return

  const avgSleep = records.reduce((sum, r) => sum + r.duration, 0) / records.length
  const avgQuality = records.reduce((sum, r) => sum + r.quality, 0) / records.length

  // 更新用户信息
  await db.collection('users').where({
    _openid: openid,
  }).update({
    data: {
      totalSleepDays: records.length,
      avgSleep: Math.round(avgSleep * 10) / 10,
      avgQuality: Math.round(avgQuality * 10) / 10,
    },
  })
}
