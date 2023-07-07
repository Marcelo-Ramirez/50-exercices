/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */
function morseTranslate(str){
    const morse = [
        '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
        '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
        '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
        '-.--', '--..'
    ]
    const abcMay = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const abcMin = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for(let i = 0; i<str.length; i++){
        for(let f = 0; f<abcMay.length; f++){
            if(str[i] === abcMay[f] || str[i] === abcMin[f] && i!= str.length-1){
                result = result + morse[f] + ' '
            }else if(str[i] === ' '){
                result = result + ' '
                break
            }if(i === str.length-1){
                result = result + morse[f]
                break
            }
        }
    }

    
    return result
}
console.log(morseTranslate('hola'))