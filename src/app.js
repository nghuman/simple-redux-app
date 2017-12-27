"use strict"
//React
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';

// IMPORT COMBINED REDUCERS
import reducers from "./reducers/index.js"
// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';

import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

// STEP 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);

import BooksList from './components/pages/bookslist';

render(
  <Provider store={store}>
    <BooksList />
  </Provider>, document.getElementById('app')
)
// STEP 2 create and dispatch actions
// store.dispatch(postBooks(
//
// ))
// // DELETE a book
// store.dispatch(deleteBooks({id: 1}))
//
// // UPDATE a book
// store.dispatch(updateBooks(
//   {
//     id: 2,
//     title:'Learn React in 24h'
//   }
// ))
//
// //-->> CART ACTIONS <<--
// // ADD TO CART
// store.dispatch(addToCart([{id: 1}]))
