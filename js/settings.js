let boton_update = document.getElementById("boton_update");
let userLoged = JSON.parse(sessionStorage.getItem("userLoged"));

document.getElementById("nombre").value = userLoged.nombre;
document.getElementById("email").value = userLoged.email;
document.getElementById("edad").value = userLoged.edad;
document.getElementById("password").value = userLoged.password;
