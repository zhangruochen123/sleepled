Page({
  data: {
    lastNightSleep: 7.5,
  },

  onLoad() {
    this.loadSleepData()
  },

  loadSleepData() {
    this.setData({
      lastNightSleep: 7.5,
    })
  },

  onRecordSleep() {
    wx.navigateTo({
      url: '/pages/record/record',
    })
  },

  onViewStats() {
    wx.navigateTo({
      url: '/pages/stats/stats',
    })
  },
})
