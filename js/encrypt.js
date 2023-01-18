// capturar botones
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");

// capturar textareas
const taEntrada = document.querySelector(".ta-entrada");
const taSalida = document.querySelector(".ta-salida");

// addEventListener -> escucha el evento click
btnEncriptar.addEventListener("click", function () {
  const dato = taEntrada.value;
  const resultado = encriptador(dato);
  taSalida.value = resultado;
});

btnDesencriptar.addEventListener("click", function () {
  const dato = taEntrada.value;
  const resultado = desencriptador(dato);
  taSalida.value = resultado;
});

function encriptador(algo) {
  const textoEncriptado = algo
    .replace(/a/g, "AI")
    .replace(/e/g, "ENTER")
    .replace(/i/g, "IMES")
    .replace(/o/g, "OBER")
    .replace(/u/g, "UFAT");
  return textoEncriptado.toLowerCase();
}

function desencriptador(algo) {
  const textoDesencriptado = algo
    .replace(/ai/g, "A")
    .replace(/enter/g, "E")
    .replace(/imes/g, "I")
    .replace(/ober/g, "O")
    .replace(/ufat/g, "U");
  return textoDesencriptado.toLowerCase();
}

// BOTON COPIAR
btnCopiar.addEventListener("click", function () {
  const dato = taSalida.value;
  navigator.clipboard.writeText(dato);
});
