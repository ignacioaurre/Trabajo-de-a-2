console.log('Desde la calculadora');

function restar (numero1, numero2) {
    return numero1 - numero2;
}
console.log(restar (25, 5));

function multiplicar (numero1, numero2) {
    if (numero1 === 0 || numero2 === 0) {
        console.log('0 * X da 0');
        
    }
    return numero1 * numero2;
}
console.log(multiplicar (5, 0));

function dividir (numero1, numero2) {
    if (numero2 === 0){
        
        return 'la operacion no se pouede hacer'
        
    }
    return numero1 / numero2;
}
console.log(dividir(10, 2));

let sumar = require ('./sumar')

console.log(sumar (6, 18));
