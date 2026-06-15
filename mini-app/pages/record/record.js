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
    submitting: false,
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
    this.setData({ submitting: true })

    // 计算睡眠时长
    const bedtime = this.data.bedtime.split(':')
    const wakeup = this.data.wakeup.split(':')
    let bedMinutes = parseInt(bedtime[0]) * 60 + parseInt(bedtime[1])
    let wakeMinutes = parseInt(wakeup[0]) * 60 + parseInt(wakeup[1])
    
    if (wakeMinutes < bedMinutes) {
      wakeMinutes += 24 * 60
    }
    
    const sleepDuration = (wakeMinutes - bedMinutes) / 60

    wx.cloud.callFunction({
      name: 'recordSleep',
      data: {
        bedtime: this.data.bedtime,
        wakeup: this.data.wakeup,
        duration: sleepDuration,
        quality: this.data.selectedQuality,
        notes: this.data.notes,
        date: new Date().toISOString().split('T')[0],
      },
      success: res => {
        console.log('Sleep record saved:', res.result)
        wx.showToast({
          title: '保存成功',
          icon: 'success',
        })
        this.setData({ submitting: false })
        setTimeout(() => {
          wx.navigateBack()
        }, 1500)
      },
      fail: err => {
        console.error('Failed to save sleep record:', err)
        wx.showToast({
          title: '保存失败，请重试',
          icon: 'none',
        })
        this.setData({ submitting: false })
      },
    })
  },
})
