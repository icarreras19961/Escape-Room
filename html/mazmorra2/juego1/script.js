// Variables
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let mostrar = document.getElementById("mostrar");
let nRand;
let lista = ["piedra", "papel", "tijera"];
let palabraRival;
let nSelect = "papel";
let cont = 0;

// El juego como tal

// Lista de la palabra del rival
nRand = Math.floor(Math.random() * lista.length);
palabraRival = lista[nRand];

// Tus selectores
n1.addEventListener("click", (e) => {
  juego(e.target.value);
});
n2.addEventListener("click", (e) => {
  juego(e.target.value);
});
n3.addEventListener("click", (e) => {
  juego(e.target.value);
});

function juego(nSelect) {
  // Resultado
  console.log("yo " + nSelect);
  console.log("Rival " + palabraRival);

  // Si es igual
  if (nSelect == palabraRival) {
    console.log("empate");
  }
  // Pierdes
  if (
    (nSelect == "piedra" && palabraRival == "papel") ||
    (nSelect == "papel" && palabraRival == "tijera") ||
    (nSelect == "tijera" && palabraRival == "piedra")
  ) {
    console.log("pierdes");
    cont--;
  }

  //Ganas
  if (
    (nSelect == "papel" && palabraRival == "piedra") ||
    (nSelect == "piedra" && palabraRival == "tijera") ||
    (nSelect == "tijera" && palabraRival == "papel")
  ) {
    console.log("Ganas");
    cont++;
  }

  if (cont == 3) {
    window.location.href = "../../ganar.html";
  }
  if (cont == -3) {
    window.location.href = "../../perder.html";
  }
}
