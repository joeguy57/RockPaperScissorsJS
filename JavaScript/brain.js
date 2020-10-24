//Variables for the score board
let userScore = 0;
let compScore = 0;
let gameMode = false;
let audio = new Audio();
const userScoreSp = document.getElementById("userScore");
const compScoreSp = document.getElementById("compScore");
const userCtrlSp = document.getElementById("userCtrl");
const compCtrlSp = document.getElementById("compCtrl");
const actOnSp = document.getElementById("actOn");
const resultSp = document.getElementById("results")
const scoreBoardDiv = document.querySelector(".score");
const easyButton = document.getElementById("easy");
const hardButton = document.getElementById("hard");
//Variables for the buttons
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");
//Functions
function hardGameMode(userMove) {
    const choices = ['r', 'p', 's'];
    let int;
    switch (userMove){
        case "r":
            int = 1;
            break;
        case "p":
            int = 2;
            break;
        case "s":
            int = 0;
            break;
        default:
            break;
    }
    return choices[int];
}
function compMove(){
    const choices = ['r', 'p', 's'];
    const int =Math.floor(Math.random() * 3);
    return choices[int];
}

function getString(moveMade){
    switch (moveMade) {
        case "r":
            return "ROCK";
        case "p":
            return "PAPER";
        case "s":
            return "SCISSORS";
        default:
            break;

    }
}

function checkOrder(usersMov, compChoice) {
    userCtrlSp.classList.add("userCrl");
    compCtrlSp.classList.add("compCrl");
    switch (usersMov + compChoice) {
        case "rs":
            userCtrlSp.innerHTML = getString(usersMov);
            compCtrlSp.innerHTML = getString(compChoice);
            actOnSp.innerHTML = "Crushes";
            resultSp.innerHTML = ".  You Win!";
            break;
        case "rp":
            userCtrlSp.innerHTML = getString(usersMov);
            compCtrlSp.innerHTML = getString(compChoice);
            actOnSp.innerHTML = "is Covered by";
            resultSp.innerHTML = ".  You lose!";
            break;
        case "rr":
            userCtrlSp.innerHTML = getString(usersMov);
            compCtrlSp.innerHTML = getString(compChoice);
            actOnSp.innerHTML = "and";
            resultSp.innerHTML = ".  it's a Draw";
            break;
        case "pp":
            userCtrlSp.innerHTML = getString(usersMov);
            compCtrlSp.innerHTML = getString(compChoice);
            actOnSp.innerHTML = "and";
            resultSp.innerHTML = ".  it's a Draw";
            break;
        case "pr":
            userCtrlSp.innerHTML = getString(usersMov);
            compCtrlSp.innerHTML = getString(compChoice);
            actOnSp.innerHTML = "Covers";
            resultSp.innerHTML = ".  You Win!";
            break;
        case  "ps":
            userCtrlSp.innerHTML = getString(usersMov);
            compCtrlSp.innerHTML = getString(compChoice);
            actOnSp.innerHTML = "is Cut by";
            resultSp.innerHTML = ".  You lose!";
            break;
        case "ss":
            userCtrlSp.innerHTML = getString(usersMov);
            compCtrlSp.innerHTML = getString(compChoice);
            actOnSp.innerHTML = "and";
            resultSp.innerHTML = ".  it's a Draw";
            break;
        case "sr":
            userCtrlSp.innerHTML = getString(usersMov);
            compCtrlSp.innerHTML = getString(compChoice);
            actOnSp.innerHTML = "is Crushed by";
            resultSp.innerHTML = ".  You lose!";
            break;
        case "sp":
            userCtrlSp.innerHTML = getString(usersMov);
            compCtrlSp.innerHTML = getString(compChoice);
            actOnSp.innerHTML = "Cuts";
            resultSp.innerHTML = ".  You Win!";
            break;
        default:
            break;
    }
}

function result(usersMov, compChoice, indexState) {
    switch (indexState) {
        case "win":
            userScore++;
            userScoreSp.innerHTML = userScore;
            compScoreSp.innerHTML = compScore;
            checkOrder(usersMov, compChoice);
            document.getElementById(usersMov).classList.add('greenGlow');
            setTimeout(function () {
                document.getElementById(usersMov).classList.remove('greenGlow')
                }, 300
            );
            break;
        case "lose":
            compScore++;
            userScoreSp.innerHTML = userScore;
            compScoreSp.innerHTML = compScore;
            checkOrder(usersMov, compChoice);
            document.getElementById(usersMov).classList.add('redGlow');
            setTimeout(function () {
                    document.getElementById(usersMov).classList.remove('redGlow')
                }, 300
            );
            break;
        case "draw":
            userScoreSp.innerHTML = userScore;
            compScoreSp.innerHTML = compScore;
            checkOrder(usersMov, compChoice);
            document.getElementById(usersMov).classList.add('greyGlow');
            setTimeout(function () {
                    document.getElementById(usersMov).classList.remove('greyGlow')
                }, 300
            );
            break;
        default:
            break;
    }
}

function game(usersMove) {
    let compChoice;
    console.log(gameMode);
    if (gameMode === true){
        compChoice = hardGameMode(usersMove);
    }
    else {
        compChoice = compMove();
    }
    switch (usersMove + compChoice) {
        case "rs":
        case "sp":
        case "pr":
            result(usersMove, compChoice, "win");
            break;
        case "rp":
        case "sr":
        case "ps":
            result(usersMove, compChoice, "lose");
            break;
        default:
            result(usersMove, compChoice,"draw");
            break;
    }
}

function main() {

    /**
     * Here we will be creating an event listener to to get input of the user
     * */

    hardButton.addEventListener('click', function () {
        gameMode = true;
    })

    rockDiv.addEventListener('click', function () {
        audio.src = "sounds/rock.mp3";
        audio.play();
        setTimeout(function (){audio.pause()}, 1000)
        game("r");
    })

    paperDiv.addEventListener('click', function () {
        audio.src = "sounds/paper.mp3";
        audio.play();
        setTimeout(function (){audio.pause()}, 1000)
        game("p");
    })

    scissorsDiv.addEventListener('click', function () {
        audio.src = "sounds/scissor.mp3";
        audio.play();
        setTimeout(function (){audio.pause()}, 1000)
        game("s");
    })

}
main();