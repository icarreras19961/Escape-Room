// Variables
const boton_sign_in = document.getElementById("boton_sign_in");
let email = document.getElementById("email");
let password = document.getElementById("password");
let error_login = document.getElementById("error_login");

// El evento que analizara lo que esta pasando y permitira entrar o no en el sitio web
boton_sign_in.addEventListener("click", (e) => {
  e.preventDefault();
  // Le pongo un try catch porque si no pongo nada me salta un error y pues asi no me salta el error
  try {
    let usuario = JSON.parse(localStorage.getItem(email.value));
    console.log(usuario.email);
    console.log(usuario.contrasena);

    if (usuario.email == email.value && usuario.contrasena == password.value) {
      sessionStorage.setItem(usuario.email, JSON.stringify(usuario))
      window.location.href = "/html/menu_user.html";
    } else {
      error_login.style.display = "block";
    }
  } catch (error) {
    error_login.style.display = "block";
  }
  // console.log(email.value);
  // console.log(localStorage.getItem("ivan@gmail.com"));
});
