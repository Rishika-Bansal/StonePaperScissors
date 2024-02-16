let userScore= 0;
let compScore= 0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userSco= document.querySelector("#user-score");
const compSco= document.querySelector("#comp-score");

const genCompChoice= ()=>{
    const options= ["stone", "paper", "scissors"];
    const ranIdx= Math.floor(Math.random() * 3);  //generate random no. b/w 0 to 2 
    return options[ranIdx];
};

const drawGame=()=>{
    msg.innerText= "Game was draw. Play again.";
    msg.style.backgroundColor= "#081b31";
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userSco.innerText= userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }else{
        compScore++;
        compSco.innerText= compScore;
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
};

const playGame= (userChoice) => {
    const compChoice= genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin= true;
        if(userChoice === "stone"){
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;  //if computer choice is paper so user will loose otherwise win
        }else if(userChoice === "paper"){
            //scissors, stone
            userWin = compChoice === "scissors" ? false : true;  //if computer choice is scissors so user will loose otherwise win
        }else{ 
            //userChoice = scissors
            //stone, paper
            userWin = compChoice === "stone" ? false : true;  //if computer choice is stone so user will loose otherwise win
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((val) => {
    val.addEventListener("click", () => {
        const userChoice= val.getAttribute("id");
        playGame(userChoice);
    });
});