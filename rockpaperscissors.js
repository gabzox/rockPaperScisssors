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

    const div = document.querySelector("div");
    const para = document.createElement("p");

    if (div.hasChildNodes())
    {
        div.removeChild(div.firstChild);    
    }

    if (humanChoice === "rock")
    {
        if (computerChoice === "rock")
        {
            para.textContent = "It's a tie!";

        }
        else if (computerChoice === "paper")
        {
            para.textContent = "You lose! Paper beats rock";
            computerScore++;
        }
        else if (computerChoice === "scissors")
        {
            para.textContent = "You win! Rock beats scissors";
            humanScore++;
        }
    }
    else if (humanChoice === "paper")
    {
        if (computerChoice === "rock")
        {
            para.textContent = "You win! Paper beats rock";
            humanScore++;
        }
        else if (computerChoice === "paper")
        {
            para.textContent = "It's a tie!";
        }
        else if (computerChoice === "scissors")
        {
            para.textContent = "You lose! Scissors beats paper";
            computerScore++;
        }

    }
    else if (humanChoice === "scissors")
    {
        if (computerChoice === "rock")
        {
            para.textContent = "You lose! Rock beats scissors";
            computerScore++;
        }
        else if (computerChoice === "paper")
        {
            para.textContent = "You win! Scissors beats paper";
            computerScore++;
        }
        else if (computerChoice === "scissors")
        {
            para.textContent = "It's a tie!";
        }
    }

    para.textContent = "Your Score: " + humanScore + " Computer Score: "
    + computerScore;

    div.appendChild(para);

    if (humanScore ==5 || computerScore ==5)
    {
        const div = document.querySelector("div");
        const para = document.createElement("p");
        if (humanScore > computerScore)
        {
            para.textContent = "you win the game!";
        }
        else if (computerScore > humanScore)
        {
            para.textContent = "you lost the game!";
        }
        div.appendChild(para);
    }
}

function playGame()
{
    let humanSelection;
    let computerSelection;
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            humanSelection = button.id;
            computerSelection = getComputerChoice();
            if (humanScore <5 && computerScore <5)
            {   
                playRound(humanSelection,computerSelection);
            }

        });
    });
}

let humanScore = 0;
let computerScore = 0;

let div = document.querySelector("div");
playGame();


// console.log(getComputerChoice());
// console.log(getHumanChoice());