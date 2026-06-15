// pages/stats/stats.js
Page({
  data: {
    selectedPeriod: 'week',
    timePeriods: [
      { id: 'week', name: '周' },
      { id: 'month', name: '月' },
      { id: 'year', name: '年' },
    ],
    avgSleep: 7.2,
    avgQuality: 8.5,
  },

  onPeriodChange(e) {
    const period = e.currentTarget.dataset.id
    this.setData({
      selectedPeriod: period,
    })
    this.loadStats(period)
  },

  loadStats(period) {
    // TODO: 从后端获取统计数据
    console.log('Loading stats for period:', period)
  },

  onLoad() {
    this.loadStats('week')
  },
})
