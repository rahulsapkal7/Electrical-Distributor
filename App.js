import React, {Component} from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Main from './app/components/Root/Main';
import configureStore from './app/configureStore';

const store = configureStore;

export default class App extends Component {

  render() {    
   return (

      <Provider store={store}>
        <Main/>
      </Provider>

    );
  }
}






