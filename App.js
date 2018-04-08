import React from 'react';

import Main from './src/components/main';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import allReducer from 'mallin-app/src/modules';

import AppWithNavigationState from 'mallin-app/src/navigation';

const store = createStore(allReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
