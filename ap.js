let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const showuserwin = (userwin,userchoice,compchoice) =>{
    if(userwin == true) {
        msg.innerText = `You win!  this ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green";
        userscore++;
        userscorepara.innerText = userscore;
    } else{
        msg.innerText = `You lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        compscorepara.innerText = compscore;
    }
}
const drawgame = () =>{
   msg.innerText = "It's a Draw";
   msg.style.backgroundColor = "#081b31";
}
const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const ranid = Math.floor(Math.random()*3);
    return options[ranid];
};
const playgame = (userchoice) =>{
    console.log("User Choice = ", userchoice);
    const compchoice = gencompchoice();
    console.log("compchoice = ", compchoice );
    if(userchoice === compchoice) {
        drawgame();
    } else{
        let userwin = true;
        if(userchoice=== "rock") {
             if(compchoice==="paper"){
                userwin = false;
            } else{
                userwin=true;
            }
        }
        else if(userchoice==="paper"){
            if(compchoice==="rock"){
                userwin= true;
            } else{
                userwin==false;
            }
    } else {
        if(compchoice==="rock"){
            userwin= false;
        } else{
            userwin= true;
        }
    }
    showuserwin(userwin,userchoice,compchoice);
    };
}
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});