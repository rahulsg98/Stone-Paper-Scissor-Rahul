const ruleList = document.getElementById('rules-list');
const crossIcon = document.getElementById('icon');
const ruleBtn = document.getElementById('btn');

ruleList.style.visibility = 'hidden';
crossIcon.style.visibility = 'hidden';

var userScore = document.getElementById('user-score-value');
var compScore = document.getElementById('comp-score-value');

var userCount = 0;
var compCount = 0;
let cntbtn=0;

ruleBtn.addEventListener("click", function() {
    cntbtn++;
    if(cntbtn%2==0){
        ruleList.style.visibility = 'hidden';
        crossIcon.style.visibility = 'hidden';
    }
    else{
        ruleList.style.visibility = 'visible';
        crossIcon.style.visibility = 'visible';
    }
});

crossIcon.addEventListener("click", function() {
    ruleList.style.visibility = 'hidden';
    crossIcon.style.visibility = 'hidden';
    cntbtn=0;
});

const stone = document.getElementById('stone');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

const game = document.getElementById('game');
const lineSecion = document.getElementById('line-section');
const gameSection = document.getElementById('game-section');

const resultSection = document.getElementById('result-section');
const ruleArea = document.getElementById('rules');

resultSection.style.visibility = 'hidden';

const userChoice = document.getElementById('user-choice');
const pcChoice = document.getElementById('pc-choice');

var userImg = document.getElementById('user-image');
var pcImg = document.getElementById('pc-image');


var choicesArr = ['stone','paper','scissor'];
var borderColor = ['#0074B6','#FFA943','#BD00FF'];

var statusText = document.getElementById('status');
var fromWhom = document.getElementById('from-whom');
var playAgain = document.getElementById('play-again');

playAgain.addEventListener("click", function(){
    gameSection.style.visibility = 'visible';
    resultSection.style.visibility = 'hidden';
})

function Won(){
    statusText.innerText = "YOU WON";
    playAgain.innerText = "PLAY AGAIN";
    userCount++;
    userScore.innerText = userCount;
}

function Lost(){
    statusText.innerText = "YOU LOST";
    playAgain.innerText = "PLAY AGAIN";
    compCount++;
    compScore.innerText = compCount;
}

function Tie(){
    statusText.innerText = "TIE UP";
    playAgain.innerText = "REPLAY";
    compCount++;
    userCount++;
    compScore.innerText = compCount;
    userScore.innerText = userCount;
}

stone.addEventListener("click",function(){
    gameSection.style.visibility = 'hidden';
    resultSection.style.visibility = 'visible';

    userChoice.style.border = "16px solid #0074B6";
    userChoice.style.filter = "drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35))";
    ruleArea.style.marginTop = "-260px";

    var randomNumber = Math.floor(Math.random()*3);

    userImg.src = `./images/${choicesArr[0]}.png`;
    pcImg.src = `./images/${choicesArr[randomNumber]}.png`;
    pcChoice.style.border = `16px solid ${borderColor[randomNumber]}`;

    if(choicesArr[randomNumber] === 'stone'){
        Tie();
    }
    else if(choicesArr[randomNumber] === 'paper'){
        Lost();
    }
    else if(choicesArr[randomNumber] === 'scissor'){
        Won();
    }
})

paper.addEventListener("click",function(){
    gameSection.style.visibility = 'hidden';
    resultSection.style.visibility = 'visible';

    userChoice.style.border = "16px solid #FFA943";
    userChoice.style.filter = "drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35))";
    ruleArea.style.marginTop = "-260px";

    var randomNumber = Math.floor(Math.random()*3);

    userImg.src = `./images/${choicesArr[1]}.png`;
    pcImg.src = `./images/${choicesArr[randomNumber]}.png`;
    pcChoice.style.border = `16px solid ${borderColor[randomNumber]}`;

    if(choicesArr[randomNumber] === 'stone'){
        Won();
    }
    else if(choicesArr[randomNumber] === 'paper'){
        Tie();
    }
    else if(choicesArr[randomNumber] === 'scissor'){
        Lost();
    }
})

scissor.addEventListener("click",function(){
    gameSection.style.visibility = 'hidden';
    resultSection.style.visibility = 'visible';

    userChoice.style.border = "16px solid #BD00FF";
    userChoice.style.filter = "drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35))";
    ruleArea.style.marginTop = "-260px";

    var randomNumber = Math.floor(Math.random()*3);

    userImg.src = `./images/${choicesArr[2]}.png`;
    pcImg.src = `./images/${choicesArr[randomNumber]}.png`;
    pcChoice.style.border = `16px solid ${borderColor[randomNumber]}`;

    if(choicesArr[randomNumber] === 'stone'){
        Lost();
    }
    else if(choicesArr[randomNumber] === 'paper'){
        Won();
    }
    else if(choicesArr[randomNumber] === 'scissor'){
        Tie();
    }
})
