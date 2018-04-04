import { combineReducers } from 'redux';

import map from './map';
import floor from './floor';


export default combineReducers({
  map,
  floor
})