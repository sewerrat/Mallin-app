import React, { Component } from 'react';
import Header from 'mallin-app/src/components/Template/Header';
import { connect } from 'react-redux';

import { loadFloors } from 'mallin-app/src/modules/floor';
import { onFloorChanged } from 'mallin-app/src/modules/map';

export default connect(
  null, 
  null
)(Header);