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
		if (!this.state.url) {
			return null;
		}
		return (
			<Mapbox.RasterSource
				id="sat"
				tileSize={256}
				tms={true}
				url={'http://localhost:3000/images/Praying.jpg?{x}{y}{z}'}>
						<Mapbox.RasterLayer id='satLayer' sourceID='sat'/>
			</Mapbox.RasterSource>
		);
	}

	render() {
		if (this.state.isAndroidPermissionGranted) { 
			return(
				<Mapbox.MapView
				styleURL={Mapbox.StyleURL.Light}
				zoomLevel={3}
				centerCoordinate={[-97.5164, 35.4676]}
				style={styles.container}
				showUserLocation={true}>
					{this.renderRaster()}
        </Mapbox.MapView>)
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