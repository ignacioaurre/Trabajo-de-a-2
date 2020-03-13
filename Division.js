function division (numero1, numero2){
    if (numero2 === 0){
        console.log("La division por 0 no es valida");
    }
    else {
        return numero1/numero2;   

    }
}
module.exports = division;