/*
 * Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno).
 * ¿De cuántas maneras eres capaz de hacerlo?
 * Crea el código para cada una de ellas.
 */

function forma1() {
  for (let i = 1; i < 101; i++) {
    console.log(i);
  }
}

function forma2() {
  while (true) {
    let i = 1;
    console.log(i);
    i++;
    if (i == 101) break;
  }
}

function forma3(init) {
  if (init == 101) return;
  console.log(init);
  forma3(init + 1);
}

function forma4() {
  function conts() {
    let cont = 0;
    return function () {
      cont += 1;
      console.log(cont);
      return cont;
    };
  }
  let cont = conts()
  while(true){
    if(cont() == 100){
        break
    }
  }
}

