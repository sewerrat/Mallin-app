import React, { Component } from 'react';
import Floors from 'mallin-app/src/components/Floors';
import { connect } from 'react-redux';

import {changeGrant, changeMap} from 'mallin-app/src/modules/map';

export default connect(
	null,
	null
)(Floors);