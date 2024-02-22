// Variables
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let mostrar = document.getElementById("mostrar");
let contrario = document.getElementById("contrario");
let nRand;
let lista = ["piedra", "papel", "tijera"];
let palabraRival;
let nSelect = "papel";
let resultado = document.getElementById("resultado");
let cont = 0;

// El juego como tal
function juego(nSelect) {
  nRand = Math.floor(Math.random() * lista.length);
  palabraRival = lista[nRand];
  contrario.innerHTML = `<img src="../../../Imagenes/${palabraRival}.png" alt="">`;
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
  resultado.innerHTML =  `<img src="img/${cont}.png" alt="">`
  console.log(cont);
  if (cont == 3) {
    window.location.href = "../../ganar.html";
  }
  if (cont == -3) {
    window.location.href = "../../perder.html";
  }
}