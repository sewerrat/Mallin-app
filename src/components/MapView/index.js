import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import mapConst from 'mallin-app/src/const/mapConst';
import Resource from './resource';

export default class MapView extends Component {
	constructor(props) {
		super(props);
		this.props.changeMap({
			floor: 1,
			styleURL: mapConst.defaultStyle
		});
	}

	async componentWillMount() {
		const isGranted = await MapboxGL.requestAndroidLocationPermissions();
		this.props.changeGrant({
			isAndroidPermissionGranted: isGranted
		});
	}

	render() {
		<View style={styles.havePermission}>
			<Resource />
		</View>
	}
}

const styles = StyleSheet.create({
  map: {
    width: 400,
    height:400
  },
  havePermission: {
		flex: 1,
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});