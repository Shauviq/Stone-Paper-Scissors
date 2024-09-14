let userscore = 0;
let compscore = 0;

const choices =  document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const comps = document.querySelector("#compscore");
const users = document.querySelector("#userscore");


const gencompchoice = () => {
    const option = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3); //number smaller than 1 when multiplied by 3 it becomes 0 to 2
    return option[randidx];
}

const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    if(compchoice===userchoice){
        drawgame(userchoice);
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }
        else if(userchoice === "scissors"){
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin===true){
        message.innerHTML = `You Win! Your ${userchoice} beats ${compchoice} `;
        message.style.backgroundColor = "green";
        userscore++;
        users.innerHTML = userscore;
    }
    else {
        message.innerHTML = `You lost! ${compchoice} beats Your ${userchoice} `;
        message.style.backgroundColor = "red";
        compscore++;
        comps.innerHTML = compscore
    }
    updatescoreboard();
    console.log(userwin);
}

const drawgame = (userchoice) => {
    message.innerHTML = `Game Was a Draw. you both chose ${userchoice} `
    message.style.backgroundColor = "#081b31";
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

const updatescoreboard = () => {

}