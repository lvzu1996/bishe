//index.js
//获取应用实例
import {getWindowW} from '../../utils/util'
const TEXT = true
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    operationH : getWindowW()*0.33+'px',
    operationW : getWindowW()*0.33+'px',
    operations:[{
        name:'校内通知',
        src:'./imgs/noti.svg',
        ename:'notification'
      },{
        name:'咨询本',
        src:'./imgs/zixun.svg',
        ename:'consult'
      },{
        name:'课程表',
        src:'./imgs/kechengbiao.svg',
        ename:'courselist'
      },{
        name:'学员',
        src:'./imgs/xueyuan.svg',
        ename:'student'
      },{
        name:'报表中心',
        src:'./imgs/baobiao.svg',
        ename:'report'
      },{
        name:'兴趣班学院',
        src:'./imgs/xueyuann.svg',
        ename:'academy'
      }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toDetailInfo : function(){
    wx.navigateTo({
      url: `../detailinfo/detailinfo`
    })
  },
  _handleOpe(e){
    var ename = e.currentTarget.dataset.ename
    if(ename === 'courselist'){
      wx.navigateTo({
        url: `../courselist/courselist`
      })
    }
    
  }
})
