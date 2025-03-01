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

console.log(getComputerChoice());
console.log(getHumanChoice());