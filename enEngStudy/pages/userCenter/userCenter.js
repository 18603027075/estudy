// pages/userCenter/userCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  jumpRecord(e){
    wx.navigateTo({
      url: '../productlist/productlist?type=record&title=兑换记录'
    })
  },
  jumpEnjoy() {
    wx.navigateTo({
      url: '../productlist/productlist?type=Enjoy&title=我的收藏'
    })
  },
  jumpDownloaded() {
    wx.navigateTo({
      url: '../productlist/productlist?type=downloaded&title=已下载课件'
    })
  },
  jumpManage() { 
    wx.navigateTo({
      url: '../manage/manage'
    })
  },
  jumpHelper() {
    wx.navigateTo({
      url: '../helper/helper'
    })
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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