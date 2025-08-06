//acceessing buttons
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgbox=document.querySelector(".msg-box");
let winmsg=document.querySelector("#msg");

// reset.addEventListener('click',()=>{
//     console.log("Game is reset");
// });
let turnO=true; //playerX=O playerY-X

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// Array.from(boxes) if you have data which is not an array or somthing then using this method you can use forEach
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("btn clicked");
      if(turnO){
        box.innerText="O";
        turnO=false;
      }else{
        box.innerText="X";
        turnO=true;
      }
      box.disabled=true;    //so that, the data which is onces assigned to on button doen't changes
      
      checkWinner();
    });
});

//This funtion make sure that after on player wins the game ,they are not further able to play without reset
const disablebox= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enablebox= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const resetgame=() =>{
    turnO=true;
    enablebox();
    msgbox.classList.add("hide");
};

const showWinner=(winner)=>{
    winmsg.innerText=`Congratulation, Winner is ${winner}`;
    msgbox.classList.remove("hide");
    disablebox();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);   //all patterns get checked and print indexes of pattern in pair of 3
        //This indexes should be checked in boxes, so for that
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]); //boxes are accessed 

        //Now there is need to access what that box contain
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // ); 
        //All UPPER CODE IS CONVERTED INTO THIS:
        let pos0Val=boxes[pattern[0]].innerText;
        let pos1Val=boxes[pattern[1]].innerText;
        let pos2Val=boxes[pattern[2]].innerText;

        //Now we have to check wheather all 3 boxes are filled or empty

        if(pos0Val !="" && pos1Val !="" && pos2Val !="" ){
            if(pos0Val === pos1Val && pos1Val === pos2Val){
                showWinner(pos0Val);
            }
        }
    }
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
