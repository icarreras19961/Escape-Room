let globalPoints = JSON.parse(localStorage.getItem("globalPoints"));
console.log(globalPoints);
globalPoints = globalPoints.sort((a, b) => {
  return a - b;
});
let nivel1 = [];
let nivel2 = [];
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");

for (let i = 0; i < globalPoints.length; i++) {
  if (globalPoints[i].nivel == 1) {
    n1.innerHTML += celdaTabla(globalPoints[i]);
  } else if (globalPoints[i].nivel == 2) {
    n2.innerHTML += celdaTabla(globalPoints[i]);
  }
}

function celdaTabla(globalPoints) {
  console.log(globalPoints);
  let celda = `<div class="tabla_puntos_individual">
  <strong class="name">${globalPoints.name}</strong>
  <span class="date">Date: ${globalPoints.date}</span>
  <span class="puntos">Puntos: ${globalPoints.puntos}</span>
</div> <hr>`;
  return celda;
}
