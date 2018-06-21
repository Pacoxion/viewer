var app = getApp()
var count = app.count;
Page({

  data: {
    pickPartment:['点此选择','冰蓝工作室','学生会','分团委','党建'],
    index: 0
  },
  
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  submit: function(e){
    console.log( e.detail.value );
    wx.showToast({
      title: "提交成功",
      icon: "success",
      success: function (){
        wx.navigateBack()
      }
    });
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
    return {
      title: '面试君',
      desc: '湖工人自己的面试app',
      path: "/pages/join/join"
    }
  }
})