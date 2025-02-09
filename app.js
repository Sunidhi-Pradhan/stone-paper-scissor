let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user");
const compScorepara = document.querySelector("#computer");

const genCompchoice = () =>{
    const options = ["rock","paper","scissors"] ;
    const randIdx=Math.floor(Math.random() * 3);  
    return options[randIdx];
}
const drawGame = () =>{
   
    msg.innerText = "Game was draw .paly again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `you Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = userScore;
        msg.innerText = `you Lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //generate computer choice 
    const compChoice = genCompchoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        // draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper"?false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ?false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice =choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playgame(userChoice);
    });
});