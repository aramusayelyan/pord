
    function openWindow(){
      var unknown = document.getElementById("unknown").value;
      if (unknown == "road"){
          window.open("Ճանապարհ.html","_blank");
      }
      if (unknown == "speed"){
          window.open("Արագություն.html","_blank");
      }
      if (unknown == "time"){
          window.open("Ժամանակ.html","_blank");
      }
      if (unknown == "t1"){
        window.open("Ժամանակ1.html","_blank");
      }
      if (unknown == "t"){
          window.open("t.html","_blank");
      }
      if (unknown == "a"){
          window.open("Արագացում.html","_blank");
      }
      if (unknown == "I"){
          window.open("Հոսանք.html","_blank");
      }
      if (unknown == "q"){
        window.open("լիցք.html","_blank");
    }
    if (unknown == "u"){
      window.open("լարում.html","_blank");
  }
  if (unknown == "sped"){
    window.open("v.html","_blank");
  }
  if (unknown == "v1"){
    window.open("Արագություն 1.html","_blank");
  }
  if (unknown == "v2"){
    window.open("Արագություն2.html","_blank");
  }
  if (unknown == "m"){
    window.open("m.html","_blank");
  }
  if (unknown == "m1"){
    window.open("Զանգաված1.html","_blank");
  }
  if (unknown == "m2"){
    window.open("Զանգված2.html","_blank");
  }
  if (unknown == "m3"){
    window.open("Զանգված3.html","_blank");
  }
      
  }
  function calculate() {
      var unknown = document.getElementById("unknown").value;
      var unknown1 = document.getElementById("unknown1").value;
      var unknown2 = document.getElementById("unknown2").value;
      var known1 = document.getElementById("known1").value;
      var known2 = document.getElementById("known2").value;
      if (unknown == "road") {
        if (unknown1 == "km"){
          var known1 = known1 * 0.277777778
        }
        if (unknown2 == "J"){
          var known2 = known2 * 3600
        }
        if (known1 && known2) {
          var speed = known1;
          var time = known2;
          var road = speed * time;
          alert("Ճանապարհ = " + road);
        } else {
          alert("Խնդրում եմ լրացրեք 2 վանդակները");
        }
      } else if (unknown == "speed") {
        if (unknown1 == "km"){
          var known1 = known1 / 1000
        }
        if (unknown2 == "J"){
          var known2 = known2 * 3600
        }
        if (known1 && known2) {
          var road = known1;
          var time = known2;
          var speed = road / time;
          alert("Արագություն = " + speed);
        } else {
          alert("Խնդրում եմ լրացրեք 2 վանդակները");
        }
      } else if (unknown == "time") {
        if (unknown1 == "km"){
          var known1 = known1 * 1000
        }
        if (unknown2 == "J"){
          var known2 = known2 / 3.6
        }
        if (known1 && known2) {
          var road = known1;
          var speed = known2;
          var time = road / speed;
          alert("Ժամանակ = " + time);
        } else {
          alert("Խնդրում եմ լրացրեք 2 վանդակները");
        }
      } else if (unknown == "a") {
        if (unknown1 == "km"){
          var known2 = known2 * 1000
        }
        if (unknown2 == "J"){
          var known1 = known1 * 3600
        }
          if (known1 && known2) {
            var speed = known1;
            var time = known2;
            var a = speed / time;
            alert("Արագացում = " + a);
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
          }
        } else if (unknown == "I") {
          if (known1 && known2) {
            var q = known1;
            var T = known2;
            var I = q / T;
            alert("Հոսանք = " + I);
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
          }
        } else if (unknown == "t1") {
          if (known1 && known2) {
            var q = known1;
            var I = known2;
            var t1 = q / I;
            alert("Ժամանակ = " + t1);
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
          }
        } else if (unknown == "q") {
          if (known1 && known2) {
            var t = known1;
            var I = known2;
            var q = t * I;
            alert("Լիցք = " + q);
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
          }
        } else if (unknown == "u") {
          if (known1 && known2) {
            var A = known1;
            var q = known2;
            var u = A * q;
            alert("Լարում = " + u);
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
          }
        } else if (unknown == "v1") {
          if (unknown1 == "km"){
            var known1 = known1 / 1000
          }
          if (unknown2 == "J"){
            var known2 = known2 * 3600
          }
          if (known1 && known2) {
            var a = known1;
            var t = known2;
            var v1 = a * t;
            alert("Արագություն = " + v1);
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
          }
        }  else if (unknown == "v2") {
          if (known1 && known2) {
            var E = known1;
            var m = known2;
            var v2 = Math.sqrt( 2*E / m);
            alert("Արագություն = " + v2);
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
          }
        } else if (unknown == "m1") {
          if (known1 && known2) {
            var f = known1;
            var a = known2;
            var m1 =  f / a;
            alert("Զանգված = " +m1 );
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
          }
        } else if (unknown == "m2") {
          if (known1 && known2) {
            var E = known1;
            var v = known2;
            var m2 =  2*E / v**2;
            alert("Զանգված = " +m2 );
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
          }
        }else if (unknown == "m3") {
          if (known1 && known2) {
            var v = known1;
            var R = known2;
            var m3 = R* v;
            alert("Զանգված = " +m3 );
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
          }
        }else if (unknown == "m3") {
          if (known1 && known2) {
            var v = known1;
            var R = known2;
            var m3 = R* v;
            alert("Զանգված = " +m3 );
          } else {
            alert("Խնդրում եմ լրացրեք 2 վանդակները");
          }
        }
    }


