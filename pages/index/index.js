var flag = true;
Page({
    data:{
        // text:"这是一个页面"
        color:"window"
    },
    click:function () {
        console.log("点击了文字");

        if(flag){
            color = "window";
            flag = false;
        }else{
            color = "window-red";
            flag = true;
        }
        this.setData({
            color
        });
    },
    onLoad:function(option){

    },
    onReady:function () {

    },
    onShow:function () {

    },
    onHide:function () {

    },
    onUnload:function () {

    }
})