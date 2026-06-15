// pages/index/index.js
Page({
  data: {
    lastNightSleep: 0,
  },

  onLoad() {
    this.loadSleepData()
  },

  loadSleepData() {
    // TODO: 从后端获取睡眠数据
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
