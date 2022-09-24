const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

const userSelectedValue = document.getElementById("result-user-stat");
const computerSelectedValue = document.getElementById("result-comp-stat");
const winnerSelectedValue = document.getElementById("result-final-stat");

const userScoreVal = document.getElementById("userScoreVal");
const compScoreVal = document.getElementById("compScoreVal");

let userScore = 0;
let computerScore = 0;

const computerSelection = () => {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
}

const checkWinner = (userSelected, computerSelected) => {
    if(userSelected == 'rock' && computerSelected == 'scissors') return 'User';
    else if(userSelected == 'rock' && computerSelected == 'paper') return 'Computer';
    else if(userSelected == 'rock' && computerSelected == 'rock') return 'tie';
    else if(userSelected == 'paper' && computerSelected == 'rock') return 'User';
    else if(userSelected == 'paper' && computerSelected == 'scissors') return 'Computer';
    else if(userSelected == 'paper' && computerSelected == 'paper') return 'tie';
    else if(userSelected == 'scissors' && computerSelected == 'rock') return 'Computer';
    else if(userSelected == 'scissors' && computerSelected == 'paper') return 'User';
    else if(userSelected == 'scissors' && computerSelected == 'scissors') return 'tie';
}

rock.addEventListener("click", () => {
    let computerSelected = computerSelection();
    computerSelectedValue.innerHTML = "Computer Selecting"
    userSelectedValue.innerHTML = `User: <span><img style='height:25px' src='./Images/rock.png'></span>`;
    computerSelectedValue.innerHTML = `Computer: <img style='height:25px' src='./Images/${computerSelected}.png'>`;
    let winner = checkWinner('rock', computerSelected);
    if(winner == 'tie')
        winnerSelectedValue.innerHTML = `Winner: Tie`;
    else {
        winnerSelectedValue.innerHTML = `Winner: ${winner}`;
        if(winner == 'User') {
            userScore++;
            userScoreVal.innerHTML = `${userScore}`;
        }    
        if(winner == 'Computer') {
            computerScore++;
            compScoreVal.innerHTML = `${computerScore}`;
        }    
    }

       
})

paper.addEventListener("click", () => {
    let computerSelected = computerSelection();
    userSelectedValue.innerHTML = `User: <span><img style='height:25px' src='./Images/paper.png'></span>`;
    computerSelectedValue.innerHTML = `Computer: <img style='height:25px' src='./Images/${computerSelected}.png'>`;
    let winner = checkWinner('paper', computerSelected);
    if(winner == 'tie')
        winnerSelectedValue.innerHTML = `Winner: Tie`;
    else {
        winnerSelectedValue.innerHTML = `Winner: ${winner}`;
        if(winner == 'User') {
            userScore++;
            userScoreVal.innerHTML = `${userScore}`;
        }    
        if(winner == 'Computer') {
            computerScore++;
            compScoreVal.innerHTML = `${computerScore}`;
        } 
    }
})

scissors.addEventListener("click", () => {
    let computerSelected = computerSelection();
    userSelectedValue.innerHTML = `User: <span><img style='height:25px' src='./Images/scissors.png'></span>`;
    computerSelectedValue.innerHTML = `Computer: <img style='height:25px' src='./Images/${computerSelected}.png'>`;
    let winner = checkWinner('scissors', computerSelected);
    if(winner == 'tie')
        winnerSelectedValue.innerHTML = `Winner: Tie`;
    else {
        winnerSelectedValue.innerHTML = `Winner: ${winner}`;
        if(winner == 'User') {
            userScore++;
            userScoreVal.innerHTML = `${userScore}`;
        }    
        if(winner == 'Computer') {
            computerScore++;
            compScoreVal.innerHTML = `${computerScore}`;
        } 
    }
})