let gameseq=[];
let userseq=[];
let btn=["red","green","orange","blue"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let body=document.querySelector("body");
function btnflash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash");
 },250);
}

function userflash(btn){
 btn.classList.add("userflash");
 setTimeout(function(){
    btn.classList.remove("userflash");
 },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randindex=Math.floor(Math.random()*3);
    let btncolor=btn[randindex];
    let randbtn=document.querySelector(`.${btncolor}`);

    gameseq.push(btncolor);
    // console.log(`gameseq :${gameseq}`);
    btnflash(randbtn);

}

document.addEventListener("keypress",function(){
    if(started==false){
        h2.innerText="Game is started";
        console.log("game is started");
        started=true;
        levelup();
    }
})
 

function checkAns(index){
//   console.log("current level ");
if(userseq[index]===gameseq[index]){
    if(userseq.length==gameseq.length){
      setTimeout(levelup,1000);
    }
    
}
else{
    h2.innerText="game is over! Press any key to start";
    reset();
    body.style.backgroundColor="red"
    setTimeout(function(){
         body.style.backgroundColor="white"
    },250)
   
}

}

let allbtn=document.querySelectorAll(".btn");
for(btn1 of allbtn){
    btn1.addEventListener("click",function(){
       userflash(this);
     usercolor=this.getAttribute("id");
     userseq.push(usercolor);
    // console.log(`userseq:${userseq}`);
     checkAns(userseq.length-1);
    })
}

function reset(){
    started=false;
    level=0;
    gameseq=[];
    userseq=[];
}