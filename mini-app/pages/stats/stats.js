// pages/stats/stats.js
Page({
  data: {
    selectedPeriod: 'week',
    timePeriods: [
      { id: 'week', name: '周' },
      { id: 'month', name: '月' },
      { id: 'year', name: '年' },
    ],
    avgSleep: 0,
    avgQuality: 0,
    sleepRecords: [],
    loading: true,
  },

  onLoad() {
    this.loadStats('week')
  },

  onShow() {
    this.loadStats(this.data.selectedPeriod)
  },

  onPeriodChange(e) {
    const period = e.currentTarget.dataset.id
    this.setData({
      selectedPeriod: period,
      loading: true,
    })
    this.loadStats(period)
  },

  loadStats(period) {
    wx.cloud.callFunction({
      name: 'getSleepStats',
      data: {
        period: period,
      },
      success: res => {
        console.log('Stats data:', res.result)
        this.setData({
          avgSleep: res.result.data.avgSleep || 0,
          avgQuality: res.result.data.avgQuality || 0,
          sleepRecords: res.result.data.records || [],
          loading: false,
        })
      },
      fail: err => {
        console.error('Failed to load stats:', err)
        wx.showToast({
          title: '加载统计数据失败',
          icon: 'none',
        })
        this.setData({ loading: false })
      },
    })
  },
})
