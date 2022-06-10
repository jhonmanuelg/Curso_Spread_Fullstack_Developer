// Funções For e While.

//===============For==============


let pessoa = {
    nome: 'João Silva',
    idade: 23,
    profissao: 'Programador'
};
 
for (const propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}

let i = 5;

for (let i = 0; i < 10; i++) {
  console.log(i);
}


// ====================While=============

const cores = [
    'Verde',
    'Amarelo',
    'Azul',
    'Branco'
  ];
  
  let index = 0;
  
  while (index < cores.length) {
    console.log(index, cores[index]);
    index++;
  }