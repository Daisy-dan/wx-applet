// pages/account/account.js
Page({
  data:{
    account:250,
    array:[{
      name:'张三',
      reward:'200',
      img:'../../images/01.png',
      time:'10天前'
    },{
      name:'李四',
      reward:'300',
      img:'../../images/02.png',
      time:'10天前'
    },{
      name:'王五',
      reward:'100',
      img:'../../images/03.png',
      time:'10天前'
    }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
    title: '我的账户',
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