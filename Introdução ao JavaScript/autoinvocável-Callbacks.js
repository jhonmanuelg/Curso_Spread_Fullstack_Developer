// Funções Função autoinvocável e Callbacks

// Função Callbacks
function greeting(name) {
  console.log("Olá " + name);
  //alert('Olá ' + name);
}

function processUserInput(callback) {
  var name = "Por favor insira seu nome.";
  // var name = prompt('Por favor insira seu nome.');
  callback(name);
}

processUserInput(greeting);

//
function map(f, a) {
  var result = []; // Cria um novo Array
  var i;
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}

// Função autoinvocável

var result = (function () {
  var nome = "Felipe";
  return nome;
})();
// Imediatamente gera a saída:
result; // "Felipe"
console.log(result)