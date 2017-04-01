var flag = true;
var color = 'window';
Page({
    data:{
        color : 'window',
        array : ["个性推荐", "歌单", "主播电台", "排行榜"],
        view: 'MINA',
        staffA: {firstName: 'Hulk', lastName: 'Hu'},
        staffB: {firstName: 'Shang', lastName: 'You'},
        staffC: {firstName: 'Gideon', lastName: 'Lin'}
        },
    click:function () {
        console.log("点击了文字");

        if(flag){
            color= 'window';
            flag = false;
            console.log(color);
        }else{
            color= 'window-red';
            flag = true;
            console.log(color);
        }
        this.setData({
            
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