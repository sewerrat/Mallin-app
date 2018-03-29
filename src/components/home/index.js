import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

export default class Main extends Component {
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
			styleURL: this._mapOptions[0].data,
			
		};
	}

	async componentWillMount() {
		const isGranted = await MapboxGL.requestAndroidLocationPermissions();
		this.setState({
			styleURL: this._mapOptions[0].data,
			isAndroidPermissionGranted: isGranted
		});
	}

	render() {
		if (this.state.isAndroidPermissionGranted) { 
			return(
			<View style={styles.havePermission}>
				<Text>{this.state.styleURL}</Text>
				<MapboxGL.MapView
					showUserLocation={true}
					zoomLevel={12}
					userTrackingMode={MapboxGL.UserTrackingModes.Follow}
					styleURL={this.state.styleURL}
					style={styles.map}
				/>
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
    width: 200,
    height:200
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