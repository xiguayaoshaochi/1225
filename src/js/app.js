



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
  // mapMove(wsp.mine_all_ani, 567.6, 1382.4, 1, false, showFirst, "other");
}, 50);

createjs.Tween.get(stage).to({ scaleX: 1, scaleY: 1 }, 500).call(function () {

  // wsp.mine_all_ani.gotoAndPlay("chui"); 
  // setTimeouc(() => {
    
  //   // setTimeouc(() => {
      
  //   // }, sTime(wsp.mine_all_ani2, "chui"));
  // }, sTime(wsp.mine_all_ani, "chui"));

  
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



var empty = function(){

}

