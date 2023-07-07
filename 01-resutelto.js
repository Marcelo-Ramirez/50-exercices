/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnagram(string1, string2){
    if(string1.length != string2.length) return false
    for(let i = 0; i<string1.length; i++){
        var siHay1 = false
        var siHay2 = false
        for(let f = 0; f<string2.length; f++){
            if(string1[i] === string2[f]){
                siHay1 = true
            }
            if(siHay1) break
        }
        if(!siHay1) break
        for(let f = 0; f<string1.length; f++){
            if(string2[i]===string1[f]){
                siHay2 = true
                if(siHay2) break
            }
        }
        if(siHay1 === true && siHay2 === true){
            return true
        }else{
            return false
        }
    }
    return false
}
console.log(isAnagram('ñata','aata'))
console.log(isAnagram('aata','aata'))
