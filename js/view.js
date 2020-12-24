//newNovel2における処理
//ボタンクリック時に色を変える関数
var count = 1;
var colorCount = Array(7); //要素7の配列定義
colorCount.fill(1); //配列を1で初期化

function setColor(btn, color, num) {
  var property = document.getElementById(btn);
  if (colorCount[num] == 0) {

    var repColor = color.replace(",0.4)", " ,1)");
    property.style.backgroundColor = repColor
    colorCount[num] = 1;
  } else {
    property.style.backgroundColor = "#ccc"
    colorCount[num] = 0;
  }
}



//押されたボタンの番号を記録し、配列に格納する関数
var select = []; //1が入っていたcolorCount配列の番号を入力する配列
var colorCode = ["becfff", "b4f7ff", "e0ffb7", "fffc9b", "ffcf91", "ffa394", "feb1da"];

function selectCount() {
  //colorCountの中で1が入っている配列の数と番号をカウントする関数
  var num = 0;
  for (var i = 0; i < 7; i++) { //空の配列に、1が入っていたcolorCount配列の番号を入力
    if (colorCount[i] == 1) {
      select[num] = i;
      console.log(select[num]);
      console.log("#" + colorCode[i]); //番号からカラーコードの読み込み
      num++;
    }
  }
  localStorage.setItem("selectCount", JSON.stringify(select)); //select配列をselectCountとして保存
  // console.log(select.length);
}




//novel1における処理
//novel1でのボタン表示
var sel = [];
var code = [];
var a = 0;

function setColor2() {
  var selectButton = document.getElementsByClassName('select');
  var data = JSON.parse(localStorage.getItem("selectCount")); //前ページから持ち越した配列を読み込む
  var BASE = document.getElementById('markButtun'); //BASEにHTMLからmarkColorを読み込む

  for (var j = 0; j < data.length; j++) { //選択された色の数だけボタンを表示
    var dataNum = data[j];
    code[j] = "#" + colorCode[dataNum];
    a = code[j];
    BASE.insertAdjacentHTML('beforeend', '<button class="sel" type="button" onclick="buttonClick(this)"></button>');
  }

  sel = document.getElementsByClassName(`sel`);
  for (var n = 0; n < sel.length; n++) {
    sel[n].style.backgroundColor = code[n];
  }
}



//buttonColorを置換して、RGBAにする
var buttonColor = 0;
var buttonColorAlpha;

function buttonClick(num) {
  console.log(num);
  buttonColor = num.style.backgroundColor;
  buttonColorAlpha = buttonColor.replace(")", " ,0.4)");
  // console.log(buttonColorAlpha);
}


//線を引いた箇所の背景色を変更
// function blinkBlue() {
//   var sele = document.getSelection();
//   if (!sele.rangeCount) return; //範囲選択されている箇所がない場合は何もせず終了
//
//   var range = sele.getRangeAt(0);
//   var newNode = document.createElement('span');
//   newNode.style.backgroundColor = buttonColorAlpha;
//   // newNode.setAttribute('style', 'background-color: buttonColor'); //範囲選択箇所の背景を青にする
//   var seleString = sele.toString();
//   // newNode.innerHTML = sele.toString();
//   // newNode.innerHTML = seleString.toString();
//
//   var b = seleString.search('　'); //文字列内のスペースを判別
//   if (b != -1 && b != 0) { //スペースがあった場合、そのひとつ前に改行記号を入れる
//     var c = strIns(seleString, b, '<br>');
//   } else { //スペースがなかった場合、受け取った文字列をそのまま返す
//     c = seleString;
//   }
//
//   newNode.innerHTML = c; //newNodeに改行記号を入れた文字列を代入
//   range.deleteContents(); // 範囲選択箇所を一旦削除
//   range.insertNode(newNode); // 範囲選択箇所の先頭から、修飾したspanを挿入
//
//   // console.log(document.getElementById("text"));
//   // console.log(c);
// }
// window.addEventListener('mouseup', blinkBlue, false); //マウスのボタンを離した時関数が実行





//選択範囲にスペースがあった時にbrタグを挿入する関数
function strIns(str, idx, val) {
  var res = str.slice(0, idx) + val + str.slice(idx);
  return res;
}



//選択範囲を配列に入れる
var SelectStr = [];
var n = 0;
// var text = document.getElementById('commentText');
// var textDiv = document.getElementById('commentArea');

function CountSelectedChars() {
  var SelStr = document.getSelection().toString();
  //文章チェック 空白や改行は除外
  if (SelStr !== '' && SelStr !== '\n') {
    SelectStr[n] = new Array(5);
    SelectStr[n][0] = SelStr;
    SelectStr[n][1] = buttonColorAlpha;
    SelectStr[n][2] = "";
    SelectStr[n][3] = "fe";
    SelectStr[n][4] = 10;
    // window.addEventListener('mouseup', commentBox);
    // console.log(SelStr);
    // console.log(n + SelectStr[n][2] + SelectStr[n][3] + SelectStr[n][1]);
    n++;

    //   //選択範囲と、その中心座標の取得
    //   const pos = window.getSelection().getRangeAt(0).getBoundingClientRect()
    //   const positionX = (pos.right - pos.left) / 2 + pos.left - 200;
    //   const positionY = pos.top - 50;
    //   console.log(positionX, pos.top);
    //
    //   //範囲選択を行った後、テキストボックスが追随する
    //   text.style.position = 'absolute';
    //   text.style.top = positionY + window.pageYOffset + "px";
    //   text.style.left = positionX + "px";
    //   text.insertAdjacentHTML('beforeend', '<textarea name="example" id ="textBoxId" class="textBox" placeholder="コメントを入力"></textarea>');
    //   text.insertAdjacentHTML('beforeend', '<button class="textBox" onclick="getComment()">送信</button>');
    // }
    // //送信ボタンを押した際にテキストボックスの中を削除
    // if (text != '') {
    //   document.addEventListener('mouseup', (e) => {
    //     if (!e.target.closest('.textBox')) {
    //       text.innerHTML = '';
    //     }
    //   })

  }

  localStorage.setItem("SelectString", JSON.stringify(SelectStr)); //select配列をselectCountとして保存
}
window.addEventListener('mouseup', CountSelectedChars);


//コメントボックス以外の部分をクリックした時に、ボックスが消える
function getComment() {
  var a = document.getElementById("textBoxId").value;
  var textString = JSON.parse(localStorage.getItem("SelectString"));
  textString[textString.length - 1][2] = a;
  console.log(textString[textString.length - 1][2]);
  textBoxId.value = '';
}



// function comDisplay(){
// var tex = viewString[viewString.length - 1][2]
// var viewCommentArea = document.getElementById("markButtun");
// viewCommentArea.insertAdjacentHTML('beforeend', '<div class = "commentadd">' +
//   "<p>" + viewString[viewString.length - 1][0] + "</p>" + "<p>" + tex + "</p>" + '</div>');
//
// var add = document.getElementsByClassName("commentadd");
// add[add.length - 1].style.backgroundColor = viewString[viewString.length - 1][1];
//
// }







//novel1
//前ページで押されたボタンの数だけボタンを表示、その押されたボタンと同じ色のボタンを表示
function setColor3() {
  var selectButton = document.getElementsByClassName('select');
  // var num = 0;
  var data = JSON.parse(localStorage.getItem("selectCount")); //前ページから持ち越した配列を読み込む
  var BASE = document.getElementById('markColor'); //BASEにHTMLからmarkColorを読み込む
  var code = [];

  for (var j = 0; j < data.length; j++) { //選択された色の数だけボタンを表示
    var dataNum = data[j];
    code[j] = "#" + colorCode[dataNum];
    BASE.insertAdjacentHTML('beforeend', '<button class="sel" type="button"></button>');
  }

  var sel = document.getElementsByClassName(`sel`);
  for (var n = 0; n < sel.length; n++) {
    sel[n].style.backgroundColor = code[n];
    console.log(code);
  }
  console.log(data.length);
}





//配列の読み込み
function resultColor() {
  var resultStr = JSON.parse(localStorage.getItem("SelectString"));
}

//text内の文章のバックアップ
var backupOriginal = "";
var backupSecond = "";

function backup() {
  backupOriginal = document.getElementById("text").innerHTML;
  backupSecond = document.getElementById("text").innerHTML;
  console.log(backupOriginal);
  console.log(backupSecond);
}


//元のHTMLソースを保持しておく変数
var backupOriginal = "";
//文字列を検索してハイライト用要素を加える処理
function replacer(str, word, att) {
  var SearchString = '(' + word + ')'; //特定の文字列を()に入れる
  var RegularExp = new RegExp(SearchString, "g"); //SearchStringで得た文字列を全てから検索 gは全文検索のフラグ
  var ReplaceString = '<span style = "background-color:' + att + ';">$1</span>'; //spanタグ内に background-color:#色 を入れる
  var ResString = str.replace(RegularExp, ReplaceString); //第一引数を第二引数に置換
  return ResString;
}

// ハイライトを加える処理
function addhighlight() {
  // backupOriginal = document.getElementById("text").innerHTML; //指定された要素の中身を丸ごと取得して、変数backupOriginalに格納
  var resultStr = JSON.parse(localStorage.getItem("SelectString")); //前ページから持ち越した配列を読み込む
  var forShow = backupOriginal; //forShowにコピー

  for (var i = 0; i < resultStr.length; i++) {
    forShow = replacer(forShow, resultStr[i][0], resultStr[i][1]);
  }

  document.getElementById("text").innerHTML = forShow; //変数forShowの内容を、textに代入 ここで文章の内容が置き換わる
  // console.log(text);
  // console.log(backupOriginal);
}


// ハイライトを消す処理
function clearhighlight() {
  // backupOriginal = backupSecond;
  document.getElementById("text").innerHTML = backupOriginal; // バックアップから書き戻す
  backupOriginal = ""; // バックアップを消す
}


var highlightCount = 0;
// ハイライトを加えるか消すかを判断
function highlightcheck() {
  console.log(backupSecond);
  if (highlightCount == 1) {
    // 何もバックアップされていなければ（未ハイライトなので）ハイライトを加える
    addhighlight();
    highlightCount = 0;
  } else if (highlightCount == 0) {
    // 何かバックアップされていれば（ハイライト済みなので）ハイライトを消す
    clearhighlight();
    highlightCount = 1;
    backupOriginal = backupSecond;
  }
}









//以下作者画面における処理


var viewString = [
  ["全ての夏は麗しかった。後悔の無い夏なんてなかった。いつも何かをやり残して、いつも誰かと会い損ねた。", "rgba(255, 207, 145, 0.4)", "わかる", "fe", "10", "4"],
  ["誰もいない深夜の公園、数本の線香花火とライターだけを持って、街灯が落とす光の真ん中にしゃがみ込んだ。", "rgba(254, 177, 218, 0.4)", "情景が想像できて良い", "fe", "10", "6"],
  ["ぽとり、落ちた火の花は、その生を終えて沈黙する。", "rgba(255, 252, 155, 0.4)", "", "fe", "10", "3"],
  ["来年も来るはずの夏を、信じ切れないのはなぜだろう。どうしてもう終わってしまった夏に、これほどまでに後悔に襲われながら執着してしまうのか。", "rgba(255, 163, 148, 0.4)", "この部分にとても共感した。", "fe", "10", "5"],
  ["今年は何一つ成し遂げなかった、ただ部屋の窓から強い日差しを眺めるだけの数か月だった。", "rgba(255, 252, 155, 0.4)", "今年の夏を思い出しました。色々やりたいことがあったのに何も出来ない夏でしたね。", "fe", "10", "3"],
  ["やり残した後悔全てを、その煙に乗せて来年の夏へと送ってやるのだ。", "rgba(254, 177, 218, 0.4)", "表現がすごく好きです。悔しさや悲しさが込められていると感じました。", "fe", "10", "6"],
  ["あの頃はこの日が一等惜しくて仕方なかった。", "rgba(180, 247, 255, 0.4)", "情景は察せられるけど、もう少し詳細な表現があれば良いと思います。", "fe", "10", "1"],
["────夏は死んだ。正確には、今から死ぬ。", "rgba(255, 207, 145, 0.4)", "", "fe", "10", "4"],
["環境が変わる前最後のこの夏に、思い出にと足を運んでみたかったという淡い思いを、少し、ほんの少しだけ抱いていた。", "rgba(190, 207, 255, 0.4)", "少々読みづらさがありました。一文を分けても良いかと思います。", "fe", "10", "0"],
["火をつけた最後の一本が、鮮やかな火花を散らしながら今夏を見送っている。", "rgba(255, 252, 155, 0.4)", "花火を用いることで、物悲しさが際立っているなと感じました", "fe", "10", "3"],
["日が短くなった。夜の空気に冷たさを感じるようになった。薄着で外に出ることが叶わなくなった。夏の終わりの、匂いがした。", "rgba(255, 163, 148, 0.4)", "夏の終わりの空気感を思い出した", "fe", "10", "5"],
  // ["全ての夏は麗しかった。後悔の無い夏なんてなかった。いつも何かをやり残して、いつも誰かと会い損ねた。", "rgba(254, 177, 218, 0.4)", "わかる", "fe", "10", "6"],
  // ["火をつけた最後の一本が、鮮やかな火花を散らしながら今夏を見送っている。", "rgba(254, 177, 218, 0.4)", "情景が想像できて良い", "fe", "10", "6"],
  // ["ぽとり、落ちた火の花は、その生を終えて沈黙する。", "rgba(255, 252, 155, 0.4)", "", "fe", "10", "3"],
  // ["精一杯の抵抗として、線香花火に火をつけて、夏の終わりを弔う。", "rgba(255, 163, 148, 0.4)", "言い回しが好き", "fe", "10", "5"],
  // ["────夏は死んだ。正確には、今から死ぬ。", "rgba(255, 252, 155, 0.4)", "", "fe", "10", "3"],
  // ["日が短くなった。夜の空気に冷たさを感じるようになった。薄着で外に出ることが叶わなくなった。夏の終わりの、匂いがした。", "rgba(254, 177, 218, 0.4)", "", "fe", "10", "6"],
  // ["来年も来るはずの夏を、信じ切れないのはなぜだろう。", "rgba(255, 252, 155, 0.4)", "", "fe", "10", "3"],
  // ["来年も来るはずの夏を、信じ切れないのはなぜだろう。", "rgba(255, 252, 155, 0.4)", "", "fe", "10", "3"],
];

var viewString2 = [

  "全ての夏は麗しかった。後悔の無い夏なんてなかった。いつも何かをやり残して、いつも誰かと会い損ねた。",
  "誰もいない深夜の公園、数本の線香花火とライターだけを持って、街灯が落とす光の真ん中にしゃがみ込んだ。",
  "ぽとり、落ちた火の花は、その生を終えて沈黙する。",
  "来年も来るはずの夏を、信じ切れないのはなぜだろう。どうしてもう終わってしまった夏に、これほどまでに後悔に襲われながら執着してしまうのか。",
  "今年は何一つ成し遂げなかった、ただ部屋の窓から強い日差しを眺めるだけの数か月だった。",
  "やり残した後悔全てを、その煙に乗せて来年の夏へと送ってやるのだ。",
  "あの頃はこの日が一等惜しくて仕方なかった。",
"────夏は死んだ。正確には、今から死ぬ。",
"環境が変わる前最後のこの夏に、思い出にと足を運んでみたかったという淡い思いを、少し、ほんの少しだけ抱いていた。",
"火をつけた最後の一本が、鮮やかな火花を散らしながら今夏を見送っている。",
"日が短くなった。夜の空気に冷たさを感じるようになった。薄着で外に出ることが叶わなくなった。夏の終わりの、匂いがした。",
  // "全ての夏は麗しかった。後悔の無い夏なんてなかった。",
  // "火をつけた最後の一本が、鮮やかな火花を散らしながら今夏を見送っている。",
  // "────夏は死んだ。正確には、今から死ぬ。",
  // "精一杯の抵抗として、線香花火に火をつけて、夏の終わりを弔う。",
  // "────夏は死んだ。正確には、今から死ぬ。",
  // "日が短くなった。夜の空気に冷たさを感じるようになった。薄着で外に出ることが叶わなくなった。夏の終わりの、匂いがした。",
  // "来年も来るはずの夏を、信じ切れないのはなぜだろう。",
  // "来年も来るはずの夏を、信じ切れないのはなぜだろう。",
];


var viewStringCopy = viewString.slice(); //viewStringのコピーを作成
var viewColorCount = Array(7);
viewColorCount.fill(1);

//カラーボタンを押した時の処理
function viewSetColor(btn, color, num) {
  var property = document.getElementById(btn);

  //押されたボタンのハイライトを引き直す
  if (viewColorCount[num] == 0) {
    var repColor = color.replace(", 0.4)", " , 1)");
    property.style.backgroundColor = repColor;
    viewColorCount[num] = 1;

    for (var i = 0; i < viewString.length; i++) {
      if (viewString[i][5] === num) {
        viewStringCopy.push(viewString[i]);
      }
    }

    console.log(viewStringCopy.length);

    var forShow = viewBackupOriginal;
    for (var j = 0; j < viewStringCopy.length; j++) {
      forShow = replacer(forShow, viewStringCopy[j][0], viewStringCopy[j][1]);
    }

    document.getElementById("text").innerHTML = forShow;
  } else {
    property.style.backgroundColor = "#ccc"
    viewColorCount[num] = 0;

    //押されたボタンと同じ色を削除したviewStringCopyを作成
    for (var i = 0; i < viewStringCopy.length; i++) {
      console.log(viewStringCopy[i][5] === num);
      if (viewStringCopy[i][5] === num) {
        viewStringCopy.splice(i, 1);
        i--;
      }
    }

    //直前に作られたviewStringCopyを基にハイライトを引き直す
    var forShow = viewBackupOriginal;
    for (var j = 0; j < viewStringCopy.length; j++) {
      forShow = replacer(forShow, viewStringCopy[j][0], viewStringCopy[j][1]);
    }

    document.getElementById("text").innerHTML = forShow;
    console.log(viewStringCopy.length);
    // console.log(viewStringCopy[0][0]);
  }
}






function viewButtonClick(num) {
  console.log(num);
  var viewButtonColor = num.style.backgroundColor;
  var viewColorAlpha = viewButtonColor.replace(")", " ,0.4)");
  console.log(viewColorAlpha);
}


// 元のHTMLソースを保持しておく変数
// var backupOriginal = "";
// 文字列を検索してハイライト用要素を加える処理
function viewReplacer(str, word, att) {
  var viewSearchString = '(' + word + ')'; //特定の文字列を()に入れる
  var viewRegularExp = new RegExp(viewSearchString, "g"); //SearchStringで得た文字列を全てから検索 gは全文検索のフラグ
  var viewReplaceString = '<span style = "background-color:' + att + ';">$1</span>'; //spanタグ内に background-color:#色 を入れる
  var viewResString = str.replace(viewRegularExp, viewReplaceString); //第一引数を第二引数に置換
  return viewResString;
}


//text内の文章のバックアップ
var viewBackupOriginal = "";
var viewBackupSecond = "";

function viewBackup() {
  viewBackupOriginal = document.getElementById("text").innerHTML;
  viewBackupSecond = document.getElementById("text").innerHTML;

    localStorage.setItem("viewStringJS", JSON.stringify(viewString));
  // console.log(viewBackupOriginal);
  // console.log(viewBackupSecond);

  // }
  //
  //
  // // ハイライトを加える処理
  // function viewAddhighlight() {
  //   // backupOriginal = document.getElementById("text").innerHTML; //指定された要素の中身を丸ごと取得して、変数backupOriginalに格納
  //   // var viewResultStr = JSON.parse(localStorage.getItem("SelectString")); //前ページから持ち越した配列を読み込む
  var viewForShow = viewBackupOriginal; //forShowにコピー

  for (var i = 0; i < viewString.length; i++) {
    viewForShow = replacer(viewForShow, viewString[i][0], viewString[i][1]);
    console.log(viewForShow);

    //右カラムに追加したコメントを表示
    var tex = viewString[i][2]
    var viewCommentArea = document.getElementById("markButtun");
    viewCommentArea.insertAdjacentHTML('beforeend', '<div class = "commentadd" onclick="commentHighLight(this)">' + "<p>" + viewString[i][0] + "</p>" + tex + '</div>');

    var add = document.getElementsByClassName("commentadd");
    add[i].style.backgroundColor = viewString[i][1];

  }
  document.getElementById("text").innerHTML = viewForShow; //変数forShowの内容を、textに代入 ここで文章の内容が置き換わる
  // console.log(text);
  // console.log(backupOriginal);
}

// var k;
// function item(event) {
//   var ul = event.target.parentNode;
//   var li = ul.querySelectorAll("div");
//  k = Array.prototype.indexOf.call(li, event.target);
//     console.log(k);
// }
//



//右カラムのコメントをクリックした時の動作
function commentHighLight(ele) {
  // var resultStr = JSON.parse(localStorage.getItem("SelectString"));
  var viewStringCopy2 = JSON.parse(localStorage.getItem("viewStringJS"));
    var viewForShow2 = viewBackupOriginal;
    // console.log(viewStringCopy2);
  // hLight = ele.style.backgroundColor;
//   var add = document.getElementsByClassName("commentadd");
// var k = ele.target;
var p = ele.getElementsByTagName('p');
var pa = p[0].textContent;
// var i = add[0].textContent;
// var s = p.textContent;
var number = "";

number = viewString2.indexOf(pa);

var viewButtonColor2 = viewStringCopy2[number][1];
var viewColorAlpha2 = viewButtonColor2.replace(", 0.4)", ", 1)");
viewStringCopy2[number][1] = viewColorAlpha2;

for (var i = 0; i < viewStringCopy2.length; i++) {
  viewForShow2 = replacer(viewForShow2, viewStringCopy2[i][0], viewStringCopy2[i][1]);
  // console.log(viewString[i][1]);
}
document.getElementById("text").innerHTML = viewForShow2;

console.log(pa);
// console.log(viewString[number][1]);
console.log(viewStringCopy);
}





// ハイライトを消す処理
function viewClearhighlight() {
  // backupOriginal = backupSecond;
  document.getElementById("text").innerHTML = viewBackupOriginal; // バックアップから書き戻す
  viewBackupOriginal = ""; // バックアップを消す
}


var viewHighlightCount = 0;
// ハイライトを加えるか消すかを判断
function viewHighlightcheck() {
  // console.log(viewBackupSecond);

  if (viewHighlightCount == 1) {
    // 何もバックアップされていなければ（未ハイライトなので）ハイライトを加える
    viewBackup();
    viewHighlightCount = 0;
  } else if (viewHighlightCount == 0) {
    // 何かバックアップされていれば（ハイライト済みなので）ハイライトを消す
    viewClearhighlight();
    viewHighlightCount = 1;
    viewBackupOriginal = viewBackupSecond;
  }
}
