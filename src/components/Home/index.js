import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

const testStyle = 'mapbox://styles/sewerrat/cjfaxjliu7c332rp95393huxe';

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
			styleURL: testStyle,
			
		};
	}

	async componentWillMount() {
		const isGranted = await MapboxGL.requestAndroidLocationPermissions();
		this.setState({
			styleURL: testStyle,
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