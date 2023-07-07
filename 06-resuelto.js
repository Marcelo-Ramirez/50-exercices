/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function reverseString(str){
    let result = ''
    for(let i = str.length-1; 0 <= i; i--){
        result = result + str[i]
    }
    return result
}
console.log(reverseString('Hola mundo'))