// capturar botones
// document.querySelector -> busca en el documento html la clase o id ingresada en el ()
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");

// capturar textareas
const taEntrada = document.querySelector(".ta-entrada");
const taSalida = document.querySelector(".ta-salida");

// addEventListener -> escucha el evento click
// addEventListener -> escucha el evento click
btnEncriptar.addEventListener("click", function () {
  // capturamos el valor del textarea y lo asignamos a la variable dato
  const dato = taEntrada.value;
  // creamo una variable 'resultado' donde guardamos el texto encriptado obtenido al llamar la funcion encriptador --1
  const resultado = encriptador(dato);

  // el valor del resultado lo asignamos al text area de salida
  taSalida.value = resultado;
});

btnDesencriptar.addEventListener("click", function () {
  const dato = taEntrada.value;

  const resultado = desencriptador(dato);

  taSalida.value = resultado;
});

// --1.1
function encriptador(algo) {
  const textoEncriptado = algo
    .replace(/a/g, "AI")
    .replace(/e/g, "ENTER")
    .replace(/i/g, "IMES")
    .replace(/o/g, "OBER")
    .replace(/u/g, "UFAT");
  return textoEncriptado.toLowerCase();
}
// hola
// a: holAI
// e: holAI
// i: holAI
// o: hOBERlAI
// u: hOBERlAI

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
  // clipboard: donde se guardan la informacion al hacer ctrl c o copiar
  // writeText: guarda la informacion en el clipboard
  navigator.clipboard.writeText(dato);
});
