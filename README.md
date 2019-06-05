# Web-Animatie
Floris Elders - VID1
## Minor Visual Interface Design

Ik heb uit het phaidon archive of graphic design een lucky strike sigaretpakje gekozen om na te maken en te animeren. 
Het pakje wilde ik op 3 manieren animeren

- Vallen
- Scheuren
- Sigaret eruit laten schieten

## Vallen animatie
voor deze animatie heb ik gebruikt gemaakt van keyframes met de volgende waardes: transform, translate3d. Ik heb met javascript de animatie laten triggeren wanneer de pagina laad. Met een animatie komt het pakje uit de lucht vallen op de pagina en hier bij heb ik ook het geluidje toegevoegd. 

.drop {
  animation: drop 1.2s forwards;
}

@keyframes drop {
  0% {
    transform:
      translate3d(0, -700px, 0) rotate3d(0, 0, 1, 10deg);
  }

  50%, 55% {
    transform:
      translate3d(0, -120px, 0) rotate3d(0, 0, 1, 5deg);
  }

  60% {
    transform:
      translate3d(0, 20px, 0) rotate3d(0, 0, 1, -10deg);
  }

  100% {
    transform-origin: center;
  }
}

## Scheuren animatie
Om het sigaretje uit het pakje te laten halen heb ik het rechter bovenhoekje van de svg appart gemaakt zodat ik deze kan toggelen met javascript class en de opacity uit laten faden met een ease-in transition. vervolgens gaat die in de functie automatisch naar de laatste animatie.

#tear {
  opacity: 1;
  transition: all 3s;
}

.tearoff {
  opacity: 0 !important;
  transform: translateY(-2em);
}

## Sigaret eruit laten schieten
voor deze animatie heb ik gebruikt ook gebruik gemaakt van een javascript toggle en de waardes in de getoggelde class translateY(-2em); meegegeven zodat het sigaretje naar boven verschuift. 

#sig-filter-2 {
  transition: all 1s cubic-bezier(0,1.15,1,.97);
  transition-delay: 1s;
}

.sigout {
  transform: translateY(-3em);
}

## Schudden animatie
Voor deze animatie was mijn plan om de gebruiker het pakje 2 kanten op te laten roteren, Links en rechts. Het kan simpel weg bestuurd worden door de links en rechts arrow keys op het toetsenbord in te drukken. Als je de key indruk (keydown) word de class getoggeld waarin een rotate waarde van -10deg voor links en 10deg voor rechts aan meegegeven is. Als je de key weer los laat (keyup) dan toggeled de class weer en gaat de svg weer naar zijn normale waardes

transform: rotateZ(-10deg);

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


## Concept & Sfeer
Ik wilde het pakje in laten komen alsof iemand het op tafel gooit, hiervoor heb ik ook geluid eraan toe gevoegd om het die impressie te benadrukken. Verder heb ik nog geluid gebruikt bij de schud animatie om de gebruiker te laten horen hoeveel sigaretten er nog in het pakje zitten. Het laatste geluid is een kleine easer egg (try it out). 

De sfeer was te leeg en heb hiervoor een svg pattern (doodshoofden) op de achtergrond toegevoegd, roken is en blijf dodelijk.
De gebruiker krijgt deze te zien als die over de body hovert met zijn cursor. Na enige tijd komt er ook rook te voor schijn van onder uit het beeld om het wat levendiger te maken. 


## Bronnen
- https://codepen.io/mvaneijgen/pen/VaNVQN
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
- https://codepen.io/rajarju/pen/OxNzYx
- https://stackoverflow.com/questions/24386354/execute-js-code-after-pressing-the-spacebar
- https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation
