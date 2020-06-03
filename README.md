# Boas vindas ao repositório do projeto de Movie Cards Library!

## O que deverá ser desenvolvido

Você deverá desenvolver uma biblioteca de cartões de filmes utilizando React. A biblioteca deverá possuir um cabeçalho e uma lista de cartões. Cada cartão representa um filme e possui uma imagem, título, subtítulo, sinopse e avaliação. A biblioteca deverá ser algo parecido com a imagem abaixo.

![image](preview.png)

Você precisará implementar um conjunto de componentes em React que irão compor o seu App.

## Desenvolvimento e testes

Este repositório já contem um _template_ com um App React criado e configurado. Após clonar o projeto e instalar as dependências (mais sobre isso abaixo), você não precisará realizar nenhuma configuração adicional. Você deverá completar este _template_ implementando os requisitos listados na próxima seção.

Será necessário criar quatro `React Components`:

   - Header
   - MovieList
   - MovieCard
   - Rating

Todos os componentes devem ser criados dentro da pasta `src/components`. **É importante que seus componentes tenham exatamente os nomes listados acima**.

Todos os requisitos do projeto serão testados automaticamente. Os testes para cada requisitos estão no arquivo `src/App.test.js`. Gaste um tempo lendo-o para entender como os testes estão organizados.


## Requisitos do projeto

⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando pelos _checks_ do **CodeClimate**

#### 1 Crie um componente chamado `Header`

Esse componente representará o cabeçalho da página.

#### 2 Renderize o texto "Movie Cards Library" dentro de `Header`

O texto deverá estar dentro de uma tag `h1`, que por sua vez deve estar dentro de uma tag `header`.

#### 3 Crie um componente chamado `MovieList`

Este componente representará toda a área com os cartões de filmes. `MovieList` deve receber uma prop `movies`, que é um array de objetos com informações de um filme.

#### 4 Renderize componentes `MovieCard` dentro de `MovieList`

`MovieList` deve renderizar um componente `MovieCard` para cada objeto contido no array recebido na prop `movies`.

#### 5 Passe uma key para cada `MovieCard` renderizado

`MovieList` deve renderizar `MovieCard`s de forma dinâmica. Ou seja, deve utilizar a função `map` para renderizar uma lista. Cada componente `MovieCard` deve receber uma prop `key` com o nome do filme.

#### 6 Crie um componente chamado `MovieCard`

Esse componente representa um cartão de filme. `MovieCard` deve receber uma prop `movie`. Essa prop será um objeto, contendo as propriedades, `title`, `subtitle`, `storyline`, `imagePath` e `rating`.

#### 7 Renderize a imagem do filme

`MovieCard` deve renderizar uma tag `img`, tendo como atributo `src` o valor da propriedade `imagePath` do objeto recebido como prop.

#### 8 Renderize o título do filme

`MovieCard` deve renderizar o título do filme dentro de uma tag `h4`. O título está contido na propriedade `title` do objeto recebido como prop.

#### 9 Renderize o subtítulo do filme

`MovieCard` deve renderizar o subtítulo do filme dentro de uma tag `h5`. O subtítulo está contido na propriedade `subtitle` do objeto recebido como prop.

#### 10 Renderize a sinopse do filme

`MovieCard` deve renderizar a sinopse do filme dentro de uma tag `p`. A sinopse está contida na propriedade `storyline` do objeto recebido como prop.

#### 11 Renderize um componente `Rating` dentro de `MovieCard`

`MovieCard` deve renderizar um componente `Rating`.

#### 12 Passe como prop para o componente `Rating` o atributo `rating`

`MovieCard` deve passar para o componente `Rating` uma prop chamada `rating`. O valor dessa prop é a propriedade `rating` do objeto recebido na prop `movie`.

#### 13 Crie um componente chamado `Rating`

Esse componene representa a avaliação de um filme.

#### 14 Renderize a nota de um filme dentro de `Rating`

`Rating` deve renderizar a nota do filme recebido na prop `rating` dentro de um elemento com a classe `rating`.

#### 15 `App` deve renderizar `Header`

O componente `App` deve renderizar um componente `Header`.

#### 16 `App` deve renderizar `MovieList`

O componente `App` deve renderizar um componente `MovieList`, passando como prop `movies` a lista de filmes contida no arquivo `data.js`. Para isso, você precisará importar `data.js` dentro de `App.js`.

---
