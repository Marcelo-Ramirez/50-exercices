/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */
function getBinary(num){
    let numero = num
    let result = ''
    while(true){
        if(numero%2 === 1){
            numero = (numero/2)
            numero = Math.floor(numero)
            result+=1
            if(numero === 1){
                result +=1
                break
            }
        }else if(numero%2 === 0){
            result+=0
            numero = (numero/2)
            if(numero === 1){
                result +=1
                break
            }
            numero = Math.floor(numero)
            
        }
    }
    let result2 = ''
    for(let i = result.length -1; 0<=i; i--){
        result2 = result2 + result[i]
    }
    return result2
}
console.log(getBinary(42))

//Refactorizar no esta muy legible el codigo pero funciona