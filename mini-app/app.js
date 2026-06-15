// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log('Login success', res.code)
        // 发送 res.code 到后端换取 openid, sessionKey
      },
    })
  },
  globalData: {
    userInfo: null,
    apiBaseUrl: 'http://localhost:3000/api', // 开发环境
  },
})
