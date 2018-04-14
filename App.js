import React from 'react';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import allReducer from 'mallin-app/src/modules';

import AppWithState from 'mallin-app/src/navigation';
import {startWatching} from 'mallin-app/src/modules/location';

const store = createStore(allReducer, applyMiddleware(thunk));
store.dispatch (startWatching());

export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <AppWithState />
      </Provider>
    )
  }
}
