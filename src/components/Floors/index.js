import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapView from 'mallin-app/src/containers/MapView';

export default class Floor extends Component {

	render() {
		return(
		<View style={styles.container}>
			<MapView />
		</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});