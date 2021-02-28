
// Ejercicio Nro 1

const filtrarOrdenes = () => {
    const resultado = sandwichOrders.filter(sandwichOrder =>sandwichOrder.ingredients.includes('lechuga', 'palta'))

    console.log(resultado)

}

// Ejercicio Nro 2

const findOrder = (id) => {
    const result = sandwichOrders.find(sandwichOrder => sandwichOrder.id === id)


    if(result) {
        return `La orden fue realizada el ${result.ordered} la orden llevó ${result.bread} y ${result.ingredients}`

    }

    return `No se encontró la orden con id ${id}`


}





// Ejercicio Nro 3
const findOrderOfIngredients = (id) => {
    const result = sandwichOrders.filter(sandwichOrder =>sandwichOrder.ingredients.includes('pepinillos'))
        .find(sandwichOrder => sandwichOrder.id === id)

    if(result){
        return 'Encontrado!'
    }

return 'No Encontrado'

}

// Ejercicio Nro 4


const filterOrdersByType = ({ type = '', filter = ''}) => sandwichOrders.filter(sandwichOrder => sandwichOrder[type] === filter)

filterOrdersByType({ type: 'ordered', filter: '01-10-2020'}).length;



// Ejercicio Nro 5


const buscar5 = () => {
    const resultado = sandwichOrders.filter(sandwichOrder =>sandwichOrder.ingredients.includes('cebolla caramelizada'))

    console.log(resultado)







}



