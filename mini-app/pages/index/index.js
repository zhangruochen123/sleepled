// pages/index/index.js
const app = getApp()

Page({
  data: {
    lastNightSleep: 0,
    userInfo: {},
    loading: true,
  },

  onLoad() {
    this.getUserInfo()
    this.loadSleepData()
  },

  onShow() {
    this.loadSleepData()
  },

  getUserInfo() {
    wx.cloud.callFunction({
      name: 'getUserInfo',
      data: {},
      success: res => {
        console.log('User info:', res.result)
        this.setData({
          userInfo: res.result.data,
        })
      },
      fail: err => {
        console.error('Failed to get user info:', err)
        wx.showToast({
          title: '获取用户信息失败',
          icon: 'none',
        })
      },
    })
  },

  loadSleepData() {
    this.setData({ loading: true })
    wx.cloud.callFunction({
      name: 'getSleepStats',
      data: {
        period: 'day',
      },
      success: res => {
        console.log('Sleep data:', res.result)
        this.setData({
          lastNightSleep: res.result.data.avgSleep || 0,
          loading: false,
        })
      },
      fail: err => {
        console.error('Failed to load sleep data:', err)
        this.setData({ loading: false })
      },
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
