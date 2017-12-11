Page({
    data: {
      id:0,
      imgUrls: [
        'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/swiper/1.png',
        'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/swiper/2.png',
        'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/swiper/3.png',
        'http://lvzu-imgs.oss-cn-hangzhou.aliyuncs.com/swiper/4.png',
      ],
      scrollToView:'groupdetail-swiper',
      basicInfos:{
        text:'【奥数班】小班化教学专为小升初学生量身打造，重点学校教师授课',
        price:'9.5',
        oldprice:'36',
        existingmember:1676,
      },
    },

    onLoad:function(options){
      this.setData({
        id:options.id
      })
      wx.showShareMenu({
        withShareTicket: true
      })
    },

    _getDetail:function(){
      this.setData({
        scrollToView:'detail2'
      })
    },

    onShareAppMessage: function (res) {
      const _this = this
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title: '自定义转发标题',
        path: '/pages/groupdetail/groupdetail?id='+_this.id,
        success: function(res) {
          // 转发成功
        },
        fail: function(res) {
          // 转发失败
        }
      }
    }
    
  })