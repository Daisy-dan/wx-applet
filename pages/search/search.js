// pages/search/search.js
Page({
  data:{
    // text:"这是一个页面"
    picker1Value:0,
    picker1Range:['北京','上海','广州','深圳'],
    timeValue:new Date().toLocaleTimeString(),
    dateValue:new Date().toLocaleDateString()
  },
  normalPickerBindchange:function(e){
    this.setData({
      picker1Value:e.detail.value
    })
  },
  timePickerBindchange:function(e){
    this.setData({
      timeValue:e.detail.value
    })
  },
  datePickerBindchange:function(e){
    this.setData({
      dateValue:e.detail.value
    })
  }
})