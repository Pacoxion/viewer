// pages/identifyPage/identifyPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    condition1:true,
    condition2: false
  },

  toMe: function(){
    wx.switchTab({
      url: '/pages/me/me'
    })
  },
  comfine:function(){
    this.setData({
      condition1: false,
      condition2: true
    })
  },
  back:function(){
    this.setData({
      condition1: true,
      condition2: false
    })
  },
  passCode:function(e){
      if( e.detail.value.passCode==123456){
        wx.navigateTo({
          url: '/pages/control/control',
        })

      }else{
        wx.showToast({
          title: '请输入正确密码呢',
          icon:'none'
        })

      }
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