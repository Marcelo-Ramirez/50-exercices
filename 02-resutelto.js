/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
function fibonacci(){
    let num1 = 0
    let num2 = 1
    let suma
    console.log(num1)
    console.log(num2)
    for(let i = 0; i<50; i++){
        suma = num1 + num2
        console.log(suma)
        num1 = suma - num1
        num2 = suma
    }
}
fibonacci()