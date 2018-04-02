import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger()
import rootReducer from './src/reducers';

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

import CoreStyles from './src/styles';
import { NpcNavigator } from './src/util';
import { SelectNpcSortContainer } from './src/features';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <NpcNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 60,
    fontSize: 18,
    backgroundColor: CoreStyles.colors.primary,
    color: CoreStyles.colors.text.light,
  }
});
