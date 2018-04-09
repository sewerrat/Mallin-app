import React, { Component } from 'react';
import ShowMap from 'mallin-app/src/components/ShowMap';
import { connect } from 'react-redux';

import {changeGrant, changeMap} from 'mallin-app/src/modules/map';

export default connect(
	({map, floor}) => ({
		floorID: floor.floorID,
		styleURL: map.styleURL,
		floors: floor.floors,
		isAndroidPermissionGranted: map.isAndroidPermissionGranted
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