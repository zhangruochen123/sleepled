// 云函数：获取用户信息
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})

const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const openid = wxContext.OPENID
  const userid = wxContext.USERID

  try {
    // 查询用户信息
    const userSnapshot = await db.collection('users').where({
      _openid: openid,
    }).get()

    let userData
    if (userSnapshot.data.length > 0) {
      userData = userSnapshot.data[0]
    } else {
      // 首次使用，创建新用户
      const createTime = new Date()
      const res = await db.collection('users').add({
        data: {
          _openid: openid,
          createTime: createTime,
          nickname: '新用户',
          avatar: '',
          totalSleepDays: 0,
          avgSleep: 0,
        },
      })
      userData = {
        _id: res._id,
        _openid: openid,
        createTime: createTime,
        nickname: '新用户',
        avatar: '',
        totalSleepDays: 0,
        avgSleep: 0,
      }
    }

    return {
      success: true,
      data: userData,
    }
  } catch (err) {
    console.error('Error getting user info:', err)
    return {
      success: false,
      error: err.message,
    }
  }
}
