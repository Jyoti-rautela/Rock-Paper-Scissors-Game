//Here, user and comp scores are stored in 2 var so that we can change them acc. to need
let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score'); 

//All the choices are selected
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");//TO CHANGE MESSAGE
const reset = document.querySelector("#reset");

reset.addEventListener("click",() =>{
    userScore = 0;
    userScorePara.innerText = 0;
    compScore = 0;
    compScorePara.innerText = 0;
});

//Generating computer's random choice
const genCompChoice = () => {
    const options = ["rock" , "paper", "scissors"];
    const randId = Math.floor(Math.random() * 3); //Here, random number is choosed using this form for computer choice
    return options[randId];
};

//Who wins
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin == true){
       // console.log("You win! :) ");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.color="white"; 
        msg.style.backgroundColor="green"; 
    }else{
        // console.log("You lose! :( ");
        compScore++; 
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red"; 
        msg.style.color="white"; 
    }
};

const drawGame = () =>{
    // console.log("Game Was DRAW");
    msg.innerText = "GAME WAS DRAW, Play Again!";
    msg.style.backgroundColor="yellow"; 
    msg.style.color="black"; 
};

//Usser's choice is stored
const playGame = (userChoice) => {
    console.log("User Choice: ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp Choice: ", compChoice);

    if(userChoice == compChoice){
        drawGame();
    }
    else{
        let userWin = false; //All conditions in which user wins
        if(userChoice == "rock" && compChoice == "scissors"){
            userWin = true;
        }

        if(userChoice == "paper" && compChoice == "rock"){
            userWin = true;
        }

        if(userChoice == "scissors" && compChoice == "paper"){
            userWin = true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

//Users choice is being selected and printed
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
});