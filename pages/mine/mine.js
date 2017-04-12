// pages/mine/mine.js
Page({
  data: {
   nickName:'',
   userInfoAvatar:'',
   sex:'',
   province:'',
   city:'',
   test:[
     {
       shopName:'',
       shopDescription:''
     }
   ]
  }, 
  onLoad: function () {
    var that=this;    
    wx.getUserInfo({
      success: function(res){
        // success
        that.setData({
          nickName:res.userInfo.nickName,
          userInfoAvatar:res.userInfo.avatarUrl,
          province:res.userInfo.province,
          city:res.userInfo.city
          
        })
        switch(res.userInfo.gender){
          case 0: 
            that.setData({
              sex:'未知'
            })
          break;
          case 1: 
            that.setData({
              sex:'m'
            })
          break;
          case 2: 
            that.setData({
              sex:'w'
            })
          break;
        }
      },
      fail: function() {
        // fail
        console.log("获取失败！")
      },
      complete: function() {
        // complete
        console.log("获取用户信息完成！")
      }
    }),
    wx.setNavigationBarTitle({
      title: '个人中心'
    }),
    wx.request({
      url: 'https://fb051184.ngrok.io/api/shops', //仅为示例，并非真实的接口地址
      data:{},
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);
        that.setData({
          shopName : res.data.shopName,
          shopDescription : res.data.shopDescription
        })
        
        
      }
    })
    
       
  }
})
