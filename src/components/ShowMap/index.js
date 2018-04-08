import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import mapConst from 'mallin-app/src/const/mapConst';
import Resource from './resource';
import { common, map } from 'mallin-app/src/styles';
import MainFrame from '../MainFrame';

export default class ShowMap extends MainFrame {
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

	renderContent() {
		if (this.props.isAndroidPermissionGranted) { 
			return (
			<View style={map.havePermission}>
				<Text>{this.props.floorID}</Text>
				<MapboxGL.MapView
					showUserLocation={true}
					userTrackingMode={MapboxGL.UserTrackingModes.Follow}
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
