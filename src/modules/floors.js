
import {floorService} from 'mallin-app/src/services';

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
			var response = ;
			var buses = await response.json();
			dispatch({ type: 'FLOOR_LOADED', floor });
		} catch (error) {
			dispatch({ type: 'FLOOR_LOAD_ERROR', error });
			console.log('error');
			console.log(error);
		}
	};
};

export default (
  state = {
		floor: 1,
		
    statusText: 'Detecting floor ...',
  },
  action
) => {
  switch (action.type) {
    case FLOOR_CHANGED:{
			const floor = action.floor;
			const url = getFloorMapUrl(1);
			const styleURL = MapboxGL.StyleURL.Light;//mapConst.defaultStyle;
      return {
        ...state,
				floor,
        url,
        styleURL
      };
		}
			
    case CHANGE_MAP:{
      const mapInfo = action.mapInfo;
      const floor = mapInfo.floor;
			const url = getFloorMapUrl(floor);
			const styleURL = mapInfo.styleURL;
      return {
				...state,
				floor,
				url,
        styleURL,
			};
		}
			
		case CHANGE_GRANT:
      const isAndroidPermissionGranted = action.isAndroidPermissionGranted;
      return {
        ...state,
        isAndroidPermissionGranted: isAndroidPermissionGranted,
      };
    default:
      return state;
  }
};