import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { common } from 'mallin-app/src/styles';

import ShowMap from 'mallin-app/src/containers/ShowMap';

export default class Floor extends Component {

	render() {
		return(
		<View style={common.container}>
			<ShowMap />
		</View>
		)
	}
}