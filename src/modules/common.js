import { Dimensions } from 'react-native';

export const LOAD_COMMON_INFO = 'mallin-app/map/LOAD_COMMON_INFO';
export const load_common_info = customInfo => ({ type: LOAD_COMMON_INFO, payload: { customInfo } });

const screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75
}

export default (
  state = {
    screen
  },
  action
) => {
  switch (action.type) {
    case LOAD_COMMON_INFO: {
      const floorID = action.payload;
      const url = getFloorMapUrl(1);
      const styleURL = MapboxGL.StyleURL.Light;//mapConst.defaultStyle;
      return {
        ...state,
        customInfo
      };
    }


    default:
      return state;
  }
};

