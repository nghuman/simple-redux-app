"use strict"
//React
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// REACT-ROUTER
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

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
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Main from './main';

const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={BooksList}/>
        <Route path="/admin" component={BooksForm}/>
        <Route path="/cart" component={Cart}/>
      </Route>
    </Router>
  </Provider>
)

render(
  Routes, document.getElementById('app')
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
