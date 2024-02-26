// variables
let registro = document.getElementById("boton_registro");
let usuario = {
  nombre: "",
  email: "",
  edad: "",
  contrasena: "",
  puntuacion: {
    nivel_1: 0,
    nivel_2: 0,
    nivel_3: 0,
  },
  partidas: {
    nivel_1: false,
    nivel_2: false,
    nivel_3: false,
  },
};
// metodos

// Insertar usuario si todo ba bien
registro.addEventListener("click", (e) => {
  e.preventDefault();
  // la insercion de un usuario en el local storage
  usuario.nombre = document.getElementById("nombre").value;
  usuario.email = document.getElementById("email").value;
  usuario.edad = document.getElementById("edad").value;
  usuario.contrasena = document.getElementById("password").value;
  console.log(usuario);

  localStorage.setItem(usuario.email, JSON.stringify(usuario));
  sessionStorage.setItem("userLoged", JSON.stringify(usuario));
  console.log(localStorage.getItem(usuario.email));
  window.location.href = "../../menu_user.html";
});
