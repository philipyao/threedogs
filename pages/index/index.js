//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    shopList: [
      {
        id: 1111,
        name: '北京',
        addr: '北京市朝阳区五',
      },
      {
        id: 1112,
        name: '上海',
        addr: '闵行区兴梅路',
      },
      {
        id: 1113,
        name: '杭州',
        addr: '杭州市下沙区五',
      },
    ],  
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  selectShop: function(e) {
    var index = e.currentTarget.dataset.index
    this.setData({
      shopIndex: index,
    })
    app.globalData.shopName = this.data.shopList[this.data.shopIndex].name;
    // var selectName = this.data.shopList[this.data.shopIndex].name
    // wx.showToast({
    //   title: selectName,
    //   icon: 'success',
    //   duration: 2000
    // })
    wx.navigateTo({
      url: '../shop/shop'
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

    wx.request({
      url: 'https://easy-mock.com/mock/59abab95e0dc66334199cc5f/coco/aa',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        wx.hideLoading();
        console.log(res)
        that.setData({
          listData: res.data,
          loading: true
        })
      }
    })    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
