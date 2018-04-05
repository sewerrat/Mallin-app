import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import mapConst from 'mallin-app/src/const/mapConst';
import Resource from './resource';

export default class MapView extends Component {
	constructor(props) {
		super(props);
		this.props.changeMap({
			floorID: 1,
			styleURL: mapConst.defaultStyle
		});
	}

	async componentWillMount() {
		const isGranted = await MapboxGL.requestAndroidLocationPermissions();
		this.props.changeGrant({
			isAndroidPermissionGranted: isGranted
		});
	}

	renderResource() {
		return <Resource floorID={this.props.floorID} floors={this.props.floors}/>
	}

	render() {
		if (this.props.isAndroidPermissionGranted) { 
			return(
			<View style={styles.havePermission}>
				<Text>{this.props.styleURL}</Text>
				<MapboxGL.MapView
					showUserLocation={true}
					userTrackingMode={MapboxGL.UserTrackingModes.Follow}
					styleURL={this.props.styleURL}
					style={styles.map}>
					{this.renderResource()}
				</MapboxGL.MapView>
			</View>)
		}
		return (
			<View style={styles.container}>
					<Text>Location, plzzz</Text>
			</View>
		);
		
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