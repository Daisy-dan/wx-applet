// pages/find/find.js
Page({
  data:{},
  // 添加视频
  bindButtonTap: function() {
        var that = this
        wx.chooseVideo({
            sourceType: ['album','camera'],
            maxDuration: 60,
      camera: 'back',
            success: function(res) {
                that.setData({
                    src: res.tempFilePath
                })
            }
        })
    },
    //扫二维码
  scanCode : function(){
     wx.scanCode({
      success: function(res){
        // success
        console.log(res);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  downLoad : function(){
    wx.downloadFile({
      url: "https://URL",
      // type: 'image', // 下载资源的类型，用于客户端识别处理，有效值：image/audio/video
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        wx.playVoice({
          filePath: '../../voice/01.mp3',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onPullDownRefresh: function(){
    wx.stopPullDownRefresh()
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
   
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