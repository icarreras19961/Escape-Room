// Variables
let userLoged = JSON.parse(sessionStorage.getItem("userLoged"));
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
let loro = document.getElementById("loro");
let loro_text = document.getElementById("loro_text");
let puntuacion = 300;

// loro
loro.addEventListener("click", (e) => {
  loro_text.style.display = "block";
  setInterval(() => {
    loro_text.style.display = "none";
  }, 5000);
});
// Casita
let casita = document.getElementById("casita");
casita.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "../../menu_user.html";
});


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
    puntuacion -= 30;
  }

  //Ganas
  if (
    (nSelect == "papel" && palabraRival == "piedra") ||
    (nSelect == "piedra" && palabraRival == "tijera") ||
    (nSelect == "tijera" && palabraRival == "papel")
  ) {
    console.log("Ganas");
    cont++;
    puntuacion += 20;
  }
  resultado.innerHTML = `<img src="img/${cont}.png" alt="">`;
  console.log(cont);
  console.log(puntuacion);

  if (cont == 3) {
    
    // if (userLoged.puntuacion.nivel_2 < puntuacion) {
      userLoged.puntuacion.nivel_2 = puntuacion;
      sessionStorage.setItem("userLoged", JSON.stringify(userLoged));
      let piezaPuntos = {
        puntos: puntuacion,
        nivel: 2,
        name: userLoged.nombre,
        date: new Date().toLocaleDateString("en-GB"),
      };
      let globalPoints = JSON.parse(localStorage.getItem("globalPoints"));
      console.log(globalPoints);
      globalPoints.push(piezaPuntos);
      localStorage.setItem("globalPoints", JSON.stringify(globalPoints));
    // }
    window.location.href = "../../ganar.html";
  }
  if (cont == -3) {
    window.location.href = "../../perder.html";
  }
}
