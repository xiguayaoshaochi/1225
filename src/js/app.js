



var cjs = createjs;
  //开始 
  // con_red.filters = [new createjs.ColorFilter(0.45, 0.45, 0.45, 1, 140.25, 13.2, 13.2, 0), new createjs.ColorMatrixFilter(new createjs.ColorMatrix(100, 0, 0, 0))];
  // con_red.filters = [new createjs.ColorFilter(0.45, 0.45, 0.45, 1, 140.25, 13.2, 13.2, 0)];
  // con_red.cache(1100, 600, 400, 400);
  // con_blue.filters = [new createjs.ColorFilter(0.45, 0.45, 0.45, 1, 31.35, 23.1, 140.25, 0)];
  // con_blue.cache(900, 500, 300, 300);


  // createjs.Tween.get(wb.go).to({ alpha: 1 }, 500);
  // createjs.Tween.get(wb.go, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 600).to({ scaleX: 1, scaleY: 1 }, 400);


setTimeout(() => {
  wsp.mine_all_ani.gotoAndPlay("walk_br");
  mapMove(wsp.mine_all_ani, 567.6, 1382.4, 1, false, showFirst, "other");
}, 50);

createjs.Tween.get(stage).to({ scaleX: 1, scaleY: 1 }, 500).call(function () {

  // wsp.mine_all_ani.gotoAndPlay("chui"); 
  setTimeouc(() => {
    
    // setTimeouc(() => {
      
    // }, sTime(wsp.mine_all_ani2, "chui"));
  }, sTime(wsp.mine_all_ani, "chui"));

  
  // .wait(1500).to({ alpha: 0 }, 200).call(() => {

  //   });
  stage.setTransform(savex, savey, 1, 1);
});


var showFirst = function(){
  wsp.mine_all_ani.gotoAndPlay("stop");
  createjs.Tween.get(wb.qipao1).to({ scaleX: 1, scaleY: 1 }, 800, createjs.Ease.backOut);
  stage.addEventListener("mousedown", one(goStart, 1500+800));
}



var goStart = function () {
  // bgm_play();
  first();
  createjs.Tween.get(wb.qipao1).to({ alpha: 0 }, 200).call(() => {
    wsp.mine_all_ani.gotoAndPlay("walk_br"); 
    mapMove(wsp.mine_all_ani, 767.3, 1285.1, 1, true, levelOne, "other");
    // mapMovecs(wsp.mine_all_ani, 852.0, 1260.3, 1, false, showFirst, "other", [wb.yingzi2]);
    for (let index = 1; index < 5; index++) {
      setTimeout(() => {
        eval('wsp.huo_ani' + index).gotoAndPlay("stop");
        eval('wsp.huo_ani' + index).gotoAndPlay("start");
        createjs.Tween.get(eval('wsp.huo_ani' + index)).to({ alpha: 1 }, 150);
      }, index*80);
    }
    ranshao.play(0);
  });
  
  // removeStop(wb.qipao1);
}



var levelOne = function () {
  wsp.mine_all_ani.gotoAndPlay("stop");
  containerAll2_cs.y = containerAll2_cs.y + 100;
  createjs.Tween.get(containerAll2_cs).to({ y: containerAll2_cs.y - 100, alpha: 1 }, 800, createjs.Ease.backOut).call(function () {
    // jtStart(761.6, 1040.2);
    containerAll2_cs.addChild(wb.hand);
    window.h1 = new handAni(wb.hand, [wb.yellow1, wb.yellow2]);
    wb.yellow1.addEventListener("mousedown", clickCS11);
    wb.yellow2.addEventListener("mousedown", one(clickCS12, waitTime));
  })
}

let clickCS11 = () => {
  if (bgm_state == false) {
    bgm_play();
  }
  // jtPause();
  choose.play(0);
  createjs.clearTimeout(ss1);
  h1.clear();
  wb.yellow1.removeAllEventListeners();
  wb.yellow2.removeAllEventListeners();
  wb.yellow1.alpha = 1;
  wb.an1_1.x = 882; wb.an1_1.y = 1266-50;
  createjs.Tween.get(wb.an1_1).to({ alpha:1},100)
    .to({ x: 882, y: 1266 }, 150, createjs.Ease.quadIn).wait(150).call(() => { cjs.Tween.get(wsp.huo_ani5).to({ alpha: 1 }, 100).wait(1100).to({ alpha: 0 }, 200)})
    .wait(1100).to({alpha:0},200).call(()=>{
    person.addChild(wb.fail);
    wb.fail.alpha = 1;
    wb.fail.x = 882; wb.fail.y = 1266;
    person.addChild(wb.fail);
    window.shake1 = new Shake(stage);
    window.shake2 = new Shake(wb.fail);
    setTimeouc(function () {
    shake1.stop();
    shake2.stop();
    wb.fail.alpha = 0;
    recoveryChoose();
    wb.yellow1.addEventListener("mousedown", clickCS11);
    wb.yellow2.addEventListener("mousedown", one(clickCS12, waitTime));
    }, 1000)
  })

  createjs.Tween.get(wb.cha2).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.backOut);
}



let clickCS12 = () => {
  if (bgm_state == false) {
    bgm_play();
  }
  // jtPause();
  choose.play(0);
  createjs.clearTimeout(ss1);
  h1.clear();
  wb.yellow1.removeAllEventListeners();
  wb.yellow2.removeAllEventListeners();
  wb.yellow2.alpha = 1;
  iceDown();
  setTimeout(() => {
    createjs.Tween.get(wb.ice_all).to({ alpha: 1 }, 1000)
  }, 200);

  createjs.Tween.get(wb.gou2).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.backOut);
}

// chooseChange(wb.cs1_1, wb.cs1_2, wb.cs2_1, wb.cs2_2);

var iceDown = function(){
  wb.an1_2.alpha=1;
  wb.an1_11.x = 882; wb.an1_11.y = 1266 - 50;
  createjs.Tween.get(wb.an1_2).wait(100).to({ x: 815.5,y:1179.6 }, 1000).to({alpha:0},200);
  ranshao.play(0);
  var a=0;
  var c = setInterval(() => {
    if (a>=5) {
      clearInterval(c);
      createjs.Tween.get(wb.an1_11).to({ alpha:1},100)
      .to({ x: 891, y: 1265 }, 150, createjs.Ease.quadIn).wait(300).call(()=>{
        recoveryChoose();
        concs2.hideCon();
        mapMove(wsp.mine_all_ani, 1132.1, 1090.4, 1, true, levelTwo, "suibian");
        wsp.mine_all_ani.gotoAndPlay("walk_br");
        wb.zhenci1.y = wb.zhenci1.y + 2;
        cjs.Tween.get(wb.zhenci1, { loop: true }).to({ y: wb.zhenci1.y - 3 }, 100).to({ y: wb.zhenci1.y }, 200);
        setTimeout(() => {
          wb.zhenci2.y = wb.zhenci2.y + 2;
          cjs.Tween.get(wb.zhenci2, { loop: true }).to({ y: wb.zhenci2.y - 3 }, 100).to({ y: wb.zhenci2.y }, 200);
        }, 350);
        setTimeout(() => {
          wb.zhenci3.y = wb.zhenci3.y + 2;
          cjs.Tween.get(wb.zhenci3, { loop: true }).to({ y: wb.zhenci3.y - 3 }, 100).to({ y: wb.zhenci3.y }, 200);
        }, 700);
      })
    } else if (a < 4) {
      createjs.Tween.get(eval('wsp.huo_ani' + (a+1))).to({ alpha: 0 }, 150);
      
    }

    var iceName='ice'+random1(1,100);
    addRectBitmap_simple(iceName, 'ice', sprite_, json_sprite, 0.5, 0.5, 904.9, 1207.7, "addArrAll", true);
    wb[iceName].x = wb.an1_2.x-6; wb[iceName].y = wb.an1_2.y+8;
    container4_1.addChild(wb[iceName]);
    container4_1.setChildIndex(wb[iceName],0);
    a++;
    createjs.Tween.get(wb[iceName]).to({ y: wb[iceName].y+70 }, 200).to({alpha:0},100)
  }, 200);
  
}



var levelTwo = function(){
  concs2.showCon();
  wsp.mine_all_ani.gotoAndPlay("stop");
  chooseChange(wb.cs1_1,wb.cs1_2,wb.cs2_1,wb.cs2_2);
  
  wb.yellow1.addEventListener("mousedown", clickCS21);
  wb.yellow2.addEventListener("mousedown", one(clickCS22, waitTime));
}


let clickCS21 = () => {
  // jtPause();
  choose.play(0);
  createjs.clearTimeout(ss1);
  h1.clear();
  wb.yellow1.removeAllEventListeners();
  wb.yellow2.removeAllEventListeners();
  wb.yellow1.alpha = 1;
  createjs.Tween.get(wb.muban).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 350).call(()=>{nextstep()});
  createjs.Tween.get(wb.gou).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.backOut);
}



let clickCS22 = () => {
  // jtPause();
  choose.play(0);
  createjs.clearTimeout(ss1);
  h1.clear();
  wb.yellow1.removeAllEventListeners();
  wb.yellow2.removeAllEventListeners();
  wb.yellow2.alpha = 1;
  if (chooseType == 2) {
    createjs.Tween.get(wb.an2_2).to({ alpha: 1 }, 100)
  }else{
    createjs.Tween.get(wb.an2_2).to({ alpha: 1 }, 100)
    .to({ y: wb.an2_2.y + 60 }, 200, cjs.Ease.quadIn).call(() => {
      wsp.yanwu_ani.alpha = 1;
      wsp.yanwu_ani.gotoAndPlay("start");
      createjs.Tween.get(wb.nidui).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 350).call(() => { nextstep() });
      setTimeout(() => {
        wsp.yanwu_ani.alpha = 0;
      }, sTime(wsp.yanwu_ani, "start"));
    }).to({ alpha: 0 }, 100)
  }
  

  createjs.Tween.get(wb.gou2).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.backOut);
}

var nextstep = function(){
  concs2.hideCon();
  recoveryChoose();
  setTimeouc(() => {
    wsp.mine_all_ani.gotoAndPlay("walk_br");
    mapMove(wsp.mine_all_ani, 1512.6, 887.3, 1, true, goUp, "suibian");
  }, 300);
}

var goUp = function () {
  wsp.mine_all_ani.gotoAndPlay("stop");
  mineChangeSite(1649.1, 713.2);
  jtStart(1810.2, 387.6);
  createjs.Tween.get(wb.qipao3).to({ scaleX: 1, scaleY: 1 }, 800, createjs.Ease.backOut);
  createjs.Tween.get(containerAll).to({ x: -1074, y: -3.6 }, 1500, createjs.Ease.quadInOut).call(()=>{
    chooseChange(wb.cs2_1, wb.cs2_2, wb.cs3_1, wb.cs3_2);
    createjs.Tween.get(wb.qipao2).to({ scaleX: 1, scaleY: 1 }, 800, createjs.Ease.backOut);
    wsp.mine_all_ani.gotoAndPlay("stop");
    concs2.showCon();
    
    wb.yellow1.addEventListener("mousedown", clickCS31);
    wb.yellow2.addEventListener("mousedown", one(clickCS32, waitTime));
    // mapMove(wsp.mine_all_ani, 1512.6, 887.3, 1, true, empty, "suibian");
  });
  cjs.Tween.get(wb.tree_p, { loop: false }).to({ rotation: -7 }, 600, cjs.Ease.quadOut).call(()=>{
    cjs.Tween.get(wb.tree_p, { loop: true }).to({ rotation: 5 }, 600*2, cjs.Ease.quadOut).to({ rotation: -7 }, 600*2, cjs.Ease.quadOut)
  })
  
}


let clickCS31 = () => {
  jtPause();
  choose.play(0);
  createjs.clearTimeout(ss1);
  h1.clear();
  wb.yellow1.removeAllEventListeners();
  wb.yellow2.removeAllEventListeners();
  wb.yellow1.alpha = 1;
  createjs.Tween.get(wb.an3_1).to({ alpha: 1 }, 100);
  wsp.mine_all_ani.gotoAndPlay("walk_br");
  cjs.Tween.get(wb.qipao2).to({ alpha: 0 }, 200); cjs.Tween.get(wb.qipao3).to({ alpha: 0 }, 200);
  mapMove(wsp.mine_all_ani, 1816.1, 629.8, 1, false, standdesk, "other");
  createjs.Tween.get(wb.gou).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.backOut);
}

var standdesk = function(){
  createjs.Tween.get(containerAll2_cs).to({ y: containerAll2_cs.y + 100, alpha: 0 }, 800, createjs.Ease.backOut);
  mineChangeSite(1847.2, 585.3);
  wsp.mine_all_ani.gotoAndPlay("stop1");
  wsp.mine_all_ani.skewY=180;
  createjs.Tween.removeTweens(wb.tree_p);
  cjs.Tween.get(wb.tree_p, { loop: false }).to({ rotation: 0 }, 200, cjs.Ease.quadOut).wait(300).call(()=>{
    cjs.Tween.get(wb.tree_p).to({ alpha: 0 }, 200); cjs.Tween.get(wb.an3_1).to({ alpha: 0 }, 200);
    cjs.Tween.get(wb.person2).to({ alpha: 1 }, 200); cjs.Tween.get(wb.yingzi2).to({ alpha: 1 }, 200);
    wsp.mine_all_ani.skewY = 0; 
    mineChangeSite(1772.8, 615.9);
    wsp.mine_all_ani.gotoAndPlay("stop");
    endShow();
  })
}



let clickCS32 = () => {
  jtPause();
  choose.play(0);
  createjs.clearTimeout(ss1);
  h1.clear();
  wb.yellow1.removeAllEventListeners();
  wb.yellow2.removeAllEventListeners();
  wb.yellow2.alpha = 1;
  cjs.Tween.get(wb.qipao2).to({ alpha: 0 }, 200); cjs.Tween.get(wb.qipao3).to({ alpha: 0 }, 200);
  wb.an3_2.skewY = 180; wb.an3_2.rotation = -70; wb.an3_2.x = 1667.4; wb.an3_2.y = 693.6;
  reng.play(0);
  createjs.Tween.get(wb.an3_2).to({ alpha: 1 }, 100).to({ x: 1834.4, y: 505.1, scaleX: 0.5, scaleY: 0.5, rotation: 290},500).call(()=>{
    // createjs.Tween.get(containerAll2_cs).to({ y: containerAll2_cs.y + 100, alpha: 0 }, 800, createjs.Ease.backOut);
    wb.qiaoji.alpha=1;
    cjs.Tween.get(wb.qiaoji).to({ alpha: 0 }, 100).call(()=>{
      person.addChild(wb.fail);
      wb.fail.alpha = 1;
      wb.fail.x = 1839.7; wb.fail.y = 535.1;
      person.addChild(wb.fail);
      window.shake1 = new Shake(stage);
      window.shake2 = new Shake(wb.fail);
      setTimeouc(function () {
        shake1.stop();
        shake2.stop();
        wb.fail.alpha = 0;
        recoveryChoose();
        wb.yellow1.addEventListener("mousedown", one(clickCS31, waitTime));
        wb.yellow2.addEventListener("mousedown", clickCS32);
      }, 1000)
    });
    
  })
  .to({alpha:0},100);
  // wsp.mine_all_ani.gotoAndPlay("walk_br");
  // mapMove(wsp.mine_all_ani, 1772.8, 615.9, 1, false, golast, "suibian");
  createjs.Tween.get(wb.gou2).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.backOut);
}

var golast = function(){
  wsp.mine_all_ani.gotoAndPlay("stop");
  
}

var empty = function(){

}

