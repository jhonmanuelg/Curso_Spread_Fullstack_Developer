# Ojetivo Da aula #1 do curso Spread Fullstack Developer.
------

* Conheecer a estrutura básica.
* Entender a diferença entre Flex container e Flex Iten.
* Conhecer inicialmente alguma propiedades.

### Suporte:

* Foi projetado como um modelo de layout unidimensional e como uma método que pode ofereceer distribuição de espaço entre itens em uma interface e recurso de alinhamento.

### Flex Conteiner

* È a tag que envolve os itens, será nala que iremos aplicar a propriedade "display: flex." trnaforma todos os seus itens filhos em flex itens.

* Propriedades relacionadas:

1- display

2- flex-direction

3- flex-wrap

4- flex-flow

5- justify-content

6- align-items

7- align-content

### Flex Item

* São os elementos filhos diretos do flex container. E também podem se tomado Flex Container.

* Propriedades relacionadas:

1- flex-grow 

2- flex.basis

3- flex-shrink

4- flex 

5- order

6- align-self

## Ojetivo Da aula #2 do curso Spread Fullstack Developer.

* Apresentar os fun damentos e aplicações da propriedade flexbox na criação de layouts responsivos, sem a necessidade a definição de valores fixos.

### Percurso.

1 Aula introdução ao flexbox

2 Fundamentos do flexbox

3 Projeto integrador


## Aula 2: fundamentos parte 1 - flex container.

* Display flex

### Sugestões.

HTML Snippets.

Live HTML Previewer.

### Ojetivo da aula.

1- Conhecer a aplicar a propriedade de inicializaçaço do flex container.

* Display: Flex;

↕ Torna a tag um elemento do tipo flex container container, e assim automaticamente todos os seus filhos diretos desta tag, tornam-se em flex item.

### Objetivos.

1- Entender o comprotamiento padrão de orienteção horizontal de uma flex container.

2- Apren der a modificar a orientação horizontal.

### Flex-direction.

* É a propriedade que establece o eixo principal do container, defininso assim a dereção que os flex items são colocados no flex container.

#### Os eixos.

* roe( padrão ): Á direção do text, esquerda para direite. 

* row-reverse: sentido oposto á direção do texto.

* column: ordenação de cima para baixo en coluna unica.

* column-reverse: ordenação inversa, de baixo para cima.


### Estrutura básica do flex wrap

É a propriedade que define se os itens devem ou não quebrar alinha.

Por padrão eles não quebram linhas, isso faz com que os flex itens sejam compactado além do limite do conteúdo.

### nowrap.

* É o padrão, no permite a quebta de linha.

### wrap.

Premite a quebra de linha assim que um dos flex itens não puder mais ser compactado.

### wrap-reverse.

Premite a quebra de linha assim que um dos flex itens não puder mais ser compactodo, porém na direção contrária da linha, acima.


### Flex flow

* É um atalho para as propriedade flex- direction e flex-wrao. 

Porém seu uso não  é tão comum, visto que, quanto mudamos o flex-direction para column, mantemoos o ppadrão do flex-wrap que é nowrap.


### justify content.


* Essa propiedade vai se encarregar de alinhar os itens dentro dom container de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles.

**OBS:** Caso seus itens esteja ocipando 100% de todo o coontainer ele não se aplica.


### As variações:

* flex-start: inicio do container.

* flex-end: final do container.

* center: ao centro do conytainer.

* space-between: cria um espaçamento igual entre os elementos.

* space-around: os espaçamentos do meio são duas vezes maiores que o inicial e final.


### align items

Trata do alinhamento dos flex item de acordo com o eixo do container.

O alinhamento é diferente para quando os item estão em columnas ou linha.

Permite o alinhamento central no eixo vertical. 

### Tipos de alinhamento:

* center: alinhamento dos item ao centro.

* stretch: padrão, e os flex item cresçam igualmente.

* flex-start: alinhamento dos item no inicio.

* flex-end: alinhamento dos item no final.

* beseline: alinhamento de acordo com a linha base da tipografia dos item.

### align content

È  a propiedade responsável por tratar o alinhamento das loinhas do container en relação ao eixo vertical do contaiener.

#### Precisamos que:

* O container utilize quebra de linhas

* A altura do container seja maior que a soma das das linhas dos item.

#### Tipos de alinhamento:

* center: alinhamento dos item ao centro.

* stretch: é o padrão e os flex item crescem igualmente

* flex-start: alinha mento dos item no inicio.

* space-between: cria um espaçamento igual entre os elementos.

* space-around: cria um espaçamento do meio são duas vezes maiores que o inicio e final.

### Parte 2 - flex item

#### flex grow:

* Define a propriedade de crescimiento dos item, respeitando o tamanho de seu conteúdos internos.

**OBS**: Não irá funcionar caso tenhamos adicionado justify-content.


### flex basis.

É a propriedade que establece o tamanho inicial do item antes das distribuição de espaço restante dele, usando como base o conteúdo interno disposto.

#### Valores possíveis:

* auto:caso o item não tenha tamanho, este será propocional ao conteúdo do item.

* px, % em, ....: São valores exatos previamente definidos.

* 0 **(Zero)**: terá ralação com a definição do flex-grow.

### flex Shrink.

É a propriedade que establecer a capacidade de redução ou compressão do tamanho de um item.

### Flex.

Esta propriedade é uma atalho ou abreviação de escrita para as propriedades: grow,shirink e basis.

### order.

Controla a ordem em que flex items aparecem no container

### align self.

É a propriedade wur establece o alinhamento de ,odo individual sobre um determinado item.

#### Valores possíveis:


* auto: valor padrão, irá respeitar a definição de align-item do container.

* flex-start: ao início do container.

* flex.end: ao final do container.

* center: relativo ao centro de acordo com o eixo.

* atretch: ocupa todo os espaço relativo.

* baseline: utiliza a linha base da tipografia.