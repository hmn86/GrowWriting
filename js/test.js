//実用には、以下のスクリプトをEventListenerに登録して、何かしらのイベント時に動くようにする必要がある。
// 選択範囲の背景を青くする

// 保守
// function blinkBlue() {
//   var sele = window.getSelection();
//   if (!sele.rangeCount) return; //範囲選択されている箇所がない場合は何もせず終了
//
//   var range = sele.getRangeAt(0);
//   var newNode = document.createElement('span');
//   newNode.setAttribute('style', 'background-color: rgb(0,120, 120, 0.2)'); //範囲選択箇所の背景を青にする
//   newNode.innerHTML = sele.toString();
//   range.deleteContents(); // 範囲選択箇所を一旦削除
//   range.insertNode(newNode); // 範囲選択箇所の先頭から、修飾したspanを挿入
// }
// window.addEventListener('mouseup', blinkBlue);

function blinkBlue() {
  var sele = window.getSelection();
  if (!sele.rangeCount) return; //範囲選択されている箇所がない場合は何もせず終了

  var range = sele.getRangeAt(0);
  var newNode = document.createElement('span');
  newNode.setAttribute('style', 'background-color: rgb(0,120, 120, 0.2)'); //範囲選択箇所の背景を青にする
  newNode.innerHTML = sele.toString();
  range.deleteContents(); // 範囲選択箇所を一旦削除
  range.insertNode(newNode); // 範囲選択箇所の先頭から、修飾したspanを挿入
}
window.addEventListener('mouseup', blinkBlue);



//選択範囲を配列に入れる
var SlectStr = [];
var n = 0;

function CountSelectedChars() {
  var SelStr = document.getSelection().toString();
  if (SelStr !== '' && SelStr !== '\n') { //文章チェック 空白や改行は除外
    SlectStr[n] = SelStr;
    console.log(SelStr);
    console.log(n + SlectStr[n]);
    n++;
  }
}
window.addEventListener('mouseup', CountSelectedChars);



// function CountSelectedChars() {
//   var SelStr = document.getSelection();
//   // var SelStr = window.getEelementByID('text').getSelection();
//   // var Msg = "選択中の文字数は、 " + String(SelStr).length + "文字です。";
//   // document.getElementById('resultArea').innerHTML = Msg;
//
//   if (SelStr !== '' && SelStr !== '\n') { //文章チェック
//     SlectStr[n] = String(SelStr);
//     console.log(String(SelStr));
//     console.log(n + SlectStr[n]);
//     n++;
//   }
// }
//
// window.addEventListener('mouseup', CountSelectedChars);




// $('body').on('mouseup', function(e){  //mouseupでイベント発火
//   var selectedStr;
//   if(window.getSelection){  //selectionオブジェクト取得
//     selectedStr = window.getSelection().toString();  //文章取得
//     if(selectedStr !== '' && selectedStr !== '\n'){  //文章チェック
//       console.log(selectedStr);
//     }
//   }
// });
