/*
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */

function orderList(array, typeOrder){
    if(typeOrder == "Asc"){
        while(true){
            let position = 0
            let min = 0
            for(let i = 0; i< array.length; i++){
                if(array[i]< min && array[position] != min){
                    min = array[i]
                }
            }
            array[position] == min
            position++
        }

    }
}