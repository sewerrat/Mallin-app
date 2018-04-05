import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ShowMap from 'mallin-app/src/containers/ShowMap';

export default class Floor extends Component {

	render() {
		return(
		<View style={styles.container}>
			<ShowMap />
		</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});