//Funciones en Javascript

const saludar = function (nombre) {
    return `Hola, ${nombre}`
};
// saludar = 30;
// console.log(saludar('DRM'));

//funcion mlanda se cambia el function por la flecha, es 
// es exactamente lo mismo
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
};
// pero esto se puede simplificar, de la siguiente manera

const saludar3 = (nombre) => `Hola, ${nombre}`;

// fUNCION LO MAS MINIMALISTA POSIBLE SIN PERDER SENTIDO DE FUNCTION
const saludar4 = () => `Hola, Prueba simplex`;

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'DRm_123'
    }
}

// se simplifica la anterior funcion de la siguiente forma
const getUser1 = () => ({
    uid: 'ABsasdfC123',
    username: 'DRmsdfsd_123'
});
const user = getUser1();
console.log(user);

console.log(getUser());

console.log(saludar('prueba1'));
console.log(saludar2('prueba2'));
console.log(saludar3('prueba3'));
console.log(saludar4());

// ejercicio generar la siguiente salida  con la funcion a enviar
// transformar la siguiente funcion a flecha
function getUserAvtivo(nommbre){
    return{
        uid:'uname123',
        username:nommbre
    }
};
const usuarioActivo = getUserAvtivo('doliveraniel');
console.log(usuarioActivo)

// resultado del ejercicio tranformado a un arrow function
const ejercicio = (nomuser) => ({
    uid: 'User213',
    username: nomuser,
    edad: 22,
    trabajo: `banjercito`,
});
const salidaeje = ejercicio('daniel');
console.table(salidaeje)

// ejercicio relizado correctamente?? R.- ok




