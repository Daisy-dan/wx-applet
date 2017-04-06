// pages/experience/experience.js
Page({
  data:{
    focus:10,
    friends:3,
    works:9,
    reward:7
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
      title: '我的体验手册',
      success: function(res) {
        // success
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})