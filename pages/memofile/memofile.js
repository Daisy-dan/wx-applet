// pages/memofile/memofile.js


// map.js
Page({
  data: {
    worksimg:['../../images/dog.png','../../images/dog.png','../../images/dog.png'],
    markers: [{
      iconPath: "../../images/find.png",
      id: 0,
      latitude: 31.1681324932,
      longitude: 121.3832093357,
      width: 30,
      height: 30
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../images/find.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 30,
        height: 30
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})