/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel)
 *   o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 */

function whoWon(array) {
  let player1 = 0;
  let player2 = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == "R" && array[i][1] == "S") {
      player1++;
    } else if (array[i][0] == "R" && array[i][1] == "P") {
      player2++;
    } else if (array[i][0] == "S" && array[i][1] == "P") {
      player1++;
    } else if (array[i][0] == "S" && array[i][1] == "R") {
      player2++;
    } else if (array[i][0] == "P" && array[i][1] == "R") {
      player1++;
    } else if (array[i][0] == "P" && array[i][1] == "S") {
      player2++;
    }
  }
  if (player1 > player2) {
    return "Player1";
  } else if (player2 > player1) {
    return "Player2";
  } else {
    return "Tie";
  }
}

console.log(
  whoWon([
    ["R", "S"],
    ["S", "P"],
    ["R", "P"],
    ["P", "S"],
  ])
);
