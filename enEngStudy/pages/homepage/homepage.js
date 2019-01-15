// pages/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: 1,
    cate: 'all',
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
    ],
    recommends:[
      { image: "https://img.qlchat.com/qlLive/channelLogo/3K9K6KS7-N2HT-V9RU-1545632675596-VXWXOGGHKSN2.png?x-oss-process=image/resize,m_fill,limit_0,h_344,w_560",
      "productId":1
      },
      {
        image: "https://img.qlchat.com/qlLive/channelLogo/3K9K6KS7-N2HT-V9RU-1545632675596-VXWXOGGHKSN2.png?x-oss-process=image/resize,m_fill,limit_0,h_344,w_560",
        "productId": 2
      },
      {
        image: "https://img.qlchat.com/qlLive/channelLogo/3K9K6KS7-N2HT-V9RU-1545632675596-VXWXOGGHKSN2.png?x-oss-process=image/resize,m_fill,limit_0,h_344,w_560",
        "productId": 3
      },
      {
        image: "https://img.qlchat.com/qlLive/channelLogo/3K9K6KS7-N2HT-V9RU-1545632675596-VXWXOGGHKSN2.png?x-oss-process=image/resize,m_fill,limit_0,h_344,w_560",
        "productId": 4
      },
    ]
  },

  jumpDetail(e){
    console.log(e)
    wx.navigateTo({
      url: `../productDetail/productDetail?${e.target.type}`,
    })
  },

  cateSelect(e) {
    let _cate
    switch (e._relatedInfo.anchorTargetText) {
      case '全部':
        _cate = 'all';
        break
      case '英语学习':
        _cate = 'eng';
        break
      case '多语种':
        _cate = 'multi';
        break
    }
    this.setData({
      cate: _cate
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})