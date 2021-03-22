var arregloNombres= ["Luis", "Diana", "Omar", "Paola"];

console.log( arregloNombres[2] );

arregloNombres[2]="Rosa";
console.log( arregloNombres[2] );

delete arregloNombres[2];
console.log( arregloNombres);

console.log( "La cantidad de lementos "
              + "en el arreglo es: " 
              + arregloNombres.length );

arregloNombres.push( "Cristina");
console.log( arregloNombres );

arregloNombres.pop();
console.log( arregloNombres );
//Agrega en la pos 0  a Cristina, borrando el que esté ahi
arregloNombres.splice( 0,1,"Cristina");
console.log( arregloNombres );
//Agrega en la pos 0  a Luis, sin borrar ningun elemento, solo recorre la pos de los posteriores
arregloNombres.splice( 0,0,"Luis");
console.log( arregloNombres );
//Borra a partir de la pos 1, 4 elementos
arregloNombres.splice( 1, 4 );
console.log( arregloNombres );

//ejercicio: realizar un prog que lea por teclado 5 notas
//y muestre el promedio de estas. Usando un arreglo
/*
//para poder usar el prompt:
const prompt=require('prompt-sync')();

var calif = [];
calif[0]=parseInt(prompt("Dame la 1er calificación: "));
calif[1]=parseInt(prompt("Dame la 2da calificación: "));
calif[2]=parseInt(prompt("Dame la 3er calificación: "));
calif[3]=parseInt(prompt("Dame la 4ta calificación: "));
calif[4]=parseInt(prompt("Dame la 5ta calificación: "));

var resultado = (calif[0] + calif[1] + calif[2] + 
                calif[3] + calif[4]);
resultado /= 5;
console.log("El promedio de las calificaciones: "+ calif);
console.log("es: " + resultado);
*/

var concatenaN1 = ["Hola", "Buenas", "Tardes"];
var concatenaN2 = ["Adios", "Buenas", "Noches"];
console.log( concatenaN1.concat( concatenaN2) );
