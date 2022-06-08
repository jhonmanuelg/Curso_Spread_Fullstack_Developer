// Variáveis e Tipos Verificar palíndromo

// salução 1

function verificarPalíndromo(string) {
  if (!string) return "string inexistente";

  return string.split("").reverse().join("") === string;
}

console.log(verificarPalíndromo("jh"));

// solução 2
// omo conpara os carateres

function verificarPalíndromo(string) {
  if (!string) return "string inexistente";

  for (let i = 0; i < string.length / 1; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(verificarPalíndromo("jhon"));
