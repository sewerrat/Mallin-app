
import {FloorService} from 'mallin-app/src/services';

export const FLOOR_LOADING = 'mallin-app/map/FLOOR_LOADING';
export const FLOOR_LOADED = 'mallin-app/map/FLOOR_LOADED';
export const FLOOR_LOAD_ERROR = 'mallin-app/map/FLOOR_LOAD_ERROR';

export const floor_loading = () => ({ type: FLOOR_LOADING});
export const floor_loaded = floors => ({type: FLOOR_LOADED, floors});
export const floor_load_error = error => ({type: FLOOR_LOAD_ERROR, error});

export const loadFloors = function(query) {
	return function(dispatch, getState) {
		dispatch({ type: 'FLOOR_LOADING' });
		try {
			var floors = FloorService.loadFloors(query);
			dispatch({ type: 'FLOOR_LOADED', floors });
		} catch (error) {
			dispatch({ type: 'FLOOR_LOAD_ERROR', error });
			console.log('error');
			console.log(error);
		}
	};
};

export default (
  state = {
		floor: [],
  },
  action
) => {
  switch (action.type) {
    case FLOOR_LOADING:{
      return {
        ...state,
				floorLoading: true
      };
		}
			
    case FLOOR_LOADED:{
      const floors = action.floors;
      return {
				...state,
				floors,
				floorLoading: false
			};
		}
			
		case FLOOR_LOAD_ERROR:
			const error = action.error;
			return {
        ...state,
				error,
				floorLoading: false
      };
    default:
      return state;
  }
};