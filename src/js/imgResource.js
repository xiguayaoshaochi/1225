window.json_sprite = require('../images/bigimg/sprite.json');
import guang_ from '../images/bigimg/guang.png';



let imgArr = ["sprite", "particle1", "particle2",  
  "particle3", "particle4", "particle5", "particle6"];
let imgNum=0;
imgArr.forEach((item)=>{
  import(/* webpackMode: "eager" */ "../images/bigimg/" + item + '.png').then(module =>{
    imgNum++;
    window[item.match(/\w+/)[0]+"_"] = module.default;
    if (imgNum == imgArr.length) {
      // var map = require("./map.js");
      console.log("loadCompleteimgArr")
      loadCompleteimgArr();
    }
    
  }).catch(err => {
    console.log(err.message);
  });
})



function loadCompleteimgArr(){
  var resizerq = require("./resize.js");
  resizerq.resizeContent("canvas");
  

  window.onresize = function () {
    setTimeout(function () { resizerq.resizeContent("canvas") }, 500);
  }
  


  

var particle_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [particle1_,particle2_,particle3_,particle4_,particle5_,particle6_],
  "frames": { "regX": 0, "height": 500, "count": 21, "regY": 0, "width": 500 },
  "animations": {
    "start": [0, 20, "stop", 0.2],
    "stop": [0],
  },
});

  



  //开始前加载
  setTimeout(() => {
  addBitmap('guang', guang_, 900, 447, "addArr6");


    addSpriteSheet("particle_ani", particle_all, "stop", 600, 683.0, 1, 0.5, 0.5);
  // addRectBitmap_simple("play_btn2",'play_btn2',sprite_,json_sprite,0.5,0.5,596,1289,"addArrAll",true);
  }, 350);

setTimeout(() => {

var start_pox = 46;
var start_poy = 460;
containerAll.y = -600;
containerAll3.y = containerAll3.y - start_poy;
containerAll2.y = containerAll2.y - start_poy;
containerAll.x = 0;
containerAll3.x = containerAll3.x - start_pox;
containerAll2.x = containerAll2.x - start_pox;

containerAll_yh.y = containerAll_yh.y - start_poy;
containerAll_yh.x = containerAll_yh.x - start_pox;

window.savex = stage.x; window.savey = stage.y;
stage.regX = stage.regY = 695;
stage.x = 695 + stage.x;
stage.y = 695 + stage.y;
stage.scaleX = stage.scaleY = 1.2;

window.wsp = window.sprite || {};


  

  

  person.addChild(wsp.particle_ani);


  window.arr_zero = [wb.guang];



  // window.arr_zero2 = [wb.qipao1];

  window.alphaZero = function (arr_zero) {
    for (var i = 0; i < arr_zero.length; i++) {
      arr_zero[i].alpha = 0;
    }
  }

  alphaZero(arr_zero);

  window.scaleZero = function (arr_zero) {
    for (var i = 0; i < arr_zero.length; i++) {
      arr_zero[i].scaleX = arr_zero[i].scaleY = 0;
    }
  }

  // scaleZero(arr_zero2);


  


  // wb.open.addEventListener("mousedown", function () {
  //   if (wb.open.alpha == 0) {
  //     // gainNode.gain.value=1;
  //     audioCtx.resume();
  //     wb.open.alpha = 1;
  //     wb.close.alpha = 0;
  //     musicState = "play";
  //   } else {
  //     // gainNode.gain.value=0;
  //     audioCtx.suspend();
  //     wb.open.alpha = 0;
  //     wb.close.alpha = 1;
  //     musicState = "pause";
  //   }
  // })
  // wb.close.addEventListener("mousedown", function () {
  //   if (wb.open.alpha == 0) {
  //     // gainNode.gain.value=1;
  //     audioCtx.resume();
  //     wb.open.alpha = 1;
  //     wb.close.alpha = 0;
  //     musicState = "play";
  //   } else {
  //     // gainNode.gain.value=0;
  //     audioCtx.suspend();
  //     wb.open.alpha = 0;
  //     wb.close.alpha = 1;
  //     musicState = "pause";
  //   }
  // })

  // document.addEventListener('visibilitychange', function () {

  //   // 用户离开了当前页面
  //   setTimeout(function () {
  //     if (document.visibilityState === 'hidden') {
  //       createjs.Ticker.paused = 1;
  //       if (musicState != null) {
  //         // gainNode.gain.value=0;
  //         audioCtx.suspend();
  //         wb.open.alpha = 0;
  //         wb.close.alpha = 1;
  //       }

  //     }
  //   }, 200)


  //   // 用户打开或回到页面
  //   setTimeout(function () {
  //     if (document.visibilityState === 'visible') {
  //       createjs.Ticker.paused = 0;
  //       if (musicState == "play") {
  //         // gainNode.gain.value=1;
  //         audioCtx.resume();
  //         wb.open.alpha = 1;
  //         wb.close.alpha = 0;
  //       }
  //     }
  //   }, 250)

  // });

  // wb.open.alpha = 1;
  // wb.close.alpha = 0;

  // var W = window.innerWidth;
  // var H = window.innerHeight;

  // if (W >= H) {
  //   wb.open.x = wb.close.x = 531 - cx;
  //   wb.open.y = wb.close.y = 887 - cy;
  // } else {
  //   wb.open.x = wb.close.x = 778 - cx;
  //   wb.open.y = wb.close.y = 1390 / 2 - canvas.height / 2 + 510 - cy;
  // }




  window.stage.alpha = 1;
  
  setTimeout(() => {
    document.getElementsByTagName("body")[0].style.opacity = 1;
    var app = require("./app.js");
  }, 500);
  
  var W = window.innerWidth;
  var H = window.innerHeight;

  if (W >= H) {
    window.pageState = "heng";
    // resizerq.horizontalChange();
    // resizerq.hengChange();
  } else {
    window.pageState = "shu";
    // resizerq.verticalChange();
    // resizerq.shuChange();
  }


}, 500);
  // mapDrawLine();
  


  

}