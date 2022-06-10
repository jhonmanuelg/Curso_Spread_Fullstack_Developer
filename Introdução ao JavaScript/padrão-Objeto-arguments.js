// Funções Valores padrão e Objeto "arguments"

// Funções Valores padrão

function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;

  return a * b;
}

//multiply(5, 2); // 10
// 5
multiply(5); // 5

console.log(multiply(5, 2));
console.log(multiply(5, 1));
console.log(multiply(5));

// Funções Objeto arguments

function myConcat(separator) {
    
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
  
}

console.log(myConcat)