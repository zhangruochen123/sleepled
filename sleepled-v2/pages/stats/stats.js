Page({
  data: {
    selectedPeriod: 'week',
    timePeriods: [
      { id: 'week', name: 'Week' },
      { id: 'month', name: 'Month' },
      { id: 'year', name: 'Year' },
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
    console.log('Loading stats for period:', period)
  },

  onLoad() {
    this.loadStats('week')
  },
})
