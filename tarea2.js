

var valor = prompt("Introduce una letra");
var busqueda = "abcdefghijklmnñopqrstuvwxyz";
var resultado = buscarString(valor);



alert("La posicion es: "+resultado);



function buscarString(valor) {

     return busqueda.indexOf(valor)


}
