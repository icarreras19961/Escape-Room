let userLoged = JSON.parse(sessionStorage.getItem("userLoged"));
console.log(userLoged);
let saludo = document.getElementById("saludo");
saludo.append(userLoged.nombre);
