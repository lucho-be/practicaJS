//1 - Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
/* let resultado1 = document.getElementById("ejercicio1")

function contarCaracteres (cadena) {
    for (let i = 0; i < cadena.length; i++) {
        let contador = 1;
        contador = contador + i;
        resultado1.innerText = contador;
    }    
}
contarCaracteres("hola mundo"); */

function contarCaracteres() {
  let cadena = document.getElementById("ej1").value;
  let resultado = document.getElementById("resultado1");
  if (cadena.length == 0) {
    alert("No ingresaste texto")
}
  for (let i = 0; i < cadena.length; i++) {
    let contador = 1;
    contador = contador + i;
    resultado.innerText = `El texto ingresado tiene ${contador} caracteres.`;
  }
  resultado.classList.add("resultado-negro");
}

function limpiarUno () {
document.getElementById("ej1").value = ""
document.getElementById("resultado1").innerText = "Resultado de la función";
document.getElementById("resultado1").classList.remove("resultado-negro");

}

//2 - Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function cortarTexto () {

  let cadena = document.getElementById("ej2").value;
  let numero =document.getElementById("ej2-num").value;
  let resultado2 = document.getElementById("resultado2");

  if (cadena == "" || numero == "") {
    resultado2.innerHTML = '<p style="color: red;font-weight:bolder">Falta un dato</p>';
  } else {
    let cadenaFinal = [];
    for (let i = 0; i < numero; i++) {
      cadenaFinal.push(cadena[i]);
      resultado2.innerText = cadenaFinal.join("");
    }
  }
}

function limpiarDos () {
  document.getElementById("ej2").value = "";
  document.getElementById("ej2-num").value = "";
  document.getElementById("resultado2").innerText = "Resultado de la función";
  document.getElementById("resultado2").classList.remove("resultado-negro");
  
  }



//3 - Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

let resultado3 = document.getElementById("ejercicio3");

let separarTexto = (cadena = "", caracter = undefined) =>
  !cadena
    ? (resultado3.innerText = "No ingresaste la cadena")
    : caracter === undefined
    ? (resultado3.innerText = "No ingresaste el separador")
    : (resultado3.innerHTML = cadena.split(caracter));

separarTexto("hola como estas", " ");

//4 - Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

//Version de JonMircha:

const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresaste un texto");

  if (veces === undefined)
    return console.warn("No ingresaste el número de veces a repetir el texto");

  if (Math.sign(veces) === -1 || Math.sign(veces) === 0)
    return console.error("No puedes ingresar un número negativo o 0");

  for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
};

repetirTexto("Hola mundo", 3);

// 5 - Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// 6 - Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

// 7 - Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// 8 - Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
