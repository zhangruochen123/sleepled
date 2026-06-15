// pages/user/user.js
const app = getApp()

Page({
  data: {
    userInfo: {},
    loading: true,
  },

  onLoad() {
    this.loadUserInfo()
  },

  onShow() {
    this.loadUserInfo()
  },

  loadUserInfo() {
    wx.cloud.callFunction({
      name: 'getUserInfo',
      data: {},
      success: res => {
        console.log('User info:', res.result)
        this.setData({
          userInfo: res.result.data,
          loading: false,
        })
      },
      fail: err => {
        console.error('Failed to load user info:', err)
        this.setData({ loading: false })
      },
    })
  },

  onSettings() {
    wx.showToast({
      title: '设置功能开发中',
      icon: 'none',
    })
  },

  onAbout() {
    wx.showModal({
      title: '关于睡了么',
      content: '睡了么 v1.0.0\n帮助你追踪睡眠质量，建立健康作息',
      confirmText: '知道了',
      showCancel: false,
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
          wx.clearStorageSync()
          wx.showToast({
            title: '已退出登录',
            icon: 'success',
          })
          setTimeout(() => {
            wx.navigateTo({
              url: '/pages/index/index',
            })
          }, 1500)
        }
      },
    })
  },
})
