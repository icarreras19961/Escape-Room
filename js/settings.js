
let userLoged = JSON.parse(sessionStorage.getItem("userLoged"));

document.getElementById("nombre").value = userLoged.nombre;
document.getElementById("email").value = userLoged.email;
document.getElementById("edad").value = userLoged.edad;
document.getElementById("password").value = userLoged.contrasena;


let registro = document.getElementById("boton_update");

registro.addEventListener("click", (e) => {
  e.preventDefault();
  // la insercion de un usuario en el local storage
  userLoged.nombre = document.getElementById("nombre").value;
  userLoged.email = document.getElementById("email").value;
  userLoged.edad = document.getElementById("edad").value;
  userLoged.contrasena = document.getElementById("password").value;


  localStorage.setItem(userLoged.email, JSON.stringify(userLoged));
  sessionStorage.setItem("userLoged", JSON.stringify(userLoged));
  console.log(localStorage.getItem(userLoged.email));
  window.location.href = "/html/menu_user.html";
});
