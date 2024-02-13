// VARIABLES
let analfabeto = document.getElementById("analfabeto");
let divSecreto = document.querySelector(".palabra-secreta");
let intento = document.querySelector(".intentos");
let imagen = document.getElementById("imagen");
let ListaJSON;
let listaPalabras = [
  "Hola",
  "adios",
  "patata",
  "zapato",
  "libro",
  "carta",
  "mesopotamia",
  "esdrujula",
  "lapiz",
  "agua",
  "estuche",
  "supercalifragilisticoespiralidoso",
];
let palabraSecreta;
let letrasCifradas;
let cont = 0;
let record = {
  IntentosRestantes: "",
  tiempoEmpleado: "",
};
let pRecord = document.getElementById("pRecord");
//Pop up variables

//EVENTOS

// Cuando elijes una letra
analfabeto.addEventListener("click", (e) => {
  if (e.target.classList.contains("letra")) {
    cont++;
    console.log(cont);
    if (cont == 1) {
      elCrono = setInterval(crono, 1000);
      start.style.display = "none";
    }
    console.log(e.target.innerText);
    comprobador(e);
  }
});

//FUNCIONES
//Elije la palabra secreta que se va a utilizar
function PalabraSecreta() {
  let indexPalabraSecreta = Math.floor(Math.random() * listaPalabras.length);
  //   console.log(indesPalabraSecreta);
  palabraSecreta = listaPalabras[indexPalabraSecreta];
  console.log(palabraSecreta);
  cifrador(palabraSecreta);
}

//Cifrador de la palabra
function cifrador(palabraSecreta) {
  letrasCifradas = [palabraSecreta.length];
  for (let i = 0; i < palabraSecreta.length; i++) {
    letrasCifradas[i] = false;
  }
}
//Comprobador
function comprobador(e) {
  let esIgual = true;
  let letrasGuardadas;
  let letra = e.target.innerText;

  //Recorre palabra
  letrasGuardadas = letrasCifradas.slice();
  for (let i = 0; i < palabraSecreta.length; i++) {
    fallo = false;
    console.log(fallo);
    //Alaniza si esta la letra o no
    if (letra.toLowerCase() == palabraSecreta.charAt(i).toLowerCase()) {
      letrasCifradas[i] = true;
      e.target.classList.add("acierto");
    }
  }

  //Saber si he fallado o no para restar
  for (let i = 0; i < palabraSecreta.length; i++) {
    if (letrasCifradas[i] == letrasGuardadas[i]) {
      esIgual = true;
    } else {
      esIgual = false;
      break;
    }
  }

  //Lo que pasa si fallo
  console.log("letras guardadas: " + letrasGuardadas);
  console.log("letras cifradas: " + letrasCifradas);
  console.log("son iguales: " + (letrasGuardadas === letrasCifradas));
  record.IntentosRestantes = intento.innerText;
  record.tiempoEmpleado = lahora.innerText;

  console.log(record);
  if (esIgual) {
    intento.innerText--;
    // console.log(`img/intento${intento.innerText}.png`);
    imagen.src = `img/fallo${intento.innerText}.png`;
    e.target.classList.add("error");
    console.log(intento.innerText);
    if (intento.innerText <= 0) {
      imagen.src = `img/hasPerdido.png.png`;
      console.log("has perdido");
      
      parar();
      recordLocalStorage(record);
      window.location.href = "/html/mazmorra1/perder/perder.html";
    }
  }
  escribidor();
  // console.log(divSecreto.innerHTML);
  if (divSecreto.innerHTML == palabraSecreta) {
    console.log("Has ganado");
    // console.log(envoltorio[0]);
    // console.log(envoltorioGanar[0]);

    parar();
    recordLocalStorage(record);
    window.location.href = "/html/mazmorra1/ganar/ganar.html";
  }
}
//Lo que se introduce en el localstorage
function recordLocalStorage(puntuacionActual) {
  // Las variables json
  let recordAnterior = JSON.parse(localStorage.getItem(palabraSecreta));
  let nuevoRecord = recordAnterior;
  console.log(recordAnterior);
  // Las condiciones para modificar los records
  if (recordAnterior != null) {
    if (recordAnterior.IntentosRestantes < puntuacionActual.IntentosRestantes) {
      nuevoRecord.IntentosRestantes = puntuacionActual.IntentosRestantes;
    }
    if (recordAnterior.tiempoEmpleado > puntuacionActual.tiempoEmpleado) {
      nuevoRecord.tiempoEmpleado = puntuacionActual.tiempoEmpleado;
    }
  } else {
    nuevoRecord = puntuacionActual;
  }
  console.log(nuevoRecord);
  let record =
    "El record es: <br/>Intentos:" +
    nuevoRecord.IntentosRestantes +
    " <br/>" +
    "tiempo usado: " +
    nuevoRecord.tiempoEmpleado;
  localStorage.setItem(palabraSecreta, JSON.stringify(nuevoRecord));
  console.log(record);
  
}
function escribidor() {
  console.log(letrasCifradas);
  divSecreto.innerText = "";
  for (let i = 0; i < palabraSecreta.length; i++) {
    if (letrasCifradas[i]) {
      divSecreto.innerText += palabraSecreta[i];
    } else {
      divSecreto.innerText += "-";
    }
  }
}

// function cronometor() {
//VARIABLES DEL CRONOMETRO
let start = document.getElementById("start");

let stop = document.getElementById("stop");

let botonReset = document.getElementById("reset");
let lahora = document.getElementById("lahora");
let miFecha = new Date();
miFecha.setHours(0, 0, 0, 0);
let elCrono;
lahora.innerHTML = "00" + ":" + "00" + ":" + "00";

//EVENTOS DEL CRONOMETRO
start.addEventListener("click", (e) => {
  let cont = 0;
  cont++;
  if (cont == 1) {
    elCrono = setInterval(crono, 1000);
    start.style.display = "none";
    stop.style.display = "inline-block";
  }
});
stop.addEventListener("click", (e) => {
  parar();
});
botonReset.addEventListener("click", (e) => {
  reset();
  start.style.display = "inline-block";
});

//FUNCIONES DEL CRONOMETRO
function crono() {
  let horas = miFecha.getHours();
  let minutos = miFecha.getMinutes();
  let segundos = miFecha.getSeconds();

  segundos += 1;

  if (segundos == 60) {
    segundos = 0;
    minutos += 1;
    miFecha.setMinutes(minutos);
  }

  miFecha.setSeconds(segundos);

  if (horas < 10) {
    horas = "0" + horas;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  lahora.innerHTML = horas + ":" + minutos + ":" + segundos;
  if (segundos % 10 == 0) {
    intento.innerText--;
    if (intento.innerText <= 0) {
      imagen.src = `img/hasPerdido.png.png`;
      console.log("has perdido");
      popUpPalabraSecreta.innerHTML = palabraSecreta;
      envoltorio[0].style.display = "block";
      parar();
    }
  }
}

function parar() {
  clearInterval(elCrono);
}

//Con esto puesto no va sin el si
function reiniciarCrono() {
  miFecha.setHours(0, 0, 0, 0);
  lahora.innerHTML = "00:00:00";
}

function reset() {
  location.reload();
  setTimeout(reiniciarCrono);
}
// }
// cronometor();
PalabraSecreta();
escribidor();
