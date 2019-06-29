var dBtns = document.querySelectorAll(".drum");

for (var i = 0; i < dBtns.length; i++) {
  dBtns[i].addEventListener("click", function() {

checkChar(this.innerHTML);
btnPress(this.innerHTML);
  });
}

addEventListener("keypress", function(event){
  checkChar(event.key);
  btnPress(event.key);
});

function checkChar(key){
  switch(key){

    case "w":
    new Audio("sounds/crash.mp3").play();
    break;

    case "a":
    new Audio("sounds/kick-bass.mp3").play();
    break;

    case "s":
    new Audio("sounds/snare.mp3").play();
    break;

    case "d":
    new Audio("sounds/tom-1.mp3").play();
    break;

    case "j":
    new Audio("sounds/tom-2.mp3").play();
    break;

    case "k":
    new Audio("sounds/tom-3.mp3").play();
    break;

    case "l":
    new Audio("sounds/tom-4.mp3").play();
    break;

    default: console.log(btnHtml);
  }
}

function btnPress(key){
 var actKey = document.querySelector("." + key);
 actKey.classList.add("pressed");

 setTimeout(function(){
   actKey.classList.remove("pressed");
 }, 100);
}
