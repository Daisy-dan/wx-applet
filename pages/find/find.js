// pages/find/find.js
Page({
  data:{
    imgUrls: [
      '../../images/1.png',//图片src
      '../../images/2.png',
      '../../images/3.png',
      '../../images/4.png'
    ],
    autoplay:true,//是否自动播放
    autoplaytxt:"停止自动播放",
    indicatorDots: true,//指示点
    // indicator-color："white",//指示点颜色 暂未启动
    // indicator-active-color："red",//当前选中的指示点颜色暂未启动
    indicatorDotstxt:"隐藏指示灯",
    interval: 2000,//图片切换间隔时间
    duration: 500,//每个图片滑动速度,
    circular:true,//是否采用衔接滑动
    current:3,//初始化时第一个显示的图片 下标值（从0）index
  },
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
  //轮播
  autoplaychange:function(event){//停止、播放按钮
 
    if (this.data.autoplaytxt=="停止自动播放") {
      this.setData({
        autoplaytxt:"开始自动播放",
        autoplay:!this.data.autoplay
      })
    }else{
       this.setData({
        autoplaytxt:"停止自动播放",
        autoplay:!this.data.autoplay
      })
    };
    
  },
  imgchange:function(e){//监听图片改变函数
    // console.log(e.detail.current)//获取当前显示图片的下标值
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