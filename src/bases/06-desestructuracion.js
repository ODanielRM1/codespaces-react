// Desestructuracion de un objeto
// asignacion desestructurante
const persona = {
    nombre: 'Tony',
    apellido: 'rodriguez',
    direccion: {
        calle: 'california',
        numero: 123,
        estado: 'mexico',
    },
    edad: 23,
    clave: 'ElIromanxd',
};

const { nombre: nomuser, edad, clave, } = persona;

// console.log(persona.nombre);
// console.log(persona.edad);
//console.log(persona.direccion.estado);
const direc = (persona.direccion.estado);
const direc2 = (persona.direccion.calle);
const direc3 = (persona.direccion.numero);

const userDirect = (direc +` `+ direc2 +` `+ direc3);
console.log(userDirect);
console.log(edad + ` 2`);
console.log(clave + ` 2`);


/**
 * @param { ejercicio1 } username 
 */

const retornaPersona = (username) => {
    console.log(username)
}
retornaPersona(persona);



/**
 * @param { ejercicio2 } param0 
 */


const retornaPersona2 = ({ nombre, edad }, userDirect) => {
    console.log(nombre, edad, userDirect)
}
retornaPersona2(persona, userDirect);


/**
 * @param { ejercicio3 } param0 
 */


const retornaPersona3 = ({ nombre, edad, rango = 'general' }, userDirect) => {
    console.log(nombre, edad, rango, userDirect)
}
retornaPersona3(persona, userDirect);



/**
 * @param { ejercicio4 } param0 
 */

const recarausr = ({ clave, nombre, edad, rango = 'general' }, userDirect) => {
    return{
        nombreclave: clave,
        nameuserc: nombre,
        renuser: edad,
        ranfouser:rango,
        direuser:userDirect
    }
}
const {nombreclave, nameuserc,renuser,ranfouser,direuser} = recarausr(persona, userDirect);
console.log(nombreclave, nameuserc,renuser,ranfouser,direuser);



const AppContext = ({clave,nomuser,edad})=>{
    return{
        userclable:clave,
        usernombre:nomuser,
        useredad:edad,
        latlng:{
            lat:156.213324,
            lng:287.312647,
        }
    }
}
const {userclable,usernombre,useredad,latlng:{lat, lng}} = AppContext(persona);

console.log(userclable,usernombre,useredad);
console.log(lat,lng);