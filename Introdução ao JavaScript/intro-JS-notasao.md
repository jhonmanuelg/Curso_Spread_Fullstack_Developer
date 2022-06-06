# Introdução ao JavaScript

----

## História, Evolução e Aplicações.


* Apresentação do curso ADS: Stephany Nusch.

### Objetivo do curso:

Entender o que é javascript, suas aplicações na vida real e conhecer o mercado de trabalho.

### Percurso.

* Aula 1 O que é Javascript

* Aula 2 Recursos basico da linguagem

* Aula 3 Consola

* Aula 3 Javascript unma página da web

* Aula 5 Atividade prática

* Aula 6 Frameworks e mercado de trabalho

*****


## Ojetivo

1: Entender a historia da linguagem.

2: Conhecer as principais evoluções.

3: Conhecer aplicações na vida real.

## O que es javascripte.

= uma linguagem de programação que permite a você implementar itens complexos em páginas web toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc.

### História

* interpretada (rodado em tempo real)

* Baseado em protótipos 

* Multiparadigma

* Comunmente utilizado em aplicações web client-sadi

* Segue o padrão ECMASCRIPT

## Evalução de Javascript.

* ECMAScript 1 => First edition 1997

* ECMAScript 2 => Editorial changes only  1998

* ECMAScript 3 => Regular Expressions. try/catch 1999

* ECMAScript 4 => Never released 1999

* ECMAScript 5 => "strict mode# JSON support String.trim(). Array.isArray(). Array Iteration Methods.

* ECMAScript 6 2015. 

## Aplicações onde usa JS

* Web

* Mobile

* Smartwatches

* Games 

* Internet of things

* APIs

## Manipulando um arquivo

### Objetivos

1: Se familiarizar com a sintaxe da linguagem

2: Entender a diferença entre variavel e constante

3: Ser capaz de comenstar seu código

****
Como ler um arquivo em JavaScript?
Use a interface FileReader para ler arquivos de texto em JavaScript. O objeto FileReader permite que aplicativos da web leiam de forma assíncrona o conteúdo dos arquivos (ou buffers de dados brutos) salvos no computador do usuário. Usaremos o método FileReader. readAsText() para ler o arquivo de texto.

****

## Sintaxe e Operadores
* Apresentação do curso

### Percurso:

Aula 1: Operadores.

Aula 2: Atividade prática.
---

### Aula 1: Operadores.

= Variáveis e tipos.

##### Objetivo:

* Conhecer os operadores mais ppulares do javascript.


##### tipo de operadores são

* Aritimetrica
* Atribuição
* Comparação
* Logica
* Condicional

#### Que são **Atribuição**
  ( = )(x = y)(x = y)

   (+=)(x += y)(x = x+y)

   (*=)(x *= y)(x = x *y)

   (/=)(x/=y)(x = x/y)

   (%=)(x %=y )( x = x % y)

   ------

   #### Aritimetrica são:

* ( + Adição)

* ( - Sutração )

* (* Multiplicação)

* ( ** Exponencial)

* ( / Divisão)

* ( % Modulo)

* ( ++ Incrementar)

* ( -- Decrementar)

-----

#### Comparação são:

* (== é igual a)
* (=== Mesmo valor mesmo tipo)
* (!= Diferente)
* (!== Valores e tipos diferente)
* (> Maior que)
* (< Menor que)
* (=> Maior ou que)
* (<= Menor ou que)

----

#### * Logica

* (&& "e" lógico)
* (|| "ou" lógico)
* (! "não" lógico)

---

#### * Condicional

( false ( true (condition) ? expression1 ) : expression2 )

if(condition){
    statement; //va com expression1
} else {
   statement; //va com expression2
}

----

### Sintaxe e Operadores
Explicando a atividade

####  Sintaxe e Operadores

Atividade:

* crie uma função que receba dois número como parametros.
* confira se os número
* Confira se a soma dos número é maior que 10 ou menor que 20.
* Retorne uma string dizendo "Os número num1 e num2 não/são iguais. Sua soma é: soma, que é maios/menor que 10 maior/menor que 20"

----

## Variáveis e Tipos
**Apresentação do curso**

* Objetivo do curso.
Explicar as principais estruturas de dados do Javascript como utilizá-las e suas possibilidades.

#### Percuso:

Aula 1: De atribuindo valores.

Aula 2: Tipos.

Aula 3: Atividadre prática.

## Var e let

* Scope diferentes
* Hoisting
* Redeclaração
* Reatribuição
* camelCase

----
* Exemplo.

var a = 1;
var b = 2:

if(a === 1)
{
 
 var a = 11; //scope global

 let beraTere = 22; // scope de if-block

 console.log(a); //11

 console.log(beraTere); //22

}; 

console.log(a); //11

console.log(b); //2

### concepto de Hoisting.

* É a razão pela qual você pode, às vezes, se deparar com o código de outras pessoas, no qual as variáveis são declaradas logo no topo e, em seguida, recebem valores posteriormente.


## Variáveis e Tipos
* Constantes

1: const DAYS_IN_WEEK =7;

2: const MY_NOME = "Kieran:

* Declarada em SMAKE_UPPER_CASE.
* Scope de bloco.
* Não faz hoisting.

## Variáveis e Tipos let, var e const

....................var ...... const ....let..

scope.......Global uo local.....bloco....bloco..

redeclarar......................sim........não........não....

reatibuir.........................sim........não..........sim...

hoisting..........................sin..........não...........não..

## Variáveis e Tipos Estrutura de dados

### Objetivos

1. Apresentar as pricipais estruturas de dados do javascript e seus principais métodos.


### Que são Estrutura de dados

*  é uma maneira particular de organizar dados em um computador com o intuito de usar os recursos de modo eficaz. As estruturas de dados e os algoritmos são a base de todas as soluções para qualquer problema de programação.

* **O que são tipos de dados JavaScript**
Resultado de imagem para que são estrutura de dados javascript
Os tipos de dados de uma variável Javascript podem ser: String: quase qualquer valor entre aspas simples ou aspas duplas; Numérico: números; Booleano: true (verdadeiro) ou false (falso).

#### tipos de dados são: primitives:
* Boolean.
* Null.
* Undefined.
* Number.
* BigInt.
* String.
* Symbol.

#### tipos de dados são: NÂOprimitives:
* objetos.
* Arrauys.
----
### Tipos Estrutura de dados img


![imagen, Tipos Estrutura de dados](img/Tipos%20Estrutura%20de%20dados.png)



