const getquizDataslength = sessionStorage.getItem('max');
const getScore = Number(sessionStorage.getItem('score')); //===で比較するために数値型に変換
const showScore = document.getElementById('score')
showScore.textContent = getScore + "/" + getquizDataslength;
showScore.style.fontSize = "2em";
showScore.style.color = "#4a90e2";
showScore.style.fontWeight = "bold";

const getRestartBtn = document.getElementById('restartBtn');
getRestartBtn.addEventListener('click',() => {
    location.href = "index.html"; 
    sessionStorage.removeItem('score');
    sessionStorage.removeItem('max');
    //セッションストレージをリセットする
});

const getMessage = document.getElementById('message');
if(getScore === 5){
    getMessage.textContent = "全問正解！カンペキ！";
} else if(getScore === 4){
    getMessage.textContent = "なかなかやるね";
} else if(getScore === 3){
    getMessage.textContent = "おしいね"
} else {
    getMessage.textContent = "もう1回復習してね"
};

//直すこと　回答の文字列を配列に入れて最後に表示　メディアクエリをつける