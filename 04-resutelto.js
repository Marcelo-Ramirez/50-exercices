/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */
function areaPoligono(polygon,base,altura){
    switch (polygon){
        case 'triangle':
            return base * altura / 2
            break
        case 'square':
            return base * altura
            break
        case 'rectangle':
            return base * altura
            break
        default:
            return 'Error'
    }
}

console.log(areaPoligono('triangle', 5, 7))