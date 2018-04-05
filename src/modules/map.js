import {getFloorMapUrl} from 'mallin-app/src/utils/mapUtils';
import mapConst from 'mallin-app/src/const/mapConst';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

export const FLOOR_CHANGED = 'mallin-app/map/FLOOR_CHANGED';
export const CHANGE_MAP = 'mallin-app/map/CHANGE_MAP';
export const CHANGE_GRANT = 'mallin-app/map/CHANGE_GRANT';

export const onFloorChanged = floorID => ({ type: FLOOR_CHANGED, floorID });
export const changeMap = mapInfo => ({type: CHANGE_MAP, mapInfo});
export const changeGrant = isAndroidPermissionGranted => ({type: CHANGE_GRANT, isAndroidPermissionGranted});

export default (
  state = {
		floorID: 1,
		
    statusText: 'Detecting floor ...',
  },
  action
) => {
  switch (action.type) {
    case FLOOR_CHANGED:{
			const floorID = action.floorID;
			const url = getFloorMapUrl(1);
			const styleURL = MapboxGL.StyleURL.Light;//mapConst.defaultStyle;
      return {
        ...state,
				floorID,
        url,
        styleURL
      };
		}
			
    case CHANGE_MAP:{
      const mapInfo = action.mapInfo;
      const floorID = mapInfo.floorID;
			const url = getFloorMapUrl(floorID);
			const styleURL = mapInfo.styleURL;
      return {
				...state,
				floorID,
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