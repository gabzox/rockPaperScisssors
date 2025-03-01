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

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock")
    {
        if (computerChoice === "rock")
        {
            console.log("It's a tie");

        }
        else if (computerChoice === "paper")
        {
            console.log("You lose! Paper beats rock");
            computerScore++;
        }
        else if (computerChoice === "scissors")
        {
            console.log("You win! Rock beats scissors");
            humanScore++;
        }
    }
    else if (humanChoice === "paper")
    {
        if (computerChoice === "rock")
        {
            console.log("You win! Paper beats rock");
            humanScore++;
        }
        else if (computerChoice === "paper")
        {
            console.log("It's a tie!")
        }
        else if (computerChoice === "scissors")
        {
            console.log("You lose! Scissors beats paper");
            computerScore++;
        }

    }
    else if (humanChoice === "scissors")
    {
        if (computerChoice === "rock")
        {
            console.log("You lose! Rock beats scissors");
            computerScore++;
        }
        else if (computerChoice === "paper")
        {
            console.log("You win! Scissors beats paper");
            computerScore++;
        }
        else if (computerChoice === "scissors")
        {
            console.log("It's a tie!");
        }

    }
}

function playGame()
{
    for (let round = 0; round < 5; round++)
    {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    if (humanScore > computerScore)
    {
        console.log("you win the game!");
    }
    else if (computerScore > humanScore)
    {
        console.log("you lost the game!!");
    }
    else if (computerSCore == humanScore)
    {
        console.log("you tied the game!");
    }
}
let humanScore = 0;
let computerScore = 0;
playGame();

// console.log(getComputerChoice());
// console.log(getHumanChoice());