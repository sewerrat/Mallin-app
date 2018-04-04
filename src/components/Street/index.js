import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

//const testUrl = 'mapbox://styles/mapbox/satellite-v9';
const url = 'http://192.168.1.16:3000/user/abc.png?{x}&{y}&{z}';

function getFloorMapUrl(floor) {
	return url.replace('abc', floor);
}

export default class Floor extends Component {
	constructor(props) {
		super(props);

		this._mapOptions = Object.keys(MapboxGL.StyleURL)
		.map((key) => {
			return {
				label: key,
				data: MapboxGL.StyleURL[key],
			};
		});

		this.state = {
			url: getFloorMapUrl('1'),
			styleURL: this._mapOptions[2].data 
		};
	}

	async componentWillMount() {
		const isGranted = await MapboxGL.requestAndroidLocationPermissions();
		this.setState({
			isAndroidPermissionGranted: isGranted,
			url: getFloorMapUrl('1'),
			styleURL: this._mapOptions[2].data
		});
	}

	renderRaster() {
		return (
			<MapboxGL.RasterSource
			id="test"
			tileSize={256}
			tms={true}
			url={this.state.url}>
						<MapboxGL.RasterLayer id='testLayer' sourceID='test'/>
			</MapboxGL.RasterSource>
		);
	}

	render() {
		return(
			<View style={styles.havePermission}>
				<Text>{this.state.url}</Text>
				<MapboxGL.MapView
				style={styles.map}
				zoomLevel={12}
				styleURL={this.state.styleURL}
				showUserLocation={true}
				userTrackingMode={MapboxGL.UserTrackingModes.Follow}
				showUserLocation={true} >
				 	{this.renderRaster()}
				</MapboxGL.MapView>
					
			</View>
			
		)
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