import { combineReducers } from 'redux';

import map from './map';
import floor from './floor';
import nav from './navigation';
import form from './form';


export default combineReducers({
  map,
  floor,
  nav,
  form
})