import React, { Component } from 'react';
import Floors from 'mallin-app/src/components/Screens/Floors';
import { connect } from 'react-redux';

import { chooseFloor } from 'mallin-app/src/modules/floor';

export default connect(
  ({location}) => ({
    currentBuilding: location.currentBuilding,
    currentFloors: location.currentFloors
  }), 
  dispatch => ({
    chooseFloor(value) {
      dispatch(chooseFloor(value));
    }
  })
)(Floors);