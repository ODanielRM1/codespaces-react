const persona={
    nombre:'Oliver',
    apellido:'rodriguez',
    edad:23,
    direccion:{
        ciudad:'Toluca',
        estado:'Mexico',
        codepost:59950,
    },
};
// console.log( {persona:persona} );
//console.table( persona );
//no se puede asignar un nuevo valor haciendo referencia a un objeto como
//como si fuera una variable diferente ya que solo se hace indice al los valores
//ya cargados y estos solo se actualizaran, no se creara un segundo obseto con otros valores (no se CLONA)
//const persona2 = persona;
/**
persona2.nombre= 'petter';
console.log( persona );
console.log( persona2 );
***/
//Para clonar un objeto se debe seguir de la siguiente forma,
//se cargaran dos objetos diferentes en memoria
//------>
const persona2 = {...persona};
persona2.nombre='Petter'

console.log( persona2 );
console.log( persona );
