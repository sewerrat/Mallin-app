import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

export default class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			styleURL: 'mapbox://styles/sewerrat/cjezy1v735lfr2sta1wq8abwv',
		};
	}

	async componentWillMount() {
		const isGranted = await MapboxGL.requestAndroidLocationPermissions();
		this.setState({
			isAndroidPermissionGranted: isGranted
		});
	}

	renderRaster() {
		return (
			<MapboxGL.RasterSource
				id="sat"
				url={MapboxGL.StyleURL.Light}>
						<MapboxGL.RasterLayer id='satLayer' sourceID='sat'/>
			</MapboxGL.RasterSource>
		);
	}

	render() {
		return(
			<View style={styles.havePermission}>
				<Text>{this.state.styleURL}</Text>
				<MapboxGL.MapView
				styleURL={MapboxGL.StyleURL.Light}
				centerCoordinate={[-97.5164, 35.4676]}
				style={styles.map}
				showUserLocation={true}>
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