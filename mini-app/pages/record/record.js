// pages/record/record.js
Page({
  data: {
    bedtime: '23:00',
    wakeup: '07:00',
    selectedQuality: 3,
    notes: '',
    qualities: [
      { id: 1, name: '很差' },
      { id: 2, name: '较差' },
      { id: 3, name: '一般' },
      { id: 4, name: '较好' },
      { id: 5, name: '很好' },
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

  onNotesChange(e) {
    this.setData({
      notes: e.detail.value,
    })
  },

  onSubmit() {
    // TODO: 提交到后端
    wx.showToast({
      title: '保存成功',
      icon: 'success',
    })
    setTimeout(() => {
      wx.navigateBack()
    }, 1500)
  },
})
