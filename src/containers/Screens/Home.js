import React, { Component } from 'react';
import Home from 'mallin-app/src/components/Screens/Home';
import { connect } from 'react-redux';

export default connect(
  ({location}) => ({
    currentBuilding: location.currentBuilding,
    currentFloor: location.currentFloor,
    currentArea: location.currentArea,
    location: location.location
  })
)(Home);