// Variáveis e Tipos Substituir números pares

function substituirPares(array1) {
    if(!array1) return -1;
   if(!array1.length) return 'Sua array esta vacio';
   

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === 0) {
      console.log("vacê já é zero");
    } else if (array1[i] % 2 === 0) {
      console.log(`Sutituindo ${array1[i]} por 0...`);
      array1[i] = 0;
    }
  }
  return array1;
}


let arr = [1, 34, 65, 56, 2, 89, 21, 173]

console.log(substituirPares([arr]));
console.log(substituirPares(null));
console.log(substituirPares(undefined));

/*
Sutituindo 34 por 0...
Sutituindo 56 por 0...
Sutituindo 2 por 0...
[
  1,  0, 65,   0,
  0, 89, 21, 173
]
=======================

[ [
    1, 34, 65,  56,
    2, 89, 21, 173
  ] ]
undefined
undefined

*/

