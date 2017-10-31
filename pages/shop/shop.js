// pages/shop/shop.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopName: '',

    //轮播图
    imgUrls: [
      '../../images/1.png',
      '../../images/3.png',
      '../../images/4.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    shopData: {
      id: 1113,
      name: '杭州',
      addr: '杭州市下沙区五',
      peisongshijian: '0.5-1.5小时送达',
      phonenum: '4008-755-655',
      tips: '巴巴爸爸爸爸爸爸把阿布爸爸把啊啊啊啊啊啊啊啊啊啊啊爸爸巴巴爸爸巴巴爸爸巴巴爸爸吧啊巴巴爸爸',
      menu: [
        {
          name: '热销推荐',
          goodsList: [
            {
              id: 1,
              name: '17岁轻茶奶霜（大杯）芒果',
              price: 10,
              imgURL: 'https://fuss10.elemecdn.com/c/f1/e7d3a34bef76ea0a52107241d6edcjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            },
            {
              id: 2,
              name: '鲜百香双响炮（大杯）',
              price: 10,
              imgURL: 'https://fuss10.elemecdn.com/d/c2/3c4586c80b9734ac488462e30d3eejpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            }            
          ],
        },
        {
          name: '肉类',
          goodsList: [
            {
              id: 1,
              name: '芒果',
              price: 10,
            }
          ],
        },
        {
          name: '蔬菜类',
          goodsList: [
            {
              id: 1,
              name: '芒果',
              price: 10,
            }
          ],
        }        
      ],
    },
    activeIndex: 0,
    toView: 'a0',
    scrollTop: 100,
    screenWidth: 667,    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      shopName: app.globalData.shopName,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})