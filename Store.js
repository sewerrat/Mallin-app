import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import mapReducer from './src/components/street';

const store = createStore(
    combineReducers({
        mapObject: mapReducer,
    }),
    applyMiddleware(ReduxThunk)
);

export default store;