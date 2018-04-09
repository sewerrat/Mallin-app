
import {BuildingService} from 'mallin-app/src/services';
import {loadFloors} from 'mallin-app/src/modules/floor';

export const BUILDING_LOADING = 'mallin-app/map/BUILDING_LOADING';
export const BUILDING_LOADED = 'mallin-app/map/BUILDING_LOADED';
export const BUILDING_LOAD_ERROR = 'mallin-app/map/BUILDING_LOAD_ERROR';
export const BUILDING_CHOOSEN = 'mallin-app/map/BUILDING_CHOOSEN';

export const building_loading = () => ({ type: BUILDING_LOADING});
export const building_loaded = buildings => ({type: BUILDING_LOADED, buildings});
export const building_load_error = error => ({type: BUILDING_LOAD_ERROR, error});

export const builđing_choosen = (id) => ({type: BUILDING_CHOOSEN}, id); 

export const loadBuildings = function(query) {
	return async function(dispatch, getState) {
		dispatch(building_loading());
		try {
			var buildings = await BuildingService.load(query);
			dispatch(building_loaded(buildings));
		} catch (error) {
			dispatch(building_load_error(error));
			console.log('error');
			console.log(error);
		}
	};
};

export const chooseBuilding = function(id) {
	return async function(dispatch, getState) {
		try {
			dispatch
		} catch (error) {
			console.log('error');
			console.log(error);
		}
	};
};

export default (
  state = {
		buildings: [],
  },
  action
) => {
  switch (action.type) {
    case BUILDING_LOADING:{
      return {
        ...state,
				buildingLoading: true
      };
		}
			
    case BUILDING_LOADED:{
			const buildings = action.buildings;
      return {
				...state,
				buildings,
				buildingLoading: false
			};
		}
			
		case BUILDING_LOAD_ERROR:
			const error = action.error;
			return {
        ...state,
				error,
				buildingLoading: false
			};
		
		case BUILDING_CHOOSEN: {
			const buildingID = action.id;
			return {
				...state,
				buildingID
			};
		}
		
    default:
      return state;
  }
};