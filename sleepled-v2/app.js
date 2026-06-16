App({
  onLaunch() {
    if (!wx.cloud) {
      console.error('Please use base library 2.2.3 or above')
    } else {
      wx.cloud.init({
        env: 'cloudbase-d7gcjzhmd28e9244c',
        traceUser: true,
      })
    }

    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: res => {
        console.log('Login success', res.code)
      },
    })
  },
  globalData: {
    userInfo: null,
    userId: null,
  },
})
