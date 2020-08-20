window.json_sprite = require('../images/bigimg/sprite.json');
import light_ from '../images/sma_img/sp/light.png';
import zhezhao_ from '../images/sma_img/sp/zhezhao.png';



let imgArr = ["sprite", "yanhua1", "yanhua2",  
  "man", "woman", "yanwu", "door", "huo", "wolf", "baoxiang"];
let imgNum=0;
imgArr.forEach((item)=>{
  import(/* webpackMode: "eager" */ "../images/bigimg/" + item + '.png').then(module =>{
    imgNum++;
    window[item.match(/\w+/)[0]+"_"] = module.default;
    if (imgNum == imgArr.length) {
      var map = require("./map.js");
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
  

var yanhua1_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [yanhua1_],
  "frames": { "regX": 0, "height": 93, "count": 15, "regY": 0, "width": 93 },
  "animations": {
    "start": [0, 14, "stop", 0.3],
    "stop": [14],
  },
});



var yanhua3_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [yanhua2_],
  "frames": { "regX": 0, "height": 89, "count": 15, "regY": 0, "width": 90 },
  "animations": {
    "start": [0, 14, "stop", 0.3],
    "stop": [14],
  },
});

var yanhua2_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [yanhua2_],
  "frames": { "regX": 0, "height": 89, "count": 15, "regY": 0, "width": 90 },
  "animations": {
    "start": [0, 14, "stop", 0.3],
    "stop": [14],
  },
});



// var zhadan_all = new createjs.SpriteSheet({
//   framerate: 15,
//   "images": [zhadan_],
//   "frames": { "regX": 0, "height": 74, "count": 11, "regY": 0, "width": 74 },
//   "animations": {
//     "start": [0, 10, "start", 0.2],
//     "stop": [0],
//   },
// });


var mine_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [man_],
  "frames": { "regX": 0, "height": 114, "count": 9, "regY": 0, "width": 46 },
  "animations": {
    "walk_br": [1, 8, "walk_br", 0.2],
    // "chui": [0, 19, "stop", 0.2],
    // "kan": [20, 29, "stop", 0.2],
    "stop": [0],
    // "stop1": [37],
  },
});

var mine_all2 = new createjs.SpriteSheet({
  framerate: 15,
  "images": [woman_],
  "frames": { "regX": 0, "height": 114, "count": 9, "regY": 0, "width": 110 },
  "animations": {
    "walk_br": [1, 8, "walk_br", 0.2],
    // "chui": [0, 19, "stop", 0.2],
    "stop": [0],
    // "stop1": [26],
  },
});



var door_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [door_],
  "frames": { "regX": 0, "height": 325, "count": 8, "regY": 0, "width": 276 },
  "animations": {
    "start": [0, 7, "stop1", 0.15],
    "stop1": [7],
    "stop": [0],
  },
});

var huo_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [huo_],
  "frames": { "regX": 0, "height": 177, "count": 8, "regY": 0, "width": 77 },
  "animations": {
    "start": [0, 7, "start", 0.35],
    "stop": [0],
  },
});

var baoxiang_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [baoxiang_],
  "frames": { "regX": 0, "height": 86, "count": 13, "regY": 0, "width": 83 },
  "animations": {
    "start": [0, 12, "stop1", 0.4],
    // "start1": [0, 15, "start1", 0.4],
    "stop": [0],
    "stop": [12],
  },
});




  

var wolf_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [wolf_],
  "frames": { "regX": 0, "height": 66, "count": 12, "regY": 0, "width": 60 },
  "animations": {
    "jiao": [0, 11, "stop", 0.2],
    "stop": [0],
  },
});

  


var yanwu1_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [yanwu_],
  "frames": { "regX": 0, "height": 169, "count": 15, "regY": 0, "width": 188 },
  "animations": {
    "start": [0, 15, "last", 0.2],
    "last": [15],
    "start1": [0, 15, "start1", 0.2],
  },
});

// var yanwu2_all = new createjs.SpriteSheet({
//   framerate: 15,
//   "images": [yanwu1_],
//   "frames": { "regX": 0, "height": 120, "count": 16, "regY": 0, "width": 101 },
//   "animations": {
//     "start": [0, 15, "last", 0.35],
//     "last": [15],
//     "start1": [0, 15, "start1", 0.35],
//   },
// });

  

  //开始前加载
  setTimeout(() => {
  addBitmap('light', light_, 900, 447, "addArr6");
    addBitmap('zhezhao', zhezhao_, 498.5, 340.6, "addArr6");


  addSpriteSheet("yanhua3_all", yanhua3_all, "start", 1250, 50, 1, 0.5, 0.5);
  addSpriteSheet("yanhua1_all", yanhua1_all, "start", 1250, 50, 1, 0.5, 0.5);

  addSpriteSheet("yanhua33_all", yanhua3_all, "start", 1250, 50, 1, 0.5, 0.5);
  addSpriteSheet("yanhua11_all", yanhua1_all, "start", 1250, 50, 1, 0.5, 0.5);

  addSpriteSheet("yanhua333_all", yanhua3_all, "start", 1250, 50, 1, 0.5, 0.5);
  addSpriteSheet("yanhua111_all", yanhua1_all, "start", 1250, 50, 1, 0.5, 0.5);

  addSpriteSheet("yanhua2_all", yanhua2_all, "start", 1250, 50, 1, 0.5, 0.5);
  addSpriteSheet("yanhua22_all", yanhua2_all, "start", 1250, 50, 1, 0.5, 0.5);

    // addSpriteSheet("baozha_ani", yanwu2_all, "start", 804.6, 1164.3, 3, 0.5, 0.5);
    addSpriteSheet("yanwu_ani", yanwu1_all, "start", 1251.4, 1040.7, 1, 0.5, 0.5);

    addSpriteSheet("wolf_ani1", wolf_all, "stop", 534.1, 1415.7, 1.05, 0.5, 0.5);
    addSpriteSheet("wolf_ani2", wolf_all, "stop", 563.5, 1449.1, 1.05, 0.5, 0.5);
    addSpriteSheet("wolf_ani3", wolf_all, "stop", 450.6, 1449.1, 1.05, 0.5, 0.5);
    addSpriteSheet("wolf_ani4", wolf_all, "stop", 481.6, 1490.8, 1.05, 0.5, 0.5);

    
    addSpriteSheet("mine_all_ani2", mine_all2, "stop", 694.9, 1359.5, 1.05, 0.5, 0.5);
    addSpriteSheet("mine_all_ani", mine_all, "stop", 650.1, 1348.6 , 1.1, 0.5, 0.5);

    
    addSpriteSheet("door_ani", door_all, "stop", 958.0, 1188.3, 1, 0.5, 0.5);
    // addSpriteSheet("door_ani2", door_all, "stop", 958.0, 1188.3, 1, 0.5, 0.5);

    addSpriteSheet("huo_ani1", huo_all, "start", 486.8, 1232.2, 0.8, 0.5, 0.5);
    addSpriteSheet("huo_ani2", huo_all, "start", 750.0, 1113.2, 0.8, 0.5, 0.5);

    addSpriteSheet("huo_ani3", huo_all, "start", 1033.0, 975.4, 0.8, 0.5, 0.5);
    addSpriteSheet("huo_ani4", huo_all, "start", 1204.0, 918.4, 0.8, 0.5, 0.5);
    addSpriteSheet("huo_ani5", huo_all, "start", 1432.0, 813.4, 0.8, 0.5, 0.5);
    addSpriteSheet("huo_ani6", huo_all, "start", 1660.0, 720.4, 0.8, 0.5, 0.5);
    addSpriteSheet("huo_ani7", huo_all, "start", 1828.0, 639.4, 0.8, 0.5, 0.5);
    addSpriteSheet("huo_ani8", huo_all, "start", 2020.0, 621.4, 0.8, 0.5, 0.5);

    addSpriteSheet("baoxiang_ani", baoxiang_all, "stop", 2200.8, 683.0, 1, 0.5, 0.5);

    

    addRectBitmap_simple('yingzi', 'yingzi', sprite_, json_sprite, 0.5, 0.5, 405.2, 1457.5 , "addArrAll", true);
    addRectBitmap_simple('yingzi2', 'yingzi', sprite_, json_sprite, 0.5, 0.5, 1778.5, 625.3, "addArrAll", true);
    addRectBitmap_simple('jt', 'jt', sprite_, json_sprite, 0.5, 0.95, 601.0, 618.5 , "addArrAll", true);

  
    // addRectBitmap_simple('qipao1', 'qipao1', sprite_, json_sprite, 0.9, 0.98, 443.3, 1199., "addArrAll", true);


    addRectBitmap_simple('go', 'go', sprite_, json_sprite, 0.5, 0.5, 802.7, 1259.2, "addArrAll", true);

    


  
  addRectBitmap_simple('choose_kuang', 'choose_kuang', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);
  addRectBitmap_simple('yellow1', 'yellow', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);
  addRectBitmap_simple('yellow2', 'yellow', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  addRectBitmap_simple('cha', 'cha', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);
  addRectBitmap_simple('gou', 'gou', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  addRectBitmap_simple('cha2', 'cha', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);
  addRectBitmap_simple('gou2', 'gou', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  addRectBitmap_simple('cs1_1', 'cs1_1', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, 1, true);
  addRectBitmap_simple('cs1_2', 'cs1_2', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, 1, true);
  addRectBitmap_simple('cs2_1', 'cs2_1', sprite_, json_sprite, 0.5, 0.5, 912.8,1260.1, "addArrAll", true);
  if (chooseType==2) {
    addRectBitmap_simple('cs2_2', 'cs2_22', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, 1, true);  
    addRectBitmap_simple('an2_2', 'cs2_22', sprite_, json_sprite, 0.5, 0.5, 1197.5, 1006.7, 1, true);
  }else{
    addRectBitmap_simple('cs2_2', 'cs2_2', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, 1, true);
    addRectBitmap_simple('an2_2', 'cs2_2', sprite_, json_sprite, 0.5, 0.5, 1197.5, 1006.7, 1, true);
  }
  
  addRectBitmap_simple('cs3_1', 'cs3_1', sprite_, json_sprite, 0.5, 0.5, 1765.8, 579.4, "addArrAll", true);
  addRectBitmap_simple('cs3_2', 'cs3_2', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  // addRectBitmap_simple('cs4_1','cs4_1',sprite_,json_sprite,0.5,0.5,970.3,846.1,"addArrAll",true);
  // addRectBitmap_simple('cs4_2','cs4_2',sprite_,json_sprite,0.5,0.5,971.8,790.5,"addArrAll",true);
    addRectBitmap_simple('an1_1', 'cs1_1', sprite_, json_sprite, 0.5, 0.5, 834.3, 1199.8, 1, true);
    // addRectBitmap_simple('an1_11', 'cs1_11', sprite_, json_sprite, 0.5, 0.5, 834.3, 1199.8, 1.5, true);
    addRectBitmap_simple('an1_2', 'cs1_2', sprite_, json_sprite, 0.5,0.5, 904.9, 1207.7, "addArrAll", true);
  // addRectBitmap_simple('an2_1', 'cs2_1', sprite_, json_sprite, 0.5, 0.5, 912.8, 1260.1, 0.4, true);
    
    addRectBitmap_simple('an3_1', 'cs3_1', sprite_, json_sprite, 0.8, 0.8, 1822.8, 621.0, "addArrAll", true);
    addRectBitmap_simple('an3_2', 'cs3_2', sprite_, json_sprite, 0.5, 0.5, 1632.4, 648.1, 1, true);

  // addRectBitmap_simple('ok1', 'choose_s', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);
  // addRectBitmap_simple('ok2', 'choose_s', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  // addRectBitmap_simple('ok3', 'choose_s', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);

  // addRectBitmap_simple('ok1_icon', 'icon1', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);
  // addRectBitmap_simple('ok2_icon', 'icon2', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  // addRectBitmap_simple('ok3_icon', 'icon1', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);
  // addRectBitmap_simple('yellow11', 'yellow', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);
  // addRectBitmap_simple('yellow22', 'yellow', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  // addRectBitmap_simple('yellow33', 'yellow', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);


  addRectBitmap_simple('fail', 'fail', sprite_, json_sprite, 0.5, 0.5, 575.6, 630.1, 0.8, true);
    addRectBitmap_simple('qiaoji', 'qiaoji', sprite_, json_sprite, 0.5, 0.5, 1812.8, 465.5, 0.6, true);

  addRectBitmap_simple('hand', 'hand', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  addRectBitmap_simple('hand22', 'hand', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
    addRectBitmap_simple('hand2', 'hand1', sprite_, json_sprite, 0.5, 0.5, 784.6, 1274.1, "addArrAll", true);
    addRectBitmap_simple('yellow3', 'yellow', sprite_, json_sprite, 0.5, 0.5, 700.5, 1229.0, 1.4, true);


  addRectBitmap_simple('sma_kuang', 'sma_kuang', sprite_, json_sprite, 0.5, 0.5, 10, 10, "addArrAll", false);
  addRectBitmap_simple('bag', 'bag', sprite_, json_sprite, 0.5, 0.5, 503, 839, "addArrAll", false);
  addRectBitmap_simple('open', 'open', sprite_, json_sprite, 0.5, 0.5, 781, 636, "addArrAll", false);
  addRectBitmap_simple('close', 'close', sprite_, json_sprite, 0.5, 0.5, 781, 636, "addArrAll", false);

  addRectBitmap_simple("logo", 'logo_ema', sprite_, json_sprite, 0.5, 0.5, 453, 785, "addArrAll", true);
  // addRectBitmap_simple("logo",'logo_ema',sprite_,json_sprite,0.5,0.5,453,785,"addArrAll",true);
  addRectBitmap_simple("pow_img", 'pow_img', sprite_, json_sprite, 0.5, 0.5, 453, 785, "addArrAll", true);
  addRectBitmap_simple("play_btn", 'play_btn', sprite_, json_sprite, 0.5, 0.5, 596, 1289, "addArrAll", true);

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


  

  wb.sma_kuang.regX = 96 * 0.5;
  wb.sma_kuang.x = wb.sma_kuang.x + 96 * 0.5;
  wb.sma_kuang.regY = 100 * 0.5;
  wb.sma_kuang.y = wb.sma_kuang.y + 100 * 0.5;
  wb.bag.regX = 76 * 0.5;
  wb.bag.x = wb.bag.x + 76 * 0.5;
  wb.bag.regY = 79 * 0.5;
  wb.bag.y = wb.bag.y + 79 * 0.5;
  containerAll2_cs.addChild(wb.choose_kuang, wb.cs1_1, wb.cs1_2, wb.cs2_1, wb.cs2_2, wb.cs3_1, wb.cs3_2,
    wb.yellow1, wb.yellow2, wb.cha, wb.gou, wb.cha2, wb.gou2);
  // containerAll2_cs2.addChild(wb.ok2, wb.ok3, wb.ok1, wb.ok2_icon, wb.ok3_icon, wb.ok1_icon, wb.yellow11, wb.yellow22, wb.yellow33);
  wb.cha.scaleX = 0; wb.cha.scaleX = 0; wb.gou.scaleX = 0; wb.gou.scaleY = 0;
  wb.cha2.scaleX = 0; wb.cha2.scaleX = 0; wb.gou2.scaleX = 0; wb.gou2.scaleY = 0;
  wb.yellow1.alpha = wb.yellow2.alpha = 0.02;
  // wb.yellow11.alpha = wb.yellow22.alpha = wb.yellow33.alpha = 0.02;
  // wb.ok3_icon.skewY=180;
  // wb.yellow11.scaleX = wb.yellow11.scaleY = 1.15;
  // wb.yellow22.scaleX = wb.yellow22.scaleY = 1.15;
  // wb.yellow33.scaleX = wb.yellow33.scaleY = 1.15;
  // wb.an3_1.rotation = -20;
  container4_2.addChild(wb.light);
  person.addChild( wb.fail, wb.yellow3);
  containerAll3.addChild(wb.sma_kuang, wb.bag, wb.open, wb.close, container3);
  containerAll2_cs.alpha = 0;

  person.addChild(wb.an2_2, wb.qiaoji, wsp.door_ani, wsp.wolf_ani1, wsp.wolf_ani2, wsp.wolf_ani3, wsp.wolf_ani4,
    wb.an1_1, wsp.huo_ani1, wsp.huo_ani2, wsp.huo_ani3, wsp.huo_ani4, wsp.huo_ani5, wsp.huo_ani6, wsp.huo_ani7, wsp.huo_ani8, wsp.baoxiang_ani,
    wsp.yanwu_ani, wb.go, wb.an1_2, wb.hand2, wb.yingzi, wb.yingzi2, wb.an3_1, wsp.mine_all_ani, wsp.mine_all_ani2, wb.an3_2, container4_1,wb.zhezhao
    );


  window.arr_zero = [wb.fail, wb.cs2_1, wb.cs2_2, wb.cs3_1, wb.cs3_2, wb.yingzi2, wb.light, 
    wb.an1_1, wb.an1_2, wb.an2_2, wb.an3_1, wb.an3_2, wsp.huo_ani3, wsp.huo_ani4, wsp.huo_ani5, wsp.huo_ani6, wsp.huo_ani7, wsp.huo_ani8, wb.zhezhao,
    // wsp.wolf_ani1, wsp.wolf_ani2, wsp.wolf_ani3, wsp.wolf_ani4, wsp.wolf_ani5, wsp.wolf_ani6, wsp.wolf_ani7, wsp.wolf_ani8, wsp.wolf_ani9, wsp.wolf_ani10,
    wb.qiaoji, wsp.yanwu_ani, wb.yellow3, wb.go, wb.hand2];



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


  wb.fail.scaleX = wb.fail.scaleY = 1.3;
  wb.jt.scaleX = wb.jt.scaleY = 0.6;
  // wsp.mine_all_ani3.scaleX = wsp.mine_all_ani3.scaleY = 1.12;
  // wsp.yanwu_ani.scaleX = wsp.yanwu_ani.scaleY = 2.5;
  // wsp.zhadan_ani.scaleX = wsp.zhadan_ani.scaleY = 1.3;
  // wb.qipao1.skewY = 180;
  // containerAll.x = -1285;
  // containerAll.y = -69.8;
  wsp.mine_all_ani2.skewY = 180;
  wsp.mine_all_ani.skewY = 180;


  wb.open.addEventListener("mousedown", function () {
    if (wb.open.alpha == 0) {
      // gainNode.gain.value=1;
      audioCtx.resume();
      wb.open.alpha = 1;
      wb.close.alpha = 0;
      musicState = "play";
    } else {
      // gainNode.gain.value=0;
      audioCtx.suspend();
      wb.open.alpha = 0;
      wb.close.alpha = 1;
      musicState = "pause";
    }
  })
  wb.close.addEventListener("mousedown", function () {
    if (wb.open.alpha == 0) {
      // gainNode.gain.value=1;
      audioCtx.resume();
      wb.open.alpha = 1;
      wb.close.alpha = 0;
      musicState = "play";
    } else {
      // gainNode.gain.value=0;
      audioCtx.suspend();
      wb.open.alpha = 0;
      wb.close.alpha = 1;
      musicState = "pause";
    }
  })

  document.addEventListener('visibilitychange', function () {

    // 用户离开了当前页面
    setTimeout(function () {
      if (document.visibilityState === 'hidden') {
        createjs.Ticker.paused = 1;
        if (musicState != null) {
          // gainNode.gain.value=0;
          audioCtx.suspend();
          wb.open.alpha = 0;
          wb.close.alpha = 1;
        }

      }
    }, 200)


    // 用户打开或回到页面
    setTimeout(function () {
      if (document.visibilityState === 'visible') {
        createjs.Ticker.paused = 0;
        if (musicState == "play") {
          // gainNode.gain.value=1;
          audioCtx.resume();
          wb.open.alpha = 1;
          wb.close.alpha = 0;
        }
      }
    }, 250)

  });

  wb.open.alpha = 1;
  wb.close.alpha = 0;

  var W = window.innerWidth;
  var H = window.innerHeight;

  if (W >= H) {
    wb.open.x = wb.close.x = 531 - cx;
    wb.open.y = wb.close.y = 887 - cy;
  } else {
    wb.open.x = wb.close.x = 778 - cx;
    wb.open.y = wb.close.y = 1390 / 2 - canvas.height / 2 + 510 - cy;
  }




  window.stage.alpha = 1;
  
  setTimeout(() => {
    document.getElementsByTagName("body")[0].style.opacity = 1;
    var app = require("./app.js");
  }, 500);
  
  var W = window.innerWidth;
  var H = window.innerHeight;

  if (W >= H) {
    window.pageState = "heng";
    resizerq.horizontalChange();
    resizerq.hengChange();
  } else {
    window.pageState = "shu";
    resizerq.verticalChange();
    resizerq.shuChange();
  }


}, 500);
  // mapDrawLine();
  


  

}