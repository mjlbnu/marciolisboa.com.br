---
date: 2023-02-17
title: "Redux na prática"
template: post
thumbnail: "../thumbnails/javascript.png"
slug: react-redux
categories:
  - javascript
tags:
  - javascript
  - react
  - redux
  - local storage
  - state
  - store
---

<img src="../images/redux.png" alt="React Redux"/>

## Redux na prática

```javascript
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducers";

function saveToLocalStorage(store) {
  try {
    const serializedStore = JSON.stringify(store);
    window.localStorage.setItem("store", serializedStore);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedStore = window.localStorage.getItem("store");
    if (serializedStore === null) return undefined;
    return JSON.parse(serializedStore);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() =&gt; saveToLocalStorage(store.getState()));

export default store;
```

Este é um código em JavaScript que utiliza a biblioteca Redux para gerenciar o estado da aplicação. O objetivo do código é criar um objeto de armazenamento (store) que pode ser utilizado em toda a aplicação, com o uso de middleware para adicionar funcionalidades ao Redux e a persistência do estado da aplicação no armazenamento local do navegador.
Aqui está uma explicação mais detalhada do que o código está fazendo:

As importações incluem o método `createStore`, `applyMiddleware`, e `compose` da biblioteca Redux, bem como o middleware `thunk` e os redutores `reducers` do aplicativo.

As funções `saveToLocalStorage` e `loadFromLocalStorage` são definidas para persistir o estado da aplicação no armazenamento local do navegador. A função `saveToLocalStorage` converte o estado em JSON e armazena-o no armazenamento local do navegador com a chave "store", enquanto a função `loadFromLocalStorage` recupera o estado do armazenamento local com a chave "store" e converte-o em um objeto JavaScript.

A constante `composeEnhancers` é definida para permitir a utilização da ferramenta de desenvolvedor do Redux. Ela utiliza o `window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__`, se disponível, ou o `compose` padrão da biblioteca Redux.

A constante `persistedState` é definida como o estado recuperado do armazenamento local do navegador com a função `loadFromLocalStorage`.

A constante `store` é definida utilizando o método `createStore` do Redux, passando os redutores, o estado persistido e o middleware `thunk`. O `composeEnhancers` é utilizado para incluir a ferramenta de desenvolvedor do Redux, se estiver disponível. Além disso, é adicionado um `listener` no armazenamento para chamar a função `saveToLocalStorage` sempre que o estado for atualizado.

Por fim, o `store` é exportado como o valor padrão do módulo. No geral, este código cria um objeto de armazenamento Redux com funcionalidades adicionais por meio do middleware `thunk` e da ferramenta de desenvolvedor do Redux, enquanto persiste o estado da aplicação no armazenamento local do navegador para permitir que os usuários recuperem seu estado mesmo após recarregar a página.
