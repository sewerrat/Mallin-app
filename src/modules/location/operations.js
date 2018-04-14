import { NativeEventEmitter } from 'react-native';
import IndoorManager from 'react-native-indoor-manager';

import {FloorService} from 'mallin-app/src/services';
import {BuildingService} from 'mallin-app/src/services';

import {getCurrentAreaByLocation} from 'mallin-app/src/utils/mapUtils';

import actions from './actions';

export const loadBuildings = function(buildingId) {
	return async function(dispatch, getState) {
		dispatch(building_loading());
		try {
			var building = await BuildingService.load(buildingId);
			dispatch(building_loaded(building));
		} catch (error) {
			dispatch(building_load_error(error));
			console.log('error');
			console.log(error);
		}
	};
};

export const loadFloor = atlasId => async (dispatch, getState) => {
  const { currentBuilding } = getState().location;
  try {
    const floor = FloorService.findByAtlas(atlasId);
    if (!isEmpty(floor)) {
      dispatch(actions.floor_loaded(floor));
      if (!currentBuilding || currentBuilding._id !== floor.buildingId) {
        dispatch(loadBuilding(floor.buildingId));
      }
    }
    return floor;
  } catch (err) {
    throw err;
  }
};

export const startWatching = () => (dispatch, getState) => {
	{
		const indoorEventEmitter = new NativeEventEmitter(IndoorManager);

		indoorEventEmitter.addListener('locationChanged', (location) => {
			const { currentFloor, currentBuilding } = getState().location;
			dispatch(actions.setLocation(location));
			dispatch(actions.setIsLoading(false));
			if (!currentFloor || currentFloor.atlasId.indexOf(location.atlasId) === -1) {
				dispatch(loadFloor(location.atlasId));
			} else if (currentFloor && currentBuilding) {
				getCurrentAreaByLocation(
					currentFloor._id,
					location,
					currentBuilding.areas,
					area => dispatch(actions.setCurrentArea(area)),
				);
			}
		});

		IndoorManager.initService(Config.API_KEY, Config.API_SECRET);
		console.log('Service inited');
	}
};
