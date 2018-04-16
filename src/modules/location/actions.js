import types from './types';

const setLocation = location => ({
  type: types.SET_LOCATION,
  payload: {
    location,
  },
});

//area
const setCurrentArea = area => ({
  type: types.SET_CURRENT_AREA,
  payload: {
    area,
  },
});

//building
const building_loading = () => ({ 
  type: types.BUILDING_LOADING
});
const building_loaded = building => ({
  type: types.BUILDING_LOADED, 
  payload:{
    building
  } 
});
const building_load_error = error => ({
  type: types.BUILDING_LOAD_ERROR, 
  error
});

//floor
const floor_loading = () => ({ 
  type: types.FLOOR_LOADING
});
const floor_loaded = floor => ({
  type: types.FLOOR_LOADED, 
  payload: {
    floor
  }
});
const floor_load_error = error => ({
  type: types.FLOOR_LOAD_ERROR, 
  error
});

export default {
  setLocation,
  setCurrentArea,
  building_loading,
  building_loaded,
  building_load_error,
  floor_loading,
  floor_loaded,
  floor_load_error
}