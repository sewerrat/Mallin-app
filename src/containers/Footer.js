import React, { Component } from 'react';
import Footer from 'mallin-app/src/components/Footer';
import { connect } from 'react-redux';

import { loadFloors } from 'mallin-app/src/modules/floor';

export default connect(
  ({floor}) => ({
    floors: floor.floors
  }), 
  dispatch => ({
    loadFloors(query) {
    dispatch(loadFloors(query));
  }
}))(Footer);