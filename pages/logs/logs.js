Page({
    data:{
        
    },
    onLoad:function(){
       wx.showActionSheet({
        itemList: ['A', 'B', 'C'],
        success: function(res) {
            console.log(res.tapIndex)
        },
        fail: function(res) {
            console.log(res.errMsg)
        }
      }),
    wx.setNavigationBarTitle({
      title: '日志'
    })
    }
    })