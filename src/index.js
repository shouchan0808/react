import "./styles.css";
// 変数の宣言

// const 定数。変更できない
const myName = "岡田";
// const yourName = "田中";

// myName = "岡田丸"; 再代入エラー

// let 再代入できる。再宣言できない。
let yourName = "田中";
yourName = "田中丸"; //エラーなし
// let yourName = "田中君"; 再宣言エラー

// var 再代入も再宣言もできる。　今後使うことないと思ってOK
var someName = "佐藤";
someName = "佐藤丸"; // エラーなし
var someName = "佐藤君"; // エラーなし

// 関数の宣言、実行(アロー関数の記法)
// 特定の処理をまとめて何度でも呼び出せるようにしておくのが関数

// 関数の定義
function sayHello() {
  console.log("こんにちわ");
}

// 関数の実行
sayHello();

// 関数の定義
function calcSum(num1, num2) {
  return num1 + num2;
}

// 関数の実行
const calclatedNum = calcSum(1, 3);
console.log(calclatedNum);

// アロー関数
// 従来の関数定義はfunctionを用いていたが現在はアロー関数が主流
// =>が矢印のようにみえるのでアロー
// いくつか特徴がある

// 従来の方法
// function(引数)　{
//   処理内容
// }

// アロー関数
// (引数) => {
//   処理内容
// }

const func1 = function (name) {
  return `${name}です！`;
};
const func2 = (name) => {
  return `${name}です！`;
};

console.log(func1("テッくん"));
console.log(func2("岡田"));

// アロー関数の特徴
// 引数が1つの時はカッコを省略できる
const func3 = (name) => {
  return `${name}です！`;
};
console.log(func3("岡田"));

// 引数が2つ以上だとエラーになるので注意
// const func4 = name, age => {
//   return `${name}です！`;
// }
// console.log(func4("岡田"));

// 2つ以上の時はカッコでかこむ
const func4 = (name, age) => {
  return `${name}です！` + `${age}歳です`;
};
console.log(func4("岡田", 33));

// アロー関数の特徴2
// 処理が1行で終わり時は{}とreturnを省略できる
// const func5 = (name) => {
//   return `${name}です！`;
// }
// console.log(func5("岡田"));
//　↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const func5 = (name) => `${name}です！`;
console.log(func5("岡田"));

// かっこで囲むことで1塊として認識させることも可能
const func6 = () => ({
  name: "テッくん",
  age: 40
});
console.log(func6());

// 四則演算(+-*/)
// + 足し算
// - 引き算
// * 掛け算
// / 割り算
// % 割ったあまり
// ++ 1を足す　＊評価順に注意
// -- 1を引く　＊評価順に注意

const num1 = 1 + 2;
console.log(num1);

const num2 = 3 - 1;
console.log(num2);

const num3 = 3 * 4;
console.log(num3);

const num4 = 12 / 2;
console.log(num4);

const num5 = 10 % 3;
console.log(num5);

let num6 = 10;
console.log(++num6); // 11
console.log(num6++); // 11
console.log(num6); //12

let num7 = 10;
console.log(--num7); // 9
console.log(num7--); // 9
console.log(num7); // 8

// 比較演算(==と===、!=と!==の違いを確認)

// == ===
// 同じかどうかを比較
// ===が厳密比較。こっちを使う
console.log("厳密比較");
const hikaku = 1;
const str = "1";

console.log(hikaku == str); // true
console.log(hikaku === str); // false

// != !==
// 異なるかどうかを比較
// !== が厳密比較。こっちを使う
console.log("!==厳密比較");
const hikaku2 = 1;
const str2 = "1";

console.log(hikaku2 != str2); // false
console.log(hikaku2 !== str2); // true

// > >= < <=
// 大小比較
console.log("大小比較");
const hikaku3 = 3;
console.log(hikaku3 > 3); // false
console.log(hikaku3 >= 3); // true
console.log(hikaku3 < 3); // false
console.log(hikaku3 <= 3); // true

// 論理演算(&& || ! ?:)
// && if文の場合左右どちらもtrueなら(かつ)
// || if文の場合左右どちらかtrueなら(または)
// 正確な意味は
// && 左辺がtrue判定なら右辺を返す
// || 左辺がfalse判定なら右辺を返す

const trueFlag = true;
const falseFlag = false;
if (trueFlag && falseFlag) {
  // ここは実行されない
}
if (trueFlag || falseFlag) {
  // ここは実行される
}

// コンソールが表示されるのはAとD
trueFlag && console.log("A");
falseFlag && console.log("B");
trueFlag || console.log("C");
falseFlag || console.log("D");

// ! 評価結果を反転する
if (!falseFlag) {
  // ここは実行される
}
// A?B:C
// 三項演算子
// Aがtrue判定ならBを、false判定ならCを返却する
const result1 = trueFlag ? "trueです" : "flaseです";
console.log(result1);
const result2 = falseFlag ? "trueです" : "flaseです";
console.log(result2);

// switch文
// ある変数の値に応じて処理を分岐する
// caseに一致するものが実行される
// defaultは一致しない場合の処理を書く
// breakがないと判定が続くので注意

const c = "C";

switch (c) {
  case "A":
    console.log("A");
  case "B":
    console.log("B");
  case "C":
    console.log("C");
    break;
  default:
    console.log("その他です");
    break;
}

// テンプレート文字列
// Javascriptでの文字列基本は
// "" ダブルクォーテーション
// '' シングルクォーテーション
// どちらも違いはない
// ES6でテンプレート文字列が追加された
// 文字列内での変数展開が楽になる
// ``バッククウォートで囲む
// ``内では${}で囲んだ中は文字列ではなくJavascriptとして認識される

// 従来の文字列と変数の結合方法
const templeatName = "てっくん";
const templeatAge = 40;

const sentence = templeatName + "は" + templeatAge + "歳です";
console.log(sentence);

// テンプレート文字列を用いた方法
console.log("テンプレート文字列を用いた方法");
const sentence2 = `${templeatName}は${templeatAge}です！`;
console.log(sentence2);
