window.json_sprite = require('../images/bigimg/sprite.json');
import guang_ from '../images/bigimg/guang.png';

window.language = 'Japan';

let imgArr = ["sprite", "particle1", "particle2",
  "particle3", "particle4", "particle5", "particle6"
];
let imgNum = 0;
imgArr.forEach((item) => {
  import( /* webpackMode: "eager" */ "../images/bigimg/" + item + '.png').then(module => {
    imgNum++;
    window[item.match(/\w+/)[0] + "_"] = module.default;
    if (imgNum == imgArr.length) {
      // var map = require("./map.js");
      console.log("loadCompleteimgArr")
      loadCompleteimgArr();
    }

  }).catch(err => {
    console.log(err.message);
  });
})



function loadCompleteimgArr() {
  var resizerq = require("./resize.js");
  console.log('rezise')
  resizerq.resizeContent("canvas");


  // window.onresize = function () {
  //   setTimeout(function () {
  //     resizerq.resizeContent("canvas")
  //   }, 500);
  // }





  var particle_all = new createjs.SpriteSheet({
    framerate: 15,
    "images": [particle1_, particle2_, particle3_, particle4_, particle5_, particle6_],
    "frames": {
      "regX": 0,
      "height": 500,
      "count": 21,
      "regY": 0,
      "width": 500
    },
    "animations": {
      "start": [0, 20, "stop", 0.35],
      "start1": [0, 20, "start1", 0.35],
      "stop": [0],
    },
  });


  var screenTop = (1390 - canvas.height) / 2;
  var screenMiddle = 1390 / 2;
  var screenBottom = (1390 + canvas.height) / 2;
  var screenLeft = (1390 - canvas.width) / 2;
  var screenRight = (1390 + canvas.width) / 2;


  //开始前加载
  setTimeout(() => {
    // addBitmap('guang', guang_, 900, 447, "addArr6");


    addSpriteSheet("particle_ani", particle_all, "start1", 600, 683.0, 1, 0.5, 0.5);
    // addRectBitmap_simple("play_btn2",'play_btn2',sprite_,json_sprite,0.5,0.5,596,1289,"addArrAll",true);
    var bgimgH = 44;
    var bgnum = Math.round(canvas.height / bgimgH) + 3;
    console.log(bgnum)
    for (let index = 0; index <= bgnum; index++) {
      var bgname = 'bgs' + index;
      addRectBitmap_simple(bgname, 'bg', sprite_, json_sprite, 0.5, 0.5, screenLeft, screenTop - 50 + (bgimgH - 2) * index, "addArrAll", true);
      person.addChild(wb[bgname]);
    }
    addRectBitmap_simple('top', 'top', sprite_, json_sprite, 0.5, 0.5, screenLeft, screenTop, "addArrAll", true);

    addRectBitmap_simple('bottom', 'bottom', sprite_, json_sprite, 0.5, 0.5, screenLeft, screenBottom - 206, "addArrAll", true);
    addRectBitmap_simple('road1', 'road', sprite_, json_sprite, 1, screenMiddle - 104 * 2 - 10, screenMiddle - 605 / 2 + 20, "addArrAll", true);
    addRectBitmap_simple('road2', 'road', sprite_, json_sprite, 1, screenMiddle - 104 - 5, screenMiddle - 605 / 2 + 20, "addArrAll", true);
    addRectBitmap_simple('road3', 'road', sprite_, json_sprite, 1, screenMiddle + 5, screenMiddle - 605 / 2 + 20, "addArrAll", true);
    addRectBitmap_simple('road4', 'road', sprite_, json_sprite, 1, screenMiddle + 104 + 10, screenMiddle - 605 / 2 + 20, "addArrAll", true);
    window.roadcon1 = new createjs.Container();
    window.roadcon2 = new createjs.Container();
    window.roadcon3 = new createjs.Container();
    window.roadcon4 = new createjs.Container();
    roadcon1.regX = 104 * 0.5;
    roadcon1.x = screenMiddle - 104 * 2 - 10 + 104 * 0.5;
    roadcon1.regY = 605 * 0.5;
    roadcon1.y = screenMiddle - 605 / 2 + 20 + 605 * 0.5;
    wb.road1.x = wb.road1.y=0;

    roadcon2.regX = 104 * 0.5;
    roadcon2.x = screenMiddle - 104 - 5 + 104 * 0.5;
    roadcon2.regY = 605 * 0.5;
    roadcon2.y = screenMiddle - 605 / 2 + 20 + 605 * 0.5;
    wb.road2.x = wb.road2.y = 0;

    roadcon3.regX = 104 * 0.5;
    roadcon3.x = screenMiddle + 5 + 104 * 0.5;
    roadcon3.regY = 605 * 0.9;
    roadcon3.y = screenMiddle - 605 / 2 + 20 + 605 * 0.9;
    wb.road3.x = wb.road3.y = 0;

    roadcon4.regX = 104 * 0.5;
    roadcon4.x = screenMiddle + 104 + 10 + 104 * 0.5;
    roadcon4.regY = 605 * 0.9;
    roadcon4.y = screenMiddle - 605 / 2 + 20 + 605 * 0.9;
    wb.road4.x = wb.road4.y = 0;

    addRectBitmap_simple('car_r1', 'car_r', sprite_, json_sprite, 1,1, 15, 40, "addArrAll", true);
    addRectBitmap_simple('car_r2', 'car_r', sprite_, json_sprite, 1, 1, 15, 40+(25+108)*1, "addArrAll", true);
    addRectBitmap_simple('car_r3', 'car_r', sprite_, json_sprite, 1, 1, 15, 40 + (25 + 108) * 2, "addArrAll", true);
    addRectBitmap_simple('car_r4', 'car_r', sprite_, json_sprite, 1, 1, 15, 40 + (25 + 108) * 3, "addArrAll", true);

    addRectBitmap_simple('car_m3', 'car_b', sprite_, json_sprite, 1, 1, 15, 40 + (25 + 108) * 2, "addArrAll", true);
    addRectBitmap_simple('car_m4', 'car_y', sprite_, json_sprite, 1, 1, 15, 40 + (25 + 108) * 3, "addArrAll", true);

    addRectBitmap_simple('car_y1', 'car_y', sprite_, json_sprite, 1, 1, 15, 40, "addArrAll", true);
    addRectBitmap_simple('car_y2', 'car_y', sprite_, json_sprite, 1, 1, 15, 40 + (25 + 108) * 1, "addArrAll", true);
    addRectBitmap_simple('car_y3', 'car_y', sprite_, json_sprite, 1, 1, 15, 40 + (25 + 108) * 2, "addArrAll", true);
    addRectBitmap_simple('car_y4', 'car_y', sprite_, json_sprite, 1, 1, 15, 40 + (25 + 108) * 3, "addArrAll", true);

    addRectBitmap_simple('car_b1', 'car_b', sprite_, json_sprite, 1, 1, 15, 40, "addArrAll", true);
    addRectBitmap_simple('car_b2', 'car_b', sprite_, json_sprite, 1, 1, 15, 40 + (25 + 108) * 1, "addArrAll", true);
    addRectBitmap_simple('car_b3', 'car_b', sprite_, json_sprite, 1, 1, 15, 40 + (25 + 108) * 2, "addArrAll", true);
    addRectBitmap_simple('car_b4', 'car_b', sprite_, json_sprite, 1, 1, 15, 40 + (25 + 108) * 3, "addArrAll", true);

    // 278
    // 491
    addRectBitmap_simple('hand', 'hand', sprite_, json_sprite, 0.9, 0.1, -55, 358, "addArrAll", true);
    addRectBitmap_simple('hand2', 'hand', sprite_, json_sprite, 0.9, 0.1, -55, 40, "addArrAll", true);
    addRectBitmap_simple('hand3', 'hand', sprite_, json_sprite, 0.9, 0.1, -55, 497, "addArrAll", true);
    addRectBitmap_simple('hand4', 'hand', sprite_, json_sprite, 0.9, 0.1, -55, 290, "addArrAll", true);
    addRectBitmap_simple('g1', 'g1', sprite_, json_sprite, 1, 1, 15, 40, "addArrAll", true);
    addRectBitmap_simple('g2', 'g2', sprite_, json_sprite, 1, 1, 15, 40, "addArrAll", true);

    addBitmap('guang', guang_, screenMiddle-640/2, screenMiddle-802/2-35, "addArr6");
    wb.guang.regX = 640 * 0.5;
    wb.guang.x = wb.guang.x + 640 * 0.5;
    wb.guang.regY = 751 * 0.5;
    wb.guang.y = wb.guang.y + 751 * 0.5;
    
    addRectBitmap_simple('you_win', 'you_win', sprite_, json_sprite, 1, 1, screenMiddle-585/2, screenTop+100, "addArrAll", true);
    addRectBitmap_simple('card', 'card', sprite_, json_sprite, 0.5, 0.5, screenMiddle - 276 / 2, screenMiddle-365/2-35, "addArrAll", true);
    addRectBitmap_simple('txt1', 'txt1', sprite_, json_sprite, 0.5, 0.5, screenMiddle - 452 / 2, screenMiddle - 365 / 2 - 35+365+20, "addArrAll", true);
    addRectBitmap_simple('end_btn', 'end_btn', sprite_, json_sprite, 0.5, 0.5, screenMiddle-431/2, screenBottom-108-100, "addArrAll", true);

    
  }, 350);

   var textaddnumt=0;
   var txtaddnuml=0;
   var textstart = "1,439"
   if (language=='Japan') {
     textaddnumt=20;
     txtaddnuml=10;
     textstart = "1439";
   }
   window.text = new createjs.Text(textstart, "55px source", "#000");
   text.x = screenMiddle - 100 + txtaddnuml;
   text.y = screenTop + 135 + textaddnumt;
   text.textBaseline = "alphabetic";
 
  
  setTimeout(() => {
    addShape('bg_shape1', 0,0, 1390, 1390, 0.6, 'rect');
    
    window.savex = stage.x;
    window.savey = stage.y;
    stage.regX = stage.regY = 695;
    stage.x = 695 + stage.x;
    stage.y = 695 + stage.y;
    // stage.scaleX = stage.scaleY = 1.2;

    window.wsp = window.sprite || {};


     window.end_pop = new createjs.Container();
    person.addChild(wsp.particle_ani, wb.guang, wb.top, text, wb.bottom, roadcon1, roadcon3, roadcon4, roadcon2);

    window.arr_zero = [wsp.particle_ani, wb.car_y1, wb.car_b1, end_pop, wb.hand2, wb.hand,wb.hand3, wb.hand4];

    roadcon1.addChild(wb.road1, wb.car_r1, wb.car_r2, wb.car_r3, wb.car_r4);
    roadcon2.addChild(wb.road2, wb.car_m3, wb.car_m4, wb.hand, wb.hand3);
    roadcon3.addChild(wb.road3, wb.car_y1, wb.car_y2, wb.car_y3, wb.car_y4, wb.hand4);
    roadcon4.addChild(wb.road4, wb.car_b1, wb.car_b2, wb.car_b3, wb.car_b4, wb.hand2);

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
   

    end_pop.addChild(bg_shape1, wb.guang, wb.you_win, wb.card, wb.txt1, wb.end_btn)
    person.addChild(end_pop);
    
    wb.guang.scaleX = wb.guang.scaleY = wb.card.scaleX = wb.card.scaleY =0.6;
    wb.you_win.y = wb.you_win.y - 300;
    wb.txt1.scaleX = wb.txt1.scaleY = wb.end_btn.scaleX = wb.end_btn.scaleY = 0.6;



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