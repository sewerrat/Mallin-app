import React, { Component } from 'react';
import Home from 'mallin-app/src/components/Home';
import { connect } from 'react-redux';

import { loadFloors } from 'mallin-app/src/modules/floor';
import { onFloorChanged } from 'mallin-app/src/modules/map';

export default connect(
  ({floor}) => ({
    floors: floor.floors
  }), 
  dispatch => ({
    loadFloors(query) {
    dispatch(loadFloors(query));
    }
  })
)(Home);