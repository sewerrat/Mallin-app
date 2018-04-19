import React, { Component } from 'react';
import ShowMap from 'mallin-app/src/components/Common/ShowMap';
import { connect } from 'react-redux';

import {changeGrant, changeMap} from 'mallin-app/src/modules/map';

export default connect(
	({location, map, floor}) => ({
		currentFloor: location.currentFloor,
		currentArea: location.currentArea,
		currentBuilding: location.currentBuilding,
		location: location.location,
		styleURL: map.styleURL,
		floors: floor.floors,
		isAndroidPermissionGranted: map.isAndroidPermissionGranted,
		currentPath: location.currentPath
	}),
	dispatch => ({
		changeMap(mapInfo) {
			dispatch(changeMap(mapInfo));
		},
		changeGrant(floor) {
			dispatch(changeGrant(floor));
		}
	})
)(ShowMap);