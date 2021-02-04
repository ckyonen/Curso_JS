
// Pregunta 1

var numero = prompt("Introduce un número entero");
var resultado = parImpar(numero);

alert("El número "+numero+" es "+resultado);

function parImpar(numero) {
    if(numero % 2 == 0) {
        return "par";
    }
    else {
        return "impar";
    }
}

// Pregunta 2

var valor = prompt("Introduce una letra");
var busqueda = "abcdefghijklmnñopqrstuvwxyz";
var resultado = buscarString(valor);



alert("La posicion es: "+resultado);



function buscarString(valor) {

     return busqueda.indexOf(valor)


}


// Pregunta 3

    function Calculo() {

        var Iva = 0.19;
        var Number1=parseInt(document.getElementById('Num1').value);

        var Result;
        Result = Number1 + (Number1 * Iva);
        alert("El Resultado es "+Result);


    }


// Pregunta 4

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


// Pregunta 5


function Session() {




    var l_nombre= document.getElementById('nombre').value ;
    var l_edad=parseInt(document.getElementById('edad').value);





    sessionStorage.setItem(l_nombre, l_edad);
    localStorage.setItem(l_nombre, l_edad);

}



