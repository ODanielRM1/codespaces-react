// Arreglos en Javascript 
// es una coleccion deinformacion que se
// almacena dentro de una misma variable
/**

const arreglo = new Array( 100 );
const arregle = [];
arregle.push(1);
arregle.push(2);
arregle.push(3);
arregle.push(4);
arregle.push(5);
const arregla = [5,4,3,2,1];

*/
//Se recomienda no usar el push a un arreglo ya que este modifica
//la naturaleza del arreglo original
const arreglo =[1,2,3,4];
let arreglo2 = ([...arreglo,5]);

// const arreglo3 = arreglo2.map();
// console.log(arreglo3);
const arreglo3 = arreglo2.map( function(numero) {
return numero * 2
});
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);


