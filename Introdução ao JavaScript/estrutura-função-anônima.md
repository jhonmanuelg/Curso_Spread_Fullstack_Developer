# Estrutura função anônima.

## Ojetivos

1: Apresentar a estrutura de uma função.

2: Alguns outros tipos de funções e como são utilizada.

### Estrutura.

* Definição como de uma função: Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela.

![Estrutura](img/Estrutura%20de%20fun%C3%A7%C3%A3o.png "Estrutura de função")

## Função Anônima:
* funções que representam expressôes
- Uma variável pode armazenar uma função.

![Função Anônima](img/Fun%C3%A7%C3%A3o%20An%C3%B4nima.png "Função Anônima")

## Funções Função autoinvocável e Callbacks

### Função autoinvocável.
* IIFE (Immediately Invoked Function Expression)

* Também pode ser utilizada com parâmetros ou armazenada em uma variável.

![Função autoinvocável](img/Fun%C3%A7%C3%A3o%20autoinvoc%C3%A1vel.png "Função autoinvocável").

## Callbacks;

* Uma função passada como argumento para uotra.
* Utilizada Callbacks, você tem maior controle da ordem de chamadas.

![Callbacks](img/Callbacks.png "Função Callbacks")

*****

## Funções Valores padrão e Objeto "arguments"


### Objetivo:
1: Ensinar como manipular parâmetros de uma função.

2: Técnicas para loidar com números indefinidos de parâmetros.

### Valores padrão
* tem seu valor padrão como undefined . Isso significa que se você não passar os argumentos ao chamar uma função, seus parâmetros terão undefined como seus valores padrão.

![Valores padrão](img/Valores%20padr%C3%A3o.png "### Valores padrão
")

### Funções Objeto arguments.

* Uma array com todas os parâmettros passados quando a função foi invocada.

![Funções Objeto arguments](img/Fun%C3%A7%C3%B5es%20Objeto%20arguments.png "Funções Objeto arguments").

* Sengundo exemplo.

![Funções Objeto arguments](img/2%20Fun%C3%A7%C3%B5es%20Objeto%20arguments.png "Funções Objeto arguments")

****

## Funções Arrays e Objetos.

### Arrays.

* **Spread:** Uma forma de lidar separadamente com elementos.

O que era de um array se torna um elemento independente.

![Arrays](img/Arrays.png "tecnica Spread")

* **Rest:** Combina os argumento en array

O que era um elemento indenpentiente se torma parte de um array.

![Rest](img/array%20tecnica%20Rest.png "Tecinica Rest")

### Objetos.
* Objeto Destructuring. Entre chaves{}, podemos filtrar apenas os dados que nos interessan en um objeto.

![Objetos](img/Objetos.png "Objeto Destructuring").


## Funções If/else e 

### Objetivo

1: Ensinar como utilizar algumas das mais famosas declarações do javascript.

* Funções If/else

![If/else](img/if%20e%20else.png "Funções com If/else")

* 1: Outro exemplo If else 
![Outro exemplo If else](img/Outro%20exemplo%20If%20else%20.png "1: Outro exemplo If else ")
* 2: Outro exemplo If else
![2: Outro exemplo If else](img/2%20Outro%20exemplo%20If%20else.png "2: Outro exemplo If else")

****
### switch
* Equivale a uma comparação de tipo s valor (===).
* Sempre precisa de um valor "default".
* Ideal para quando se precisa comparar muitos valores.

![switch](img/switch.png "função switch").

****

## Funções For e While, Do While.

### FOR:
* Loop dentro de elementos iteráveis (arrays, strings). 

![LOOP FOR](img/FOR%20LOOP.png "LOOP FOR")

### Outra variações for in.
* LOOP entre propiedades enumeráveis de um objeto.

![Outra variações for in](img//Outra%20varia%C3%A7%C3%B5es%20for%20in.png "Outra variações for in").

### Outra variações for of.
* LOOP entre estruturas iteráveis (arrays, strings).

![Outra variações for of](img/Outra%20varia%C3%A7%C3%B5es%20for%20of.png "Outra variações for of").


### While.
* Executa instruções até que a condição se torne falsa.

![While](img/While%20fun%C3%A7ao.png "For While").

### Do While
* Executa instruções até que a condição se torne falsa.
* Porém **a primeira execução sempre ocurre.**

![Do While](img/Do%20While.png "For Do While")

***

## Funções O que é This
* A palavra reservada THIS é uma referência de contexto.
* No exemplo, THIS refere-se ao objeto pessoa.

![Funções com This](img/Fun%C3%A7%C3%B5es%20com%20This.png "Funções com This").

* Seu valor pode mudar de acordo com o lugar np código onde foi chamado.

![THIS: Valor pode mudar](img/THIS%20Valor%20pode%20mudar.png  "THIS: Valor pode mudar").

* 1 exemplo:

![Exemplo THIS Valor pode mudar](img/Exemplo%20THIS%20Valor%20pode%20mudar.png "Exemplo THIS Valor pode mudar")

* 2 exemplo em um evento no HTML:

![THIS em HTML em evento](img/THIS%20em%20HTML%20em%20evento.png "THIS em HTML em evento")
****

## Funções Manipulando seu valor

### Metodo Call.
* É possivel passar parámetros para essa função separando-os por virgulas.

![Metodo Call.](img/Metodo%20Call.png "Metodo Call.")
----
![Metodo Call exemplo 2](img/Metodo%20Call%20exemplo%202.png "Metodo Call exemplo 2")
-----

### Função Apply.

![Função Apply exemplo 1](img/Fun%C3%A7%C3%A3o%20Apply%20exemplo%201.png "Função Apply exemplo 1")
----
![Função Apply exemplo 2](img/Fun%C3%A7%C3%A3o%20Apply%20exemplo%202.png "Função Apply exemplo 2")

* Diferencia de Apply é possivel passar parâmetros para essa função dentro de um array.

![Diferencia de Apply](img/Diferencia%20de%20Apply.png "Diferencia de Apply")

### Outro metodo é Bind.
* Clona a estrutura da funççao onde é chamada e aplica o valor do objeto passado como parâmetro.

![Outro metodo é Bind](img/Outro%20metodo%20%C3%A9%20Bind.png "Outro metodo é Bind")