const quiz = [
  {
   question: "ゲーム市場、最も売れたゲーム機は次の内どれ？",
   answers: [
    "スーパーファミコン",
    "プレイステーション2",
    "ニンテンドースイッチ",
    "ニンテンドーDS"
    ],
  correct: "ニンテンドーDS"

},{
  question: "任天堂はもともと何を発売した会社だった？",
  answers: [ 
    "花札",
    "麻雀牌",
    "凧",
    "おはじき"
    ],
  correct: "花札"
},{
  question: "任天堂の本社がある都市はどこ？",
  answers: [ 
    "名古屋市",
    "横浜市",
    "京都市",
    "大阪市"
    ],
  correct: "京都市"
}
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
//$マークを使うと、HTMLのオブジェクトが入っているとわかる

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
  //ここに命令
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
//定義した定数を呼ばないと反映されない
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
}else{
  window.alert("不正解！");  
  }

quizIndex++;

if(quizIndex < quizLength){
  //問題数がまだあればこちらを続行
  setupQuiz ();
} else {
  //問題数がもうなければこちらを実行  
  window.alert("終了！あなたの正解数は"+ score + "/" + quizLength + "です！");
}
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click",(e) => {
  clickHandler(e);
});
  handlerIndex++;
} 









