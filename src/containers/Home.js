import React, { Component } from 'react';
import Home from 'mallin-app/src/components/Home';
import { connect } from 'react-redux';

import { loadBuildings } from 'mallin-app/src/modules/building';

export default connect(
  ({building}) => ({
    buildings: building.buildings
  }), 
  dispatch => ({
    loadBuildings(query) {
    dispatch(loadBuildings(query));
    }
  })
)(Home);