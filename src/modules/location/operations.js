import { NativeEventEmitter } from 'react-native';
//import IndoorManager from 'react-native-indoor-manager';
import {IndoorManager, GPSManager, process as locationProcess} from 'mallin-app/src/utils/indoor/IndoorManager';

import mapConst from 'mallin-app/src/const/mapConst';

import { FloorService } from 'mallin-app/src/services';
import { BuildingService } from 'mallin-app/src/services';

import { getCurrentAreaByLocation, drawPath } from 'mallin-app/src/utils/mapUtils';

import actions from './actions';
import { EventEmitter } from 'events';
var RNFS = require('react-native-fs');

const loadBuilding = function (buildingId) {
	return async function (dispatch, getState) {
		dispatch(actions.building_loading());
		try {
			var building = await BuildingService.find(buildingId);
			dispatch(actions.building_loaded(building));
		} catch (error) {
			dispatch(actions.building_load_error(error));
			console.log('error');
			console.log(error);
		}
	};
};

const loadFloor = atlasId => async (dispatch, getState) => {

	const { currentBuilding } = getState().location;
	try {
		const floor = await FloorService.findByAtlas(atlasId);
		if (floor) {
			dispatch(actions.floor_loaded(floor));
			if (!currentBuilding || currentBuilding._id !== floor.buildingId) {
				dispatch(loadBuilding(floor.buildingId));
			}
		}
	} catch (err) {
		throw err;
	}
};

const startWatching = () => (dispatch, getState) => {
	{
		//const indoorEventEmitter = new NativeEventEmitter(IndoorManager);
		
		//add listener for event locationChange
		IndoorManager.addListener((location) => {
			//get current location information
			const { currentFloor, currentBuilding, currentPath } = getState().location;
			
			//set location
			dispatch(actions.setLocation(location));
			
			// check if user still on same floor or not
			if (!currentFloor || currentFloor.atlasId.indexOf(location.atlasId) === -1) {
				
			//if user on new floor, load floor then load building
				dispatch(loadFloor(location.atlasId));
			} else if (currentFloor && currentBuilding) {
				
				// if still on same floor, get current area
				getCurrentAreaByLocation(
					currentFloor._id,
					location,
					currentBuilding.areas,
					area => dispatch(actions.setCurrentArea(area)),
				);

				//.. and update path array
				//push new point(position) to current path
				let newPath = [
					...currentPath,
					[location.longitude, location.latitude]
				];

				//only keep limited points number in path array
				while (newPath.length > 10) {
					newPath.shift();
				}

				dispatch(actions.draw_path(newPath));
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