userLoged.partidas.nivel_1 = true;
sessionStorage.setItem("userLoged", JSON.stringify(userLoged));

let btn_ganar = document.getElementById("btn_ganar");
btn_ganar.addEventListener("click", (e) => {
  window.location.href = "menu_user.html";
});
