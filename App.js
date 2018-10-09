import React from 'react';
import {View,Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import Home from './components/Home';
import store from './stores';

// let store = createStore(allReducers)
export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  render() {
      return (
        <Provider store={store}>
          <Home/>
        </Provider>
      );
    }
}

