// Funções Atividade prática

// Atividade prática #1
const alunos = [
  {
    nome: "jaõa",
    nota: 5,
    turma: "1B",
  },
  {
    nome: "sofia",
    nota: 6,
    turma: "1B",
  },
  {
    nome: "jhon",
    nota: 9,
    turma: "2C",
  },
  {
    nome: 'miguel',
    nota: 3,
    turma: '3A'
  }
];

function alunosAprovados(arr, media) {
  let aprovados = [];
  for (let i = 0; i < arr.length; i++) {
      const {nota, nome} = arr[i];

    if(arr[i].nota >= media){
        aprovados.push(arr[i].nome, arr[i].nota, arr[i].turma)
    }
  }
  return aprovados
}

console.log(alunosAprovados(alunos, 6))


// Atividade prática #2

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} tera ${
        this.idade + anos
    } amos de idade.`
}

const pessao1 = {
   nome: 'karla',
   idade: 30
}

const pessao2 = {
   nome: 'jhon',
   idade: 40
}

const aminal = {
    nome: 'principe',
    idade: 4
}


console.log(calculaIdade.call(pessao1, 40))
console.log(calculaIdade.apply(pessao2, [56]))
console.log(calculaIdade.call(aminal, 10))


