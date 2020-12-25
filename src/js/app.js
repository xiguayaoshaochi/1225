var cjs = createjs;
var textf = '1,';
if (language=='Japan') {
  textf='1'
}

var waitTime = 800000;
window.tt = 439;
setTimeouc(() => {
  cjs.Tween.get(wb.guang,{loop:true}).to({rotation:360},3000);
  
  window.h1 = new handTips(wb.hand);
  roadcon2.addEventListener("mousedown", one(clickroad21, waitTime));
}, 350);

function clickroad21(){
  h1.stop();
  
  cjs.Tween.get(wb.car_m3).to({
    y: wb.car_m3.y - 420
  }, 1000).call(()=>{
    wb.hand2.y=301;
    window.h2 = new handTips(wb.hand2);
    roadcon4.addEventListener("mousedown", one(clickroad41, waitTime));
  })
}

var screenTop = (1390 - canvas.height) / 2;
var screenMiddle = 1390 / 2;
var screenBottom = (1390 + canvas.height) / 2;
var screenLeft = (1390 - canvas.width) / 2;
var screenRight = (1390 + canvas.width) / 2;

function clickroad41() {
  
  h2.stop();
  cjs.Tween.get(wb.car_m3).to({
      x: wb.car_m3.x + (roadcon4.x - roadcon2.x)
    }, 600).to({
      y: wb.car_m3.y -(- 420 + (25 + 108) * 2)
    }, 400).call(() => {
      var c2 = setInterval(() => {
        tt++;
        text.text = textf + tt;
      }, 1000 / (651 - 439));
      setTimeouc(() => {
        clearInterval(c2);
      }, 1000);
      
      wb.car_m3.alpha=0;
      wb.car_b1.alpha=1;
      person.addChild(wsp.particle_ani);
      wsp.particle_ani.alpha = 1;
      wsp.particle_ani.x = screenMiddle+170;
      wsp.particle_ani.y = screenMiddle-160 ;
      wsp.particle_ani.gotoAndPlay("start1");
      setTimeouc(() => {
        wsp.particle_ani.alpha=0;
      }, sTime(wsp.particle_ani, "start"));
      cjs.Tween.get(roadcon4).to({
        scaleY: 0.9
      }, 350, cjs.Ease.quadOut).to({
        scaleY: 1
      }, 350, cjs.Ease.quadOut).call(()=>{
        window.h3 = new handTips(wb.hand3);
        roadcon2.addEventListener("mousedown", one(clickroad22, waitTime));
      })
  })
}


function clickroad22() {
  h3.stop();
  cjs.Tween.get(wb.car_m4).to({
    y: wb.car_m4.y - 420 - (25 + 108) * 1
  }, 1250).call(() => {
    // wb.hand2.y = 301;
    person.addChild(roadcon3);
    window.h4 = new handTips(wb.hand4);
    roadcon3.addEventListener("mousedown", one(clickroad42, waitTime));
  })
}

function clickroad42(){

  person.addChild(roadcon2);
  h4.stop();
  cjs.Tween.get(wb.car_m4).to({
    x: wb.car_m4.x + (roadcon3.x - roadcon2.x)
  }, 300).to({
    y: wb.car_m4.y - (-420 + (25 + 108) * 2)
  }, 400).call(() => {
      var c4 = setInterval(() => {
        tt+=2;
        console.log(tt)
        if (tt >= 1000) {
          return text.text = '2,000';
        }
        text.text = textf + tt;
      }, 700 / (1000 - 800));
      setTimeouc(() => {
        clearInterval(c4);
      }, 700);
    
    wb.car_m4.alpha = 0;
    wb.car_y1.alpha = 1;
    person.addChild(wsp.particle_ani);
    wsp.particle_ani.alpha = 1;
    wsp.particle_ani.x = screenMiddle+45;
    wsp.particle_ani.y = screenMiddle - 160;
    wsp.particle_ani.gotoAndPlay("start1");
    setTimeouc(() => {
      wsp.particle_ani.alpha = 0;
    }, sTime(wsp.particle_ani, "start"));
    cjs.Tween.get(roadcon3).to({
      scaleY: 0.9
    }, 350, cjs.Ease.quadOut).to({
      scaleY: 1
    }, 350, cjs.Ease.quadOut).call(() => {
      
    })
    setTimeouc(() => {
      person.addChild(end_pop);
      wb.card.alpha = wb.txt1.alpha = wb.end_btn.alpha = 0;
      cjs.Tween.get(end_pop).to({
        alpha: 1
      }, 350)
      wb.card.alpha=1;
      cjs.Tween.get(wb.card).to({
        scaleY:1,scaleX:1
      }, 500,cjs.Ease.backOut);
      cjs.Tween.get(wb.guang).to({
        scaleY:1,scaleX:1
      }, 500,cjs.Ease.backOut);
      cjs.Tween.get(wb.you_win).wait(10).to({alpha:1},10).to({
        y: wb.you_win.y +300
      }, 500, cjs.Ease.backOut);
      cjs.Tween.get(wb.end_btn).wait(10).to({
          alpha: 1
        }, 10).to({
        scaleY: 1,
        scaleX: 1
      }, 500, cjs.Ease.backOut).call(()=>{
        var btn = new scale_animate(wb.end_btn, 1, 1.1, 1000);
        wb.end_btn.addEventListener('mousedown',function(){
          mraid.open();
        })
      });
      cjs.Tween.get(wb.txt1).wait(350).to({
        alpha: 1
      }, 10).to({
        scaleY: 1,
        scaleX: 1
      }, 500, cjs.Ease.backOut);
    }, 350);
  })
}


function handTips(obj) {
  var _this = this;
  _this.obj = obj;
  console.log(obj.name)
  _this.lock =true;
  var objpar = _this.obj.parent;
  var gname = "g"+random1(1,9999);
  var gname2 = "g" + random1(1, 9999)
  addRectBitmap_simple(gname, 'g1', sprite_, json_sprite, 0.5, 0.5, 15, 40, "addArrAll", true);
  addRectBitmap_simple(gname2, 'g1', sprite_, json_sprite, 0.5, 0.5, 15, 40, "addArrAll", true);
  objpar.addChild(wb[gname], wb[gname2], _this.obj);
  _this.ready=function(){
    wb[gname].x = _this.obj.x;
    wb[gname].y = _this.obj.y - 10;
    wb[gname].alpha = 0;
    wb[gname].scaleX = wb[gname].scaleY = 0.5;
    wb[gname2].x = _this.obj.x;
    wb[gname2].y = _this.obj.y - 10;
    wb[gname2].alpha = 0;
    wb[gname2].scaleX = wb[gname2].scaleY = 0.5;
    _this.obj.alpha = 0;
    _this.obj.x = _this.obj.x - 20;
    _this.obj.y = _this.obj.y + 20;
    _this.obj.scaleX = _this.obj.scaleY = 1.1;
    
  },
  _this.start=function(){
    _this.ready();
    cjs.Tween.get(_this.obj).to({
      alpha: 1
    }, 200).call(() => {
      cjs.Tween.get(_this.obj).to({
        x: _this.obj.x + 20,
        y: _this.obj.y - 20,
        scaleX: 1,
        scaleY: 1
      }, 200).call(() => {
        cjs.Tween.get(wb[gname]).to({
          alpha: 1,
          scaleX: 0.8,
          scaleY: 0.8
        }, 600).to({
          alpha: 0,
          scaleX: 1,
          scaleY: 1
        }, 600)
        cjs.Tween.get(wb[gname2]).wait(400).to({
          alpha: 1,
          scaleX: 0.8,
          scaleY: 0.8
        }, 600).to({
          alpha: 0,
          scaleX: 1,
          scaleY: 1
        }, 600).call(()=>{
          cjs.Tween.get(_this.obj).to({
            alpha: 0
          }, 200).wait(1500).call(()=>{
            if (_this.lock) {
               _this.start();
            }
          })
        })
      })
    });
  }
  
  _this.start();
  _this.stop=function(){
    _this.lock=false;
    createjs.Tween.removeTweens(_this.obj);
    createjs.Tween.removeTweens(wb[gname]);
    createjs.Tween.removeTweens(wb[gname2]);
    _this.ready();
  }
}

var empty = function(){

}

