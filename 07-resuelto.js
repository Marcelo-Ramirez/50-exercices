/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */
function amountWords(text){
    //crear un array con solo las palabras
    function estaLaLetra(letra){
        const abcMin = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        const abcMay = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        let siEsta = false
        for(let i = 0; i<abcMin.length; i++){
            if(abcMin[i] === letra)
                siEsta = true
        }
        return siEsta
    }
    let result = []
    let sinespaciosnisignos = ''
    for(let i = 0; i<text.length; i++){
        let espaciosSignos = true
        if(estaLaLetra(text[i])){
            sinespaciosnisignos += text[i]
        }else if(sinespaciosnisignos != ''){
            result.push(sinespaciosnisignos)
            sinespaciosnisignos = ''
        }
        if(i === text.length-1 && estaLaLetra(text[i])){
            result.push(sinespaciosnisignos)
        }
    }
    let cuantoHay = {}
    result.forEach(elemet => {
        cuantoHay[elemet] ? cuantoHay[elemet] = cuantoHay[elemet] + 1 : cuantoHay[elemet] = 1
    })

    let cuantoHayOrdenado = {}
    for(let key in cuantoHay){
        cuantoHayOrdenado
    }

    return cuantoHay
}
console.log(amountWords('hola, como estas !  soy nuevo en esto , hola, estas, gato patata gato '))