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
            },  
            {
              id: 3,
              name: '琥珀珍珠奶茶（大杯）',
              price: 10,
              imgURL: 'https://fuss10.elemecdn.com/c/8e/04076f034f16c110c9b242e0f0fc3jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            },  
            {
              id: 4,
              name: '香柠咖啡（大杯）',
              price: 10,
              imgURL: 'https://fuss10.elemecdn.com/8/26/2760aa963a181bb4afccda0831ce4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            },      
            {
              id: 5,
              name: '柠檬椰果养乐多/大杯',
              price: 10,
              imgURL: 'https://fuss10.elemecdn.com/b/8f/73c28247fa6c7036a39f577d2c444jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            },      
            {
              id: 6,
              name: '芒果养乐多/大杯',
              price: 10,
              imgURL: 'https://fuss10.elemecdn.com/a/1e/6d3db1062f397848b3dc58b9d1862jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            },      
            {
              id: 7,
              name: '鲜醇芒果欧蕾/中杯',
              price: 10,
              imgURL: 'https://fuss10.elemecdn.com/f/15/46bb9f521780b9c516e7f2630ea84jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            },      
            {
              id: 8,
              name: '鲜醇草莓欧蕾/中杯',
              price: 10,
              imgURL: 'https://fuss10.elemecdn.com/9/d6/37228857be1e0c9427e43231b961fjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            },  
            {
              id: 9,
              name: '鲜醇牛奶三兄弟/中杯',
              price: 10,
              imgURL: 'https://fuss10.elemecdn.com/7/90/145ddb6b3a0888e00a8b9782a3ea6jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
            },                                                                                                      
          ],
        },
        {
          name: '鲜果香茶',
          goodsList: [
            {
              id: 1,
              name: '芒果',
              price: 10,
            }
          ],
        },
        {
          name: '益菌多多',
          goodsList: [
            {
              id: 1,
              name: '芒果',
              price: 10,
            }
          ],
        },        
        {
          name: '法式奶霜',
          goodsList: [
            {
              id: 1,
              name: '芒果',
              price: 10,
            }
          ],
        },        
        {
          name: '香浓牛奶',
          goodsList: [
            {
              id: 1,
              name: '芒果',
              price: 10,
            }
          ],
        },        
        {
          name: '醇香奶茶',
          goodsList: [
            {
              id: 1,
              name: '芒果',
              price: 10,
            }
          ],
        },        
        {
          name: '浓情巧克',
          goodsList: [
            {
              id: 1,
              name: '芒果',
              price: 10,
            }
          ],
        },           
        {
          name: '现磨咖啡',
          goodsList: [
            {
              id: 1,
              name: '芒果',
              price: 10,
            }
          ],
        },                                        
      ],
    },
    activeIndex: 0,
    toView: 'a0',
    scrollTop: 100,
    screenWidth: 667,    

    cartList: [],
    sumMonney: 0,
    count: 0,

    loading: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      shopName: app.globalData.shopName,
    })
    wx.setNavigationBarTitle({
      title: app.globalData.shopName
    })
    // wx.setNavigationBarColor({
    //   frontColor: '#ffffff',
    //   backgroundColor: '#ff0000',
    // })    
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