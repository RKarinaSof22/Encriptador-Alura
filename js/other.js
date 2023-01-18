// capturando textarea
const taEntrada2 = document.querySelector(".ta-entrada");

// capturando contenedores
const muñeco = document.querySelector(".muñeco");
const sinMuñeco = document.querySelector(".sin-muñeco");

// capturando botones
const btnEncriptar2 = document.querySelector(".btn-encriptar");
const btnDesencriptar2 = document.querySelector(".btn-desencriptar");

function conMensajes() {
  muñeco.classList.add("noDisplay");
  sinMuñeco.classList.remove("noDisplay");
}

function sinMensajes() {
  muñeco.classList.remove("noDisplay");
  sinMuñeco.classList.add("noDisplay");
}

btnEncriptar2.addEventListener("click", function () {
  if (taEntrada2.value == "") {
    sinMensajes();
  } else {
    conMensajes();
  }
});

btnDesencriptar2.addEventListener("click", function () {
  if (taEntrada2.value == "") {
    sinMensajes();
  } else {
    conMensajes();
  }
});
