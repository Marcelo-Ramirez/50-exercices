/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */
function numPrimo(){
    let numbersPrimo = [2,3,5,7]
    for(let i = 0; i<=100; i++){
        let restoCero = false
        if(i === 0 || i === 1) continue
        if(i === 2 || i === 3 || i === 5 || i === 7){
            console.log(i)
            continue
        }
        for(let f = 0; f<numbersPrimo.length; f++){
            if(i%numbersPrimo[f] === 0){
                restoCero = true
                break
            }
        }
        if(restoCero){
            continue
        }else{
            console.log(i)
        }
    }
}
numPrimo()