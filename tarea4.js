
var nombre = "Julio";
var min = 1;
var max = 5;

getRandomArbitrary(min,max);

function getRandomArbitrary(min, max) {


    var resultado;

    resultado = Math.random() * (max - min) + min;
    redondear = Math.round(resultado);

    console.log(nombre+" tiró un dado y salió "+redondear);

}


