import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import mapConst from 'mallin-app/src/const/mapConst';
import Resource from './resource';
import { common, map } from 'mallin-app/src/styles';

export default class ShowMap extends Component {
	constructor(props) {
		super(props);
	}

	renderResource() {
		return <Resource floorID={this.props.currentFloors._id} floors={this.props.floors}/>
	}

	render() {
		if (this.props.isAndroidPermissionGranted) { 
			return (
			<View style={map.havePermission}>
				<Text>{this.props.floorID}</Text>
				<MapboxGL.MapView
					showUserLocation={true}
					userTrackingMode={MapboxGL.UserTrackingModes.Follow}
					centerCoordinate={[this.props.location.long, this.props.location.lat]}
					styleURL={this.props.styleURL}
					style={map.map}>
					{this.renderResource()}
				</MapboxGL.MapView>
			</View>)
		}
		return (
			<View style={common.container}>
					<Text>Location, plzzz</Text>
			</View>
		);
	}
}
