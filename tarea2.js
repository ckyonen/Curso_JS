// Ejercicio 1

var mascotas = ['perros', 'gatos', 'canarios', 'pez', 'serpiente']

console.log(mascotas)


// Ejercicio 2


function eliminarMascota(par_delete) {

    let pos = mascotas.indexOf(par_delete) // (pos) es la posición para abreviar
    mascotas.splice(pos, 1);
    console.log(mascotas)
}




// Ejercicio 3

function eliminarUltimaMascota() {
    mascotas.pop();
    console.log(mascotas)
}



// Ejercicio 4



function agregarMascota(par_agregar) {
     mascotas.push(par_agregar);
    console.log(mascotas)
}

function contadorMascotas() {


    mascotas.forEach(function(mascota, ){
        // console.log('Mascota: ', mascota, 'es la posición -> ', indiceMascota, ', en el arreglo: ', arrayCompleto)
        var buscar_os = mascota.slice(-2);

        if(mascota == buscar_os){
            contadorOs++;
              console.log('En el arreglo hay' + contadorOs + 'mascotas que terminan con "os"');

        }
    })



}


// Ejercicio 5

const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicación: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google'],

    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,

}

function leerTrabajador(trabajador) {


   console.log('El trabajador ' + trabajador.nombre  + ' trabaja en ' + trabajador.empresa.datos.nombre + ' con cargo ' + trabajador.cargo + ' y le gusta ' + trabajador.gustos + ' y' + ' más,(no tiene hijos)');
   console.log('El trabajador ' + trabajador.nombre  + ' va a su trabajo en ' + trabajador.empresa.ubicación.comuna + ' es ' + trabajador.cargo + ' en el puesto ' + trabajador.empresa.ubicación.puesto + ' trabaja con ' +  trabajador.empresa.clientes);



}
