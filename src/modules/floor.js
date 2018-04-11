
import {FloorService} from 'mallin-app/src/services';

export const FLOOR_LOADING = 'mallin-app/map/FLOOR_LOADING';
export const FLOOR_LOADED = 'mallin-app/map/FLOOR_LOADED';
export const FLOOR_LOAD_ERROR = 'mallin-app/map/FLOOR_LOAD_ERROR';

export const FLOOR_CHOOSEN = 'mallin-app/map/FLOOR_CHOOSEN';

export const floor_loading = () => ({ type: FLOOR_LOADING});
export const floor_loaded = floors => ({type: FLOOR_LOADED, floors});
export const floor_load_error = error => ({type: FLOOR_LOAD_ERROR, error});

export const floor_choosen = id => ({type: FLOOR_CHOOSEN, id});

export const loadFloors = function(query) {
	return async function(dispatch, getState) {
		dispatch(floor_loading());
		
		try {
			var floors = await FloorService.load(query);
			dispatch(floor_loaded(floors));	
		} catch (error) {
			dispatch(floor_load_error(error));
			console.log('error');
			console.log(error);
		}
	};
};

export const chooseFloor = function(id) {
	return function(dispatch, getState) {
		dispatch(floor_choosen(id));
		
		try {
			
		} catch (error) {
			console.log('error');
			console.log(error);
		}
	};
};

export default (
  state = {
		floors: [],
		floorID: 1
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
			
		case FLOOR_CHOOSEN:
			const floorID = action.id;
			alert(floorID);
			return {
        ...state,
				floorID
			};
		
    default:
      return state;
  }
};