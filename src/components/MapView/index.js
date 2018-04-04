import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import mapConst from 'mallin-app/src/const/mapConst';

import { initMap } from '../../modules/map';

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

	renderRaster() {
		alert(this.props.url);
		if (!this.props.url) {
			return null;
		}
		return (
			<MapboxGL.RasterSource
			id='test'
			tileSize={256}
			tms={true}
			url={this.props.url}>
					<MapboxGL.RasterLayer id='testLayer' sourceID='test'/>
			</MapboxGL.RasterSource>
		);
	}

	render() {
		if (this.props.isAndroidPermissionGranted) { 
			return(
				<View style={styles.havePermission}>
					<Text>{this.props.styleURL}</Text>
					<MapboxGL.MapView
					style={styles.map}
					zoomLevel={12}
					styleURL={this.props.styleURL}
					showUserLocation={true}
					userTrackingMode={MapboxGL.UserTrackingModes.Follow}
					showUserLocation={true} >
						 {this.renderRaster()}
					</MapboxGL.MapView>
				</View>
			)
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