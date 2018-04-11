import types from './types';

export const setLocation = location => ({
  type: types.SET_LOCATION,
  payload: {
    location,
  },
});

export const setCurrentArea = area => ({
  type: types.SET_CURRENT_AREA,
  payload: {
    area,
  },
});

export const building_loading = () => ({ 
  type: types.BUILDING_LOADING
});
export const building_loaded = building => ({
  type: types.BUILDING_LOADED, 
  payload:{
    building
  } 
});
export const building_load_error = error => ({
  type: types.BUILDING_LOAD_ERROR, 
  error
});


export const floor_loading = () => ({ 
  type: FLOOR_LOADING
});
export const floor_loaded = floor => ({
  type: FLOOR_LOADED, 
  payload: {
    floor
  }
});
export const floor_load_error = error => ({
  type: FLOOR_LOAD_ERROR, 
  error
});