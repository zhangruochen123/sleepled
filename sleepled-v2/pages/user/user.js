Page({
  data: {
    userName: 'User Name',
    userId: '12345',
  },

  onLoad() {
    // Load user info
  },

  onSettings() {
    wx.showToast({
      title: 'Coming soon',
      icon: 'none',
    })
  },

  onAbout() {
    wx.showModal({
      title: 'About',
      content: 'Sleep Tracker v1.0.0\nTrack your sleep quality',
      confirmText: 'OK',
      showCancel: false,
    })
  },
})
