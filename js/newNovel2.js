//ボタンクリック時に色を変える関数
// var count = 1;
var colorCount = Array(7); //要素7の配列定義
colorCount.fill(1);//配列を1で初期化

function setColor(btn, color, num) {
  var property = document.getElementById(btn);
  if (colorCount[num] == 0) {
    property.style.backgroundColor = color
    colorCount[num] = 1;
  } else {
    property.style.backgroundColor = "#ccc"
    colorCount[num] = 0;
  }
}


//押されたボタンの番号を記録し、配列に格納する関数
var select = [];//1が入っていたcolorCount配列の番号を入力する配列
var colorCode = ["becfff", "b4f7ff", "e0ffb7", "fffc9b", "ffcf91", "ffa394", "feb1da"];

function selectCount() {
  //colorCountの中で1が入っている配列の数と番号をカウントする関数
  var num = 0;
  for (var i = 0; i < 7; i++) {//空の配列に、1が入っていたcolorCount配列の番号を入力
    if (colorCount[i] == 1) {
      select[num] = i;
      console.log(select[num]);
      console.log("#" + colorCode[i]); //番号からカラーコードの読み込み
      num++;
    }
  }
  localStorage.setItem("selectCount", JSON.stringify(select)); //select配列をselectCountとして保存
  console.log(select.length);
}


//novel1でのボタン表示
function setColor2() {
  var selectButton = document.getElementsByClassName('select');
  // var num = 0;
  var data = JSON.parse(localStorage.getItem("selectCount")); //前ページから持ち越した配列を読み込む
  var BASE = document.getElementById('markButtun'); //BASEにHTMLからmarkColorを読み込む
  var code = [];

  for (var j = 0; j < data.length; j++) { //選択された色の数だけボタンを表示
    var dataNum = data[j];
    code[j] = "#" + colorCode[dataNum];
    BASE.insertAdjacentHTML('beforeend', '<button class="sel" type="button" onclick="buttunClick()"></button>');
  }

  var sel = document.getElementsByClassName(`sel`);
  for (var n = 0; n < sel.length; n++) {
    sel[n].style.backgroundColor = code[n];
    console.log(code);
  }
  console.log(data.length);
}


var plusCount = [];
var clickCount = 0;
function buttunClick(){
clickCount++;
  console.log(clickCount);
  // console.log(number);
}





//前ページで押されたボタンの数だけボタンを表示、その押されたボタンと同じ色のボタンを表示
function setColor3() {
  var selectButton = document.getElementsByClassName('select');
  // var num = 0;
  var data = JSON.parse(localStorage.getItem("selectCount")); //前ページから持ち越した配列を読み込む
  var BASE = document.getElementById('markColor'); //BASEにHTMLからmarkColorを読み込む
  var code = [];

  for (var j = 0; j < data.length; j++) { //選択された色の数だけボタンを表示
    // var code = [];
    var dataNum = data[j];

    // property.style.backgroundColor = "#" + colorCode[num];
    code[j] = "#" + colorCode[dataNum];
    BASE.insertAdjacentHTML('beforeend', '<button class="sel" type="button"></button>');
  }

  var sel = document.getElementsByClassName(`sel`);
  for (var n = 0; n < sel.length; n++) {
    sel[n].style.backgroundColor = code[n];
    // document.getElementsByClassName(`sel${j}`).style.backgroundColor = code;
    console.log(code);
  }

  console.log(data.length);
  // console.log(select.length);
  // console.log(selectButtun[0]);
}




// function setColor2() {
//   // var selectButtun = document.getElementsByClassName('select');
//   // var num = 0;
//   // var BASE = document.getElementById('markColor');
//   // for (var j = 0; j < select.h; j++) {
//   //   BASE.insertAdjacentHTML('beforeend', '<button class="select" type="button"></button>');
//   //   // num = select[j];
//   //   // property.style.backgroundColor = "#" + colorCode[num];
//   // }
//   // var data = sessionStorage.getItem('selectCount');
//   var data = JSON.parse(localStorage.getItem("selectCount"));
//
//   console.log(data.length);
//   // console.log(select.length);
//   // console.log(selectButtun[0]);
// }
