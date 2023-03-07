/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arreglo = [];
   for (let clave in objeto) {
      arreglo.push([clave, objeto[clave]]);
   }
   return arreglo;
   
   // return Object.entries(objeto);
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let resultado = {};

   for (let i=0; i<string.length;i++){
      if (Object.hasOwn(resultado, string[i]) ){
         resultado[string[i]] = resultado[string[i]] + 1;
      } else {
         resultado[string[i]] = 1 ;
      }
   }
   return resultado;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   return string.split("").filter(x => x.charCodeAt(0) > 64 && x.charCodeAt(0) < 91).concat(string.split("").filter(x => x.charCodeAt(0) > 96 && x.charCodeAt(0) < 123)).join("");

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let arrayFrase = frase.split(" ");
   let arrayPalabra = [];
   for ( i = 0; i < arrayFrase.length ; i++ ) {
      let narrayPalabra = [];
      arrayPalabra = arrayFrase[i].split("");
      for ( j = 0 ; j < arrayPalabra.length ; j++ ) {
         narrayPalabra.unshift(arrayPalabra[j]);
      }
      arrayFrase[i] = narrayPalabra.join("");
   }
   return arrayFrase.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   numeroT = numero.toString()
   oremunT = numero.toString().split("").reverse().join("");
   if (oremunT === numeroT){
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   return string.split("").filter(x => x !== "a" && x !== "b" && x !== "c").join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   
   let arrayNuevo = [];
   let indice = 0;
   let valor = "";
   do {
      valor = arrayOfStrings[0]; 
      indice = 0;
      for ( i=1 ; i < arrayOfStrings.length ; i++ ) {
         if (arrayOfStrings[i].length >= valor.length ) {
            valor = arrayOfStrings[i];
            indice = i;
         }
      }
      arrayNuevo.unshift(valor);
      arrayOfStrings.splice(indice,1);
   } while (arrayOfStrings.length > 0);
   
   return arrayNuevo
   
   /*return arrayOfStrings.sort(function( a, b ){ return a.length - b.length;})*/
 }



function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let newArray = []
   for ( i=0 ; i<array1.length ; i++) {
      if (array2.includes(array1[i])){
         newArray.push(array1[i]);
      }
   }
   return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
