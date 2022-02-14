var score1 = 0;
var btn1 = document.querySelector("#ply1")
var plr1 = document.querySelector("#Score1")

var score2 = 0;
var btn2 = document.querySelector("#ply2")
var plr2 = document.querySelector("#Score2")
var Reset = document.querySelector("#reset")
var winner = document.querySelector("#winner")


 btn1.addEventListener("click",function(){
   var limit = document.querySelector("#limit").value;
   score1 += 1;
   plr1.textContent = score1;
   if( score1 == limit || (score1 > score2 && score1 > limit)){
         plr1.classList.add("green")
         btn1.setAttribute("disabled","true")
         btn2.setAttribute("disabled","true")
         printWinner()
   }

 })

 btn2.addEventListener("click",function(){
    var limit = document.querySelector("#limit").value;
    score2 +=1;
    
   plr2.textContent = score2;
    if( score2 == limit || (score2 > score1 && score2 > limit)){
        plr2.classList.add("green")
        btn1.setAttribute("disabled","true")
        btn2.setAttribute("disabled","true")
        printWinner()
  }

  })


 Reset.addEventListener("click",function(){
 
  
    btn1.removeAttribute("disabled")
    btn2.removeAttribute("disabled")
plr1.classList.remove("green")
plr2.classList.remove("green")
score1 = 0
score2 = 0
plr1.textContent = score1;
plr2.textContent = score2;
document.querySelector("#limit").value = 5;
winner.textContent = ""

})

function printWinner( ){
    if(score1 > score2){
        winner.textContent = "Player 1"
    }
    else{
        winner.textContent= "Player 2"
    }
}