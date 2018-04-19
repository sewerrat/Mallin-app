import types from './types';

const initialState = {
	isLoading: false,
	location: undefined,
	currentArea: undefined,
	currentFloor: undefined,
	currentBuilding: undefined,
	currentPath: []
};
export default (state = initialState, action) => {
	switch (action.type) {
		case types.BUILDING_LOADING: {
			return {
				...state,
				buildingLoading: true
			};
		}

		case types.BUILDING_LOADED: {
			const currentBuilding = action.payload.building;
			return {
				...state,
				currentBuilding,
				buildingLoading: false
			};
		}

		case types.BUILDING_LOAD_ERROR:
			const error = action.error;
			return {
				...state,
				error,
				buildingLoading: false
			};

		case types.FLOOR_LOADING: {
			return {
				...state,
				floorLoading: true
			};
		}

		case types.FLOOR_LOADED: {
			const currentFloor = action.payload.floor;
			return {
				...state,
				currentFloor,
				floorLoading: false
			};
		}

		case types.FLOOR_LOAD_ERROR: {
			const error = action.error;
			return {
				...state,
				error,
				floorLoading: false
			};
		}


		case types.SET_LOCATION: {
			return {
				...state,
				location: action.payload.location,
			};
		}

		case types.SET_CURRENT_AREA: {
			return {
				...state,
				currentArea: action.payload.area,
			};
		}

		case types.DRAW_PATH: {
			return {
				...state,
				currentPath: action.payload.currentPath
			}
		}

		default:
			return state;
	}
};