# Web-Animatie
## Minor Visual Interface Design

Ik heb uit het phaidon archive of graphic design een lucky strike sigaretpakje gekozen om na te maken en te animeren. 
Het pakje wilde ik op 3 manieren animeren

- Vallen
- Scheuren
- Sigaret eruit laten schieten

## vallen animatie
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

## Bronnen
- https://codepen.io/mvaneijgen/pen/VaNVQN
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
- https://codepen.io/rajarju/pen/OxNzYx
- https://stackoverflow.com/questions/24386354/execute-js-code-after-pressing-the-spacebar

Floris Elders - Vid1
