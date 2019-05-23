//  On page Load animation
var vallen = new Audio('./assets/sounds/vallen2.m4a');
var rookPakje = document.querySelector(".svg-1");

window.addEventListener("load", onLoad);

function onLoad() {
  rookPakje.classList.toggle('drop');
  vallen.play(Audio);
}

// Tear & sigaret filter animation
document.querySelector('svg').addEventListener("click", peukie);

function peukie() {
  document.getElementById("tear").classList.toggle('tearoff');
  document.getElementById("sig-filter-2").classList.toggle('sigout');
}

// Key press spatiebar
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      document.getElementById("tear").classList.toggle('tearoff');
      document.getElementById("sig-filter-2").classList.toggle('sigout');
    }
}
