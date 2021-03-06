import React from 'react';
import {AppRegistry} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {name as appName} from './app.json';
import App from './App';
import rootReducer from './src/services/rootReducer';

export const rootStore = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk),
);

const RootApp = () => (
  <Provider store={rootStore}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RootApp);
