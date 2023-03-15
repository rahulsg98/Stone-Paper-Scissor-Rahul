const ruleList = document.getElementById('rules-list');
const crossIcon = document.getElementById('icon');
const ruleBtn = document.getElementById('btn');
const nextBtn = document.getElementById('next-button');

const shade1 = document.getElementById('shade1');
const shade2 = document.getElementById('shade2');

shade1.style.visibility = 'hidden';
shade2.style.visibility = 'hidden';

const celebrateSection = document.getElementById('celebrate-section');
const starcupSection = document.getElementById('star-cup');
celebrateSection.style.visibility = 'hidden';
// starcupSection.style.visibility = 'hidden';

nextBtn.style.visibility = 'hidden';

ruleList.style.visibility = 'hidden';
crossIcon.style.visibility = 'hidden';

var userScore = document.getElementById('user-score-value');
var compScore = document.getElementById('comp-score-value');


var userCount = localStorage.getItem("userCount");
var compCount = localStorage.getItem("compCount");

if (userCount == null) {
    userScore.innerText = 0;
    compScore.innerText = 0;
}
else{
    userScore.innerText = userCount;
    compScore.innerText = compCount;
}

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

const template = document.getElementById('template');

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

    nextBtn.style.visibility = 'hidden';

    ruleBtn.style.left = "1210px";
    shade1.style.visibility = 'hidden';
    shade2.style.visibility = 'hidden';
})

function Won(){
    statusText.innerText = "YOU WON";
    playAgain.innerText = "PLAY AGAIN";
    // userCount++;

    //userCount = localStorage.getItem("userCount");
    userCount = userCount ? parseInt(userCount) + 1 : 1;
    localStorage.setItem("userCount", userCount);

    userScore.innerText = userCount;

    nextBtn.style.visibility = 'visible';

    ruleBtn.style.left = "1080px";
    nextBtn.style.left = "1210px";

    shade1.style.visibility = 'visible';
    
}

function Lost(){
    statusText.innerText = "YOU LOST";
    playAgain.innerText = "PLAY AGAIN";
    // compCount++;

    //compCount = localStorage.getItem("compCount");
    compCount = compCount ? parseInt(compCount) + 1 : 1;
    localStorage.setItem("compCount", compCount);

    compScore.innerText = compCount;

    ruleBtn.style.left = "1210px";

    shade2.style.visibility = 'visible';
}

function Tie(){
    statusText.innerText = "TIE UP";
    playAgain.innerText = "REPLAY";
    ruleBtn.style.left = "1210px";
}

stone.addEventListener("click",function(){
    gameSection.style.visibility = 'hidden';
    resultSection.style.visibility = 'visible';

    userChoice.style.border = "16px solid #0074B6";
    userChoice.style.filter = "drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35))";
    ruleArea.style.marginTop = "-450px";

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
    // ruleArea.style.marginTop = "-260px";

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

nextBtn.addEventListener("click", function(){
    template.style.visibility = 'hidden';
    resultSection.style.visibility = 'hidden';
    celebrateSection.style.visibility = 'visible';
    nextBtn.style.visibility = 'hidden';

    ruleBtn.style.left = "1210px";

    shade1.style.visibility = 'hidden';
    shade2.style.visibility = 'hidden';
})

const celePlayAgain = document.getElementById('cele-play-again');

celePlayAgain.addEventListener("click", function(){
    template.style.visibility = 'visible';
    gameSection.style.visibility = 'visible';
    celebrateSection.style.visibility = 'hidden';

    ruleBtn.style.left = "1210px";
})
