// pages/productlist/productlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      items: [{
          "name": "英语学习",
          team: "商学院",
          count: 1000,
          image: "https://img.qlchat.com/qlLive/channelLogo/3K9K6KS7-N2HT-V9RU-1545632675596-VXWXOGGHKSN2.png?x-oss-process=image/resize,m_fill,limit_0,h_344,w_560"
      },
          {
              "name": "英语学习",
              team: "商学院",
              count: 1000,
              image: "https://img.qlchat.com/qlLive/channelLogo/3K9K6KS7-N2HT-V9RU-1545632675596-VXWXOGGHKSN2.png?x-oss-process=image/resize,m_fill,limit_0,h_344,w_560"
          },
          {
              "name": "英语学习",
              team: "商学院",
              count: 1000,
              image: "https://img.qlchat.com/qlLive/channelLogo/3K9K6KS7-N2HT-V9RU-1545632675596-VXWXOGGHKSN2.png?x-oss-process=image/resize,m_fill,limit_0,h_344,w_560"
          },
          {
              "name": "英语学习",
              team: "商学院",
              count: 1000,
              image: "https://img.qlchat.com/qlLive/channelLogo/3K9K6KS7-N2HT-V9RU-1545632675596-VXWXOGGHKSN2.png?x-oss-process=image/resize,m_fill,limit_0,h_344,w_560"
          },
          {
              "name": "英语学习",
              team: "商学院",
              count: 1000,
              image: "https://img.qlchat.com/qlLive/channelLogo/3K9K6KS7-N2HT-V9RU-1545632675596-VXWXOGGHKSN2.png?x-oss-process=image/resize,m_fill,limit_0,h_344,w_560"
          },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title,
    })
  },

    jumpDetail(){
      wx.navigateTo({
        url: '../productDetail/productDetail',
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