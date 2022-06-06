// function soma(a, b){
//     return a + b;
// }

// soma(1, 8)

/*  Sintaxe e Operadores
    Atividade prática

Atividade:

* crie uma função que receba dois número como parametros.
* confira se os número
* Confira se a soma dos número é maior que 10 ou menor que 20.
* Retorne uma string dizendo "Os número num1 e num2 não/são iguais. 
Sua soma é: soma, que é maios/menor que 10 maior/menor que 20"

Input: 1, 2
Output: os números 1 e 2 não são iguais sua
soma é 3, que é menor que 10 e menor que 20

*/

// function comparaNumeros(num1, num2) {
//   //  explicaçaõ 1
//   // const saoIguais = num1 === num2;
//   // const soma = num1 + num2;
//   // if(saoIguais){
//   //     return "São iguais"
//   // }
//   // return saoIguais ? "Não são iguais" : "não são iguais"

//   // explicação 2

// }
function comparaNumeros(num1, num2) {
    if(!num1 || !num2) return "defina dois número!";

  const primeiraFrase = criaPrimeiraFrase(num1, num2);
  const sengundaFrase = criaSegundaFrase(num1, num2);

  return `${primeiraFrase} ${sengundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
  let saoIguais = '';

  if (num1 !== num2) {
    saoIguais = "não";
  }

  return `Òs número ${num1} e ${num2} ${saoIguais} são iguais. `;
}

function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2;

  let resultado10 = "menor";
  let resultado20 = "menor";

  const compara10 = soma > 10;
  const compara20 = soma > 20;

  if (compara10) {
    resultado10 = "maior";
  }
  if(compara20){
      resultado20 = 'maior';
  }
  
  return `Sua soma é ${soma}, que é ${resultado10}, que 10 e ${resultado20}, que 20`;
}

console.log(comparaNumeros())