let userScore = 0;
let ComputerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorPara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const RanIdx =Math.floor(Math.random() * 3)  ;
                                                       
     return options[RanIdx];
}



const DrawGame = () => {

    //console.log("Game was draw");
    msg.innerText = "Game was Draw. Try Again."
    msg.style.backgroundColor ="#081631"
};


const ShowWinner = (userWin,userChoice,compChoice) =>{
    if(userWin)
    { 
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("you win");
        msg.innerText =`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
      
    }
  else {

        ComputerScore++;
        computerScorPara.innerText = ComputerScore;
        //console.log("you lose");
        msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor ="red";
      
        
  }

};


const PlayGame = (userChoice) =>{
    //console.log("user select choice ", userChoice);
    const compChoice = genCompChoice();   // it generate the computer choice 
   // console.log("computer choice " , compChoice);

    if(userChoice === compChoice){ 
            DrawGame();
    } 
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper,scissors
            if(compChoice === "paper")
                userWin = false;
            else
                userWin = true;
        }
        else if(userChoice === "paper"){
            // rock,scissors
            if(compChoice==="scissors")
                userWin = false;
            else
                userWin = true;
                          }
        else{ 
            //rock,paper
            if(compChoice ==="rock")
                userWin = false;
            else
            userWin = true;
        }
        ShowWinner(userWin,userChoice,compChoice)
    } 

};


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        //console.log("Button was clicked",userChoice);
        PlayGame(userChoice);
    });

});



