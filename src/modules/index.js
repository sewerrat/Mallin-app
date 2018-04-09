import { combineReducers } from 'redux';

import map from './map';
import floor from './floor';
import nav from './navigation';
import building from './building'
//import form from './form';


export default combineReducers({
  map,
  floor,
  nav,
  building
})