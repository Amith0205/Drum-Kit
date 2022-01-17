var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // this.style.color="black";
    var btnpress=this.innerHTML;
    makesound(btnpress);
    btnAnimation(btnpress);
  });
}

document.addEventListener("keypress",function(event)
{
  makesound(event.key);
  btnAnimation(event.key);
});

function btnAnimation(currentKey)
{
  var btn=document.querySelector("."+currentKey);
  btn.classList.add("pressed");
  setTimeout(function()
{
  btn.classList.remove("pressed");
},100);
}
function makesound(key){
    switch(key)
    {
      case "w":
      var waudio=new Audio("sounds/crash.mp3");
      waudio.play();
      break;
      case "a":
      var aaudio=new Audio("sounds/kick-bass.mp3");
      aaudio.play();
      break;
      case "s":
      var saudio=new Audio("sounds/snare.mp3");
      saudio.play();
      break;
      case "d":
      var daudio=new Audio("sounds/tom-1.mp3");
      daudio.play();
      break;
      case "j":
      var jaudio=new Audio("sounds/tom-2.mp3");
      jaudio.play();
      break;
      case "k":
      var kaudio=new Audio("sounds/tom-3.mp3");
      kaudio.play();
      break;
      case "l":
      var laudio=new Audio("sounds/tom-4.mp3");
      laudio.play();
      break;
    }
}
