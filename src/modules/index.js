import { combineReducers } from 'redux';

import map from './map';
import floor from './floor';
import {reducer as location} from './location';
//import common from './common';
//import nav from './navigation';
//import form from './form';


export default combineReducers({
  map,
  floor,
  location,
  //common
})