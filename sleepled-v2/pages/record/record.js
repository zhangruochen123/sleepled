Page({
  data: {
    bedtime: '23:00',
    wakeup: '07:00',
    selectedQuality: 3,
    qualities: [
      { id: 1, name: 'Poor' },
      { id: 2, name: 'Fair' },
      { id: 3, name: 'Good' },
      { id: 4, name: 'Very Good' },
      { id: 5, name: 'Excellent' },
    ],
  },

  onBedtimeChange(e) {
    this.setData({
      bedtime: e.detail.value,
    })
  },

  onWakeupChange(e) {
    this.setData({
      wakeup: e.detail.value,
    })
  },

  onQualityChange(e) {
    this.setData({
      selectedQuality: parseInt(e.currentTarget.dataset.id),
    })
  },

  onSubmit() {
    wx.showToast({
      title: 'Saved',
      icon: 'success',
    })
    setTimeout(() => {
      wx.navigateBack()
    }, 1500)
  },
})
