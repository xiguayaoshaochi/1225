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
  // wsp.mine_all_ani.gotoAndPlay("walk_br");
  // mapMove(wsp.mine_all_ani, 567.6, 1382.4, 1, false, showFirst, "other");
  window.w1 = new eatLoop(wsp.wolf_ani1,0,4000);
  window.w2 = new eatLoop(wsp.wolf_ani2, 1000, 4000);
  window.w3 = new eatLoop(wsp.wolf_ani3, 2000, 4000);
  window.w4 = new eatLoop(wsp.wolf_ani4, 3000, 4000);
}, 50);

createjs.Tween.get(stage).to({ scaleX: 1, scaleY: 1 }, 500).call(function () {

  // wsp.mine_all_ani.gotoAndPlay("chui"); 
  // setTimeouc(() => {
    
  //   // setTimeouc(() => {
      
  //   // }, sTime(wsp.mine_all_ani2, "chui"));
  // }, sTime(wsp.mine_all_ani, "chui"));
  setTimeout(() => {
    showFirst();
  }, 1500);
  

  
  wb.jianci1.y = wb.jianci1.y + 2;
  cjs.Tween.get(wb.jianci1, { loop: true }).to({ y: wb.jianci1.y - 3 }, 100).to({ y: wb.jianci1.y }, 200);
  wb.jianci4.y = wb.jianci4.y + 2;
  cjs.Tween.get(wb.jianci4, { loop: true }).to({ y: wb.jianci4.y - 3 }, 100).to({ y: wb.jianci4.y }, 200);
  setTimeout(() => {
    wb.jianci2.y = wb.jianci2.y + 2;
    cjs.Tween.get(wb.jianci2, { loop: true }).to({ y: wb.jianci2.y - 3 }, 100).to({ y: wb.jianci2.y }, 200);
  }, 350);
  setTimeout(() => {
    wb.jianci3.y = wb.jianci3.y + 2;
    cjs.Tween.get(wb.jianci3, { loop: true }).to({ y: wb.jianci3.y - 3 }, 100).to({ y: wb.jianci3.y }, 200);
  }, 700);
  stage.setTransform(savex, savey, 1, 1);
});


var showFirst = function(){
  first();
  // cjs.Tween.get(wsp.wolf_ani1, { loop: true }).to({ alpha: 0 }, 500).wait(200).to({ alpha: 1 }, 500);
  // cjs.Tween.get(wsp.wolf_ani2, { loop: true }).to({ alpha: 0 }, 500).wait(200).to({ alpha: 1 }, 500);
  // cjs.Tween.get(wsp.wolf_ani3, { loop: true }).to({ alpha: 0 }, 500).wait(200).to({ alpha: 1 }, 500);
  // cjs.Tween.get(wsp.wolf_ani4, { loop: true }).to({ alpha: 0 }, 500).wait(200).to({ alpha: 1 }, 500);
  cjs.Tween.get(wsp.wolf_ani1, { loop: false }).to({ alpha: 0 }, 200);
  cjs.Tween.get(wsp.wolf_ani2, { loop: false }).to({ alpha: 0 }, 200);
  cjs.Tween.get(wsp.wolf_ani3, { loop: false }).to({ alpha: 0 }, 200);
  cjs.Tween.get(wsp.wolf_ani4, { loop: false }).to({ alpha: 0 }, 200);
  wsp.mine_all_ani2.skewY = 0;
  wsp.mine_all_ani.skewY = 0;
  wsp.mine_all_ani.gotoAndPlay("walk_br");
  wsp.mine_all_ani2.gotoAndPlay("walk_br");
  mapMove(wsp.mine_all_ani, 977.9, 1180.2, 1, true, chooseOne, "suibian");
  setTimeouc(() => {
    // chooseOne();
    cjs.Tween.get(wsp.wolf_ani1, { loop: false }).to({ alpha: 1 }, 150);
    cjs.Tween.get(wsp.wolf_ani2, { loop: false }).to({ alpha: 1 }, 150);
    cjs.Tween.get(wsp.wolf_ani3, { loop: false }).to({ alpha: 1 }, 150);
    cjs.Tween.get(wsp.wolf_ani4, { loop: false }).to({ alpha: 1 }, 150);
  }, 2000);
  // createjs.Tween.get(wb.qipao1).to({ scaleX: 1, scaleY: 1 }, 800, createjs.Ease.backOut);
  // stage.addEventListener("mousedown", one(goStart, 1500+800));
}

var chooseOne = function(){
  wsp.mine_all_ani2.skewY = 180;
  // wsp.mine_all_ani.skewY = 180;
  wsp.mine_all_ani.gotoAndPlay("stop");
  wsp.mine_all_ani2.gotoAndPlay("stop");
  mineChangeSite2(940.8, 1115.4, 1);
  jtStart(883.4, 1062.1);
  levelOne();
  
}



var goStart = function () {
  // bgm_play();
  
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
  // wsp.mine_all_ani.gotoAndPlay("stop");
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
  jtPause();
  choose.play(0);
  createjs.clearTimeout(ss1);
  h1.clear();
  wb.yellow1.removeAllEventListeners();
  wb.yellow2.removeAllEventListeners();
  wb.yellow1.alpha = 1;
  person.addChild(wb.an1_1);
  wb.an1_1.x = 977.9; wb.an1_1.y = 1174.1;
  createjs.Tween.get(wb.an1_1).to({ alpha:1},100)
    .to({ x: 920.7, y: 1189.6,scaleX:0.4,scaleY:0.4 }, 500, createjs.Ease.quadIn).wait(150).to({alpha:0},200).call(()=>{
    person.addChild(wb.fail);
    wb.fail.alpha = 1;
    wb.fail.x = 917.7; wb.fail.y = 1167;
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
  jtPause();
  choose.play(0);
  createjs.clearTimeout(ss1);
  h1.clear();
  wb.yellow1.removeAllEventListeners();
  wb.yellow2.removeAllEventListeners();
  wb.yellow2.alpha = 1;
  person.addChild(wb.an1_2);
  wb.an1_2.scaleX = wb.an1_2.scaleY = 0.6;
  wb.an1_2.x = 975; wb.an1_2.y = 1180;
  createjs.Tween.get(wb.an1_2).to({ alpha: 1 }, 100)
  .to({ x: 920, y: 1190, scaleX: 0.5, scaleY: 0.5 }, 500, createjs.Ease.quadIn).wait(150).to({ alpha: 0 }, 200).call(()=>{
    wsp.door_ani.gotoAndPlay("start");
    person.addChild(wsp.door_ani, wsp.wolf_ani1, wsp.wolf_ani2, wsp.wolf_ani3, wsp.wolf_ani4);
    setTimeout(() => {
      goSecond();
      recoveryChoose();
    }, sTime(wsp.door_ani,"start")+300);
  })

  createjs.Tween.get(wb.gou2).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.backOut);
}


var goSecond = function(){
  jtStart(1165.0, 846.0);
  wb.door_s.alpha=0;
  window.wolf_lock = 0;
  mineChangeSite2(1170.1, 1145.1, 1);
  mineChangeSite(1129.4, 1127.7, 1);
  wsp.mine_all_ani2.skewY = 0;
  wsp.mine_all_ani.skewY = 0;
  wsp.mine_all_ani.gotoAndPlay("walk_br");
  wsp.mine_all_ani2.gotoAndPlay("walk_br");
  mapMove(wsp.mine_all_ani, 1290.1, 1045.8, 1, true, levelTwo, "other");
  setTimeout(() => {
    cjs.Tween.get(wb.zhezhao, { loop: false }).to({ alpha: 1 }, 700);
  }, 500);
}

var levelTwo = function () {
  chooseChange(wb.cs1_1, wb.cs1_2, wb.cs2_1, wb.cs2_2);
  wsp.mine_all_ani2.skewY = 180;
  wsp.mine_all_ani.skewY = 180;
  wsp.mine_all_ani.gotoAndPlay("stop");
  wsp.mine_all_ani2.gotoAndPlay("stop");
  h1.restart();
  wb.yellow1.addEventListener("mousedown", clickCS12);
  wb.yellow2.addEventListener("mousedown", one(clickCS22, waitTime));
}

let clickCS21 = () => {
  if (bgm_state == false) {
    bgm_play();
  }
  jtPause();
  choose.play(0);
  createjs.clearTimeout(ss1);
  h1.clear();
  wb.yellow1.removeAllEventListeners();
  wb.yellow2.removeAllEventListeners();
  wb.yellow1.alpha = 1;
  person.addChild(wb.an1_2);
  
  createjs.Tween.get(wb.cha2).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.backOut);
}



let clickCS22 = () => {
  if (bgm_state == false) {
    bgm_play();
  }
  jtPause();
  choose.play(0);
  createjs.clearTimeout(ss1);
  h1.clear();
  wb.yellow1.removeAllEventListeners();
  wb.yellow2.removeAllEventListeners();
  wb.yellow2.alpha = 1;
  person.addChild(wb.an2_2);
  

  createjs.Tween.get(wb.gou2).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.backOut);
}


var empty = function(){

}

