import React from 'react';
import { Provider } from 'react-redux';

import AppWithState from 'mallin-app/src/navigation';
import store from 'mallin-app/Store';
import { operations } from 'mallin-app/src/modules/location';

store.dispatch (operations.startWatching());

export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <AppWithState />
      </Provider>
    )
  }
}
