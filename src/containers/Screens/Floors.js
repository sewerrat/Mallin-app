import React, { Component } from 'react';
import Floors from 'mallin-app/src/components/Floors';
import { connect } from 'react-redux';

import { loadFloors } from 'mallin-app/src/modules/floor';
import { chooseFloor } from 'mallin-app/src/modules/floor';

export default connect(
  ({floor, building}) => ({
    buildingID: building.buildingID,
    floors: floor.floors
  }), 
  dispatch => ({
    loadFloors(query) {
    dispatch(loadFloors(query));
	},
	chooseFloor(value) {
		dispatch(chooseFloor(value));
	}
  })
)(Floors);