import { NativeEventEmitter } from 'react-native';
//import IndoorManager from 'react-native-indoor-manager';
import {IndoorManager, GPSManager, process as locationProcess} from 'mallin-app/src/utils/indoor/IndoorManager';

import mapConst from 'mallin-app/src/const/mapConst';

import { FloorService } from 'mallin-app/src/services';
import { BuildingService } from 'mallin-app/src/services';

import { getCurrentAreaByLocation } from 'mallin-app/src/utils/mapUtils';

import actions from './actions';
import { EventEmitter } from 'events';
var RNFS = require('react-native-fs');

const loadBuilding = function (buildingId) {
	return async function (dispatch, getState) {
		dispatch(actions.building_loading());
		try {
			var building = await BuildingService.load(buildingId);
			dispatch(actions.building_loaded(building));
		} catch (error) {
			dispatch(actions.building_load_error(error));
			console.log('error');
			console.log(error);
		}
	};
};

const loadFloor = atlasId => async (dispatch, getState) => {
	//test code
	const testFloor= {
		_id: '598995439412f10a09bfce9f'
	}
	dispatch(actions.floor_loaded(floor));
	if (!currentBuilding || currentBuilding._id !== floor.buildingId) {
		dispatch(loadBuilding(floor.buildingId));
	}
	return testFloor();
	//end test code
	
	const { currentBuilding } = getState().location;
	try {
		const floor = FloorService.findByAtlas(atlasId);
		if (floor) {
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

const startWatching = () => (dispatch, getState) => {
	{
		//const indoorEventEmitter = new NativeEventEmitter(IndoorManager);
		
		IndoorManager.addListener((location) => {
			const { currentFloor, currentBuilding } = getState().location;
			dispatch(actions.setLocation(location));
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
		GPSManager.addListener((location) => {
			
		});

		locationProcess();
		//IndoorManager.initService(mapConst.API_KEY, mapConst.API_SECRET);
		console.log('Service inited');
	}
};

export default {
	startWatching,
	loadFloor,
	loadBuilding
}