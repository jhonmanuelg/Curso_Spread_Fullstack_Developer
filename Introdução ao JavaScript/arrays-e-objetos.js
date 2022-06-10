// Funções Arrays e Objetos.

//===============Arrays==============

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);

// ========================Arrays==========

function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]

//============objetos===============

var pessoa = {
    nome: ['Bob', 'Smith'],
    idade: 32,
    sexo: 'masculino',
    interesses: ['música', 'esquiar'],
    bio: function() {
      //alert(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
      console.log(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
    },
    saudacao: function() {
      console.log('Oi! Eu sou ' + this.nome[0] + '.');
      //alert('Oi! Eu sou ' + this.nome[0] + '.');
    }
  };
  
  console.log(pessoa);
  console.log(pessoa.nome);