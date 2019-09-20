# Projeto Start Wars App

Este é um projeto em React com função de estudos e aprimoramento de conhecimento. Ele tem função de Feed, se alimentando dos dados so site [https://swapi.co/documentation#people](https://swapi.co/) via Api- Rest:

- São listados personagens dos filmes.
- As informações das `Starship` são carregadas de acordo com cada personagem.
- Clicando no card do personagem, abrem-se as informações detalhadas.

// To-DO

- implementar paginação
- busca de imagens
- otimização de performace

Este projeto utiliza [Create React App](https://github.com/facebookincubator/create-react-app) de boilerplate.

## Iniciando o desenvolvimento

Para iniciar o desenvolvimento:

- Instale as dependências do projeto `npm install` ou `yarn install`
- Inicialize o servidor de desenvolvimento `npm start` ou `yarn start`

```sh
$ npx create-react-app star-wars-app
$ cd star-wars-app
$ npm install
$ npm start
```

- [React](https://github.com/facebook/react/)
- [Redux](https://github.com/reduxjs/redux)
- [Redux-thunk](https://github.com/reduxjs/redux-thunk)
- [React Router](https://github.com/ReactTraining/react-router)
- [Styled Components](https://github.com/styled-components/styled-components)

## Backend Server

O Json utilizado é disponibilizado pelo [https://swapi.co/documentation#people](https://swapi.co/). Detalhes de requisição disponíveis, no arquivo `utils/api.jon`.
O gerenciamento de estado é feito através do Redux.

- [`getCharacters`](#getCharacters) #Obter os 10 últimos personagens
- [`getCharacter(id)`](#getCharacter) #Busca por personagem especifico, id é obrigatório
- [`getStarships`](#getStarships) #Obtem 10 Naves por página
- [`getStarship(id)`](#getStarship) #Busca por nave especifico, id é obrigatório

### `getCharacters`

```js
getCharacters();
```

- Retorna um JSON através de uma Promise, com Array personagens. Que são exibidos página inicial.

### `getCharacter(id)`

```js
getCharacter(id);
```

- character: `<Object>` retorna informação de personagem baseada no seu `id`

### `getStarships`

```js
getStarships();
```

- Retorna um JSON através de uma Promise, com Array de naves. Que são exibidos a partir de requisições individuais..

### `getStarship(id)`

```js
getStarship(id);
```

- starship: `<Object>` retorna informação de personagem baseada no seu `id`

## Importante

Para implementação de novas requisições, recomenda-se ler a documentação do Servidor.

## Create React App

Este projeto usou o [Create React App 3+](https://github.com/facebookincubator/create-react-app) como base de configurações de servidor de desenvolvimento, build de produção, configurações de [Babel](https://babeljs.io) e [Webpack](https://webpack.js.org).
Mais informações sobre [here](https://facebook.github.io/create-react-app/).

## Contributing

As infomações e imagens usada nesse projeto não tem fim comercial.

licença [CC BY-ND 3.0](https://creativecommons.org/licenses/by-nd/3.0/)
