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


// Keypress animation
var rammelen = new Audio('./assets/sounds/rammelen2.m4a');

document.body.onkeyup = function(e){
    if(e.keyCode == 37){
     document.querySelector("svg").classList.toggle('svg-left');
     rammelen.play(Audio);
    }
    if(e.keyCode == 39){
      document.querySelector("svg").classList.toggle('svg-right');
      rammelen.play(Audio);
     }
}

document.body.onkeydown = function(e){
    if(e.keyCode == 37){
     document.querySelector("svg").classList.toggle('svg-left');
    }
    if(e.keyCode == 39){
      document.querySelector("svg").classList.toggle('svg-right');
     }
}


// Get lucky audio
var lucky = new Audio('./assets/sounds/get-lucky.mp3');

document.querySelector(".tekst").addEventListener("click", vibe);

function vibe() {
  lucky.play(Audio);
}

// orientatie device 
// function handleOrientation(event) {
//   var x = event.beta; // In degree in the range [-180,180]
//   if(x <= 180){
//   document.querySelector("svg").classList.toggle('svg-left');
//   rammelen.play(Audio);
//   document.querySelector("svg").classList.toggle('svg-left');
//   }
//   if(x >= -180){
//   document.querySelector("svg").classList.toggle('svg-left');
//   rammelen.play(Audio);
//   document.querySelector("svg").classList.toggle('svg-left');
//   }
// }


// Smokey background
let smokeDensity = 40;
const imageUrl =
  "http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png";
const playground = document.getElementById("playground");
let smokeGeneratorTimer;
let smokeObject;
let smokes = [];
const smokeLife = 10000;

function loadImage() {
  return new Promise((resolve, reject) => {
    let Img = new Image();
    Img.src = imageUrl;
    Img.onload = resolve;
    Img.onerror = reject;
  });
}

function createSmokeObject() {
  smokeObject = document.createElement("div");
  smokeObject.className = "smoke";
}

function removeSmoke(smokeElement, delay) {
  setTimeout(function() {
    smokeElement.remove();
  }, delay + smokeLife);
}

/**
 * Start Stop Smoke Generator
 */
function smokeSwitch(status) {
  smokeGeneratorTimer = setInterval(() => {
    smokeGenerator(getRandomInt(1, smokeDensity));
  }, smokeLife);
}

function smokeGenerator(smokeDensity) {
  let smokeClone, delay;
  for (let i = 0; i < smokeDensity; i++) {
    smokeClone = smokeObject.cloneNode();
    smokeClone.style.left = getRandomInt(0, 100) + '%';
    delay = getRandomInt(0, smokeLife);
    smokeClone.style.animationDelay = delay + 'ms';
    smokeClone.style.animationDuration = smokeLife + 'ms';
    playground.appendChild(smokeClone);
    smokes.push(smokeClone)
    // removeSmoke(smokeClone, delay);
  }
}

function smokeEater() {
  console.log('Smokes: ', smokes.length );
  for (var index = 0; index < smokes.length; index++) {
    if(smokes[index].offsetTop < 0) {
      smokes[index].remove();
      smokes.splice(index, 0);
    }
  }
  window.requestAnimationFrame(smokeEater);
}

window.onload = () => {
  console.info('Page Loaded');
  loadImage().then(() => {
    console.info('Image Loaded');
    createSmokeObject();
    smokeSwitch();
    smokeEater();
  });
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
