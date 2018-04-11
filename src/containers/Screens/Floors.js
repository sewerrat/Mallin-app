import React, { Component } from 'react';
import Floors from 'mallin-app/src/components/Screens/Floors';
import { connect } from 'react-redux';

import { loadFloors } from 'mallin-app/src/modules/floor';
import { chooseFloor } from 'mallin-app/src/modules/floor';

export default connect(
  ({floor, building}) => ({
    currentBuilding: building.currentBuilding
  }), 
  dispatch => ({
    chooseFloor(value) {
      dispatch(chooseFloor(value));
    }
  })
)(Floors);