import React, { Component } from 'react';
import Home from 'mallin-app/src/components/Screens/Home';
import { connect } from 'react-redux';

import { loadBuildings } from 'mallin-app/src/modules/building';
import { chooseBuilding } from 'mallin-app/src/modules/building';

export default connect(
  ({building}) => ({
    currentBuilding: currentBuilding
  })
)(Home);