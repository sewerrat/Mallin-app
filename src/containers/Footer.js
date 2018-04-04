import React, { Component } from 'react';
import Footer from 'mallin-app/src/components/Footer';
import { connect } from 'react-redux';

import { onFloorChanged } from 'mallin-app/src/modules/map';

export default connect(null, dispatch => ({
    onFloorChanged(floor) {
    dispatch(onFloorChanged(floor));
  }
}))(Footer);