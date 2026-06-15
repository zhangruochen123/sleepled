// pages/user/user.js
Page({
  data: {
    userAvatar: '',
    userName: '用户名',
    userId: '12345',
  },

  onLoad() {
    this.loadUserInfo()
  },

  loadUserInfo() {
    // TODO: 从后端获取用户信息
  },

  onSettings() {
    wx.showToast({
      title: '设置功能开发中',
      icon: 'none',
    })
  },

  onAbout() {
    wx.showToast({
      title: '关于功能开发中',
      icon: 'none',
    })
  },

  onLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      confirmText: '确定',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          // TODO: 清除登录信息
          wx.navigateTo({
            url: '/pages/index/index',
          })
        }
      },
    })
  },
})
