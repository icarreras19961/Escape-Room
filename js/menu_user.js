//Para k no se me cuele nadie que no este iniciado sesion
if (sessionStorage.getItem("userLoged") == null) {
  window.location.href = "/html/formularios/signIn/sign_in.html";
}
//La apertura del sesion storage
let userLoged = JSON.parse(sessionStorage.getItem("userLoged"));
console.log(userLoged);
let saludo = document.getElementById("saludo");
saludo.append(userLoged.nombre);

//El settings
let settings = document.getElementById("settings");
settings.addEventListener("click", (e) => {
  window.location.href = "/html/settings.html";
});

//El log out
let logOut = document.getElementById("log_out");
logOut.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem(userLoged.email, JSON.stringify(userLoged));
  sessionStorage.removeItem("userLoged");
  window.location.href = "/html/formularios/signIn/sign_in.html";
});
