// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let result = [];
  for (let value in objeto){
    let arr2 = []
    arr2.push(value);
    arr2.push(objeto[value])
    result.push(arr2);
  }
  return result;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
    let object = {};
    let array = string.split("");
    for(let i = 0; i< array.length; i++){
      if(Object.keys(object).includes(array[i])){
        object[array[i]] ++;
      } else {
        object[array[i]] = 1;
      }
    }
    return object;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let array = s.split("");
  let word = '';
  for (let i = 0; i < array.length; i++) {
    if(array[i] === array[i].toUpperCase()) {
      word = word + array[i];
    }
  }
  for (let x = 0; x < array.length; x++) {
    if(array[x] === array[x].toLowerCase()) {
      word = word + array[x];
    }
  }
  return word;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let array1 = [];
  let array = str.split(" ");
  array.forEach(word => {
   	let letter = word.split("").reverse().join("");
    array1.push(letter);
  })
  return array1.toString().split(",").join(" "); 
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if((numero.toString().split("").reverse().join("")) === numero.toString()){
    return "Es capicua"
  } else {
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let result = "";
  let arr = cadena.split("");
  arr.forEach(letter => {
    if(letter !== "a" && letter !== "b" && letter !== "c"){
      result += letter;
    }
  })
  return result;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let result = arr.sort((a, b) => a.length - b.length);
  return result;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let array = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let x = 0; x < arreglo2.length; x++) {
      if (arreglo1[i] === arreglo2[x]) {
        array.push(arreglo1[i]);
      }
    } 
  }
  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};