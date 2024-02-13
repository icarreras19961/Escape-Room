let ncards = 20;
let arrayJuego = [];
let tries = [];
let selecFrog = [];
let ntries = 0;
let score = 0;
let perder = 0;
let body = document.getElementById("bodyMem");
let nperder = document.getElementById("nperder");
if (ncards % 2 != 0) {
  ncards++;
}

rellenador(arrayJuego, ncards);
// console.log(arrayJuego);

//Fill the desk with the frogs
for (let i = 1; i <= ncards; i++) {
  body.innerHTML += `<div class="frog"><span class="number"><img class="runa" src="letraschinas/${
    arrayJuego[i - 1]
  }.png" alt="">${arrayJuego[i - 1]}</span></div>`;
}

//Fill the array with random numbers that are extract on the half of the ncard value
function rellenador(arrayJuego, ncards) {
  // console.log(arrayJuego, ncards);
  for (let i = 1; i <= ncards / 2; i++) {
    arrayJuego[i] = i;
  }
  for (let i = 1; i <= ncards / 2; i++) {
    arrayJuego.push(i);
  }
  arrayJuego = arrayJuego.sort(() => {
    return Math.random() - 0.5;
  });
}

//The listeners that you click and do thinks
let rana = document.getElementsByClassName("frog");

for (let i = 0; i <= ncards; i++) {
  rana[i].addEventListener("click", (e) => {
    // console.log(e.target);
    e.target.classList.add("check");
    tries[ntries] = e.target.innerText;
    selecFrog[ntries] = e.target;
    if (ntries == 1) {
      ntries = 0;
    } else {
      ntries++;
    }
    // console.log("n: " + ntries);
    analizator(tries, selecFrog);
  });
}

function analizator(tries, selecFrog) {
  console.log(tries.length);
  if (tries.length == 2) {
    // console.log(tries);
    setTimeout(function () {
      comprobador(tries, selecFrog);
      tries.splice(0, tries.length);
    }, 500);
  }
  // console.log(tries);
}

function comprobador(tries, selecFrog) {
  let n1 = tries[0];
  let n2 = tries[1];
  if (n1 == n2) {
    score++;
    // console.log("puntos " + score);
  } else {
    selecFrog[0].classList.remove("check");
    selecFrog[1].classList.remove("check");
    perder++;
    nperder.innerText = 15 - perder;
  }

  if (score == ncards / 2) {
    window.location.href = "/html/mazmorra1/juego2/index.html";
  }

  if (perder == 15) {
    window.location.href = "/html/mazmorra1/perder/perder.html";
  }
}
