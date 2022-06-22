## Coleções Apresentação do curso.
*  significa que os elementos serão recuperados na mesma ordem em que foram inseridos
****
* Objetivo do curso.

1: Apresentar o objeto Map.

2: Aprensentar o objeto set

### percurso.

* Aula 1 Map.
* Aula 2 Set.

## Coleções Estrutura, Métodos e Map vs Objeto.
 * Objetivos
 
 1: Apresentar a coleção Map.

 2: Explicar sua aplicação.

 3: Eplicacar a diferença entre Map e Objeto. 

## Map, Filter e Reduce Apresentação do curso. 

* Objetivo:

Demostrar a utilizacão de tres metodos importantes para arrays.


Map-Filter-Reduce.js

### percuso.
* Aula 1 Map.
* Aula 2 Filter 
* Aula Reduce
* Atividade Pátrica.

## Metodo o Map:

chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada.

1: Conhacer a implementação do método Map.


### O que é:
* Cria um novo array
* Não modifica o array Original
*Realiza as operações em orden.

![Map, Filter e Reduce](img/Map%2C%20Filter%20e%20Reduce.png "Map, Filter e Reduce").

*  array.amp(callback, thisArg);
* callback(item, index, array);

* Callback: função a ser executada em cada elemento em cada elemento.
* thizArg (opcional): vaçpr de 'this' dentro da função de callback.

### MAp vs forEach:
conast array = [1, 2, 3, 4, 5,];
* array.map((item) => item * 2);

// retorna [2, 4, 5, 8, 10];

const array = [1, 2, 3, 4, 5];
* array.forEach((item) => item * 2);
// retorna undefined

### Filter e Sintaxe

* Filter;

cria um novo array

Não modifica p array original original 

### Parametros 
* array.filter(callback, thisArg);

- Callback: função a ser executada em cada elemento.
- thisArg (opcional): valor de 'this' dentro da função de callback.

#### Exemplo:
* const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];
* furtas´filter((fruta) => fruta.includes('maçã'));
// retorna ['maçã fuji', 'maçã verde'];

### Reduce e Sintaxe
* O que é:

Executar uma função em todos os elemento dos array, string o numero retornando um valor único.

![Reduce e Sintaxe](img/reducs%20js.png "Reduce e Sintaxe");

#### Sintaxe.
* array.reduce(callbackFn, initialValue);
* Callback: funçãp a ser executada a partir do acumulador;
* initialValue: valor sobre o retorno final irá atuar.

#### Rxemplo:
* const callbackFn = function(accomulator, currentValeu, item, array){ 
  // do something

};

array.reduce(callbackFm, initialValue);

* Accumulator/prevValue: acomulador de todas as chanadas de callbackFn.
* currentValue: elemento atual sendo acessado pela função.

