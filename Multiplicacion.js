function multiplicacion (numero1, numero2){
    if (numero1 === 0 || numero2 === 0){
        console.log("La multiplicacion por 0 da siempre 0");   
    }
        return  numero1*numero2;
}
module.exports = multiplicacion;