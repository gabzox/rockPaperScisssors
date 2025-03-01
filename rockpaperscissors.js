function getComputerChoice()
{
    let randomNum = Math.floor(Math.random()*3)
    let computerChoice;
    switch(randomNum)
    {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice()
{
    return prompt("choose 'rock', 'paper' or 'scissors'");
}

let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice());
console.log(getHumanChoice());