import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import mapConst from 'mallin-app/src/const/mapConst';
import Resource from './resource';
import { common, map } from 'mallin-app/src/styles';

import { IndoorManager } from 'mallin-app/src/utils/indoor/IndoorManager';

export default class ShowMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			coords: []
		}
	}

	componentDidMount() {
		IndoorManager.addListener(({ latitude, longitude }) => {
			let newCoords = [
				...this.state.coords,
				[longitude, latitude]
			];
			while (newCoords.length > 10) {
				newCoords.shift();
			}
			this.setState({
				coords: newCoords
			});
		});
	}

	renderResource() {
		//return <Resource floorID={this.props.currentFloors._id} floors={this.props.floors} />
		return (
			<MapboxGL.RasterSource
				key='testRS'
				id='test'
				tms={true}
				url={'http://mallin-backend.herokuapp.com/floors/map_layer/598995439412f10a09bfce9f/{z}/{x}/{y}'}>
				<MapboxGL.RasterLayer id='testLayer' sourceID='test' />
			</MapboxGL.RasterSource>
		)
	}

	render() {

		return (
			<View style={map.havePermission}>
				<Text>{this.props.floorID}</Text>
				<MapboxGL.MapView
					centerCoordinate={this.state.coords[this.state.coords.length - 1] ? this.state.coords[this.state.coords.length - 1] : [-122.48369693756104, 37.83381888486939]}
					zoomLevel={21}
					//styleURL={this.props.styleURL}
					style={map.map}>

					<MapboxGL.ShapeSource id="path" shape={{
						"type": "Feature",
						"properties": {},
						"geometry": {
							"type": "LineString",
							"coordinates": this.state.coords
						}
					}}>
						<MapboxGL.LineLayer
							id="asdf"
							style={{
								lineColor: 'red',
								lineWidth: 3,
								lineOpacity: 0.84,
							}}
						/>
					</MapboxGL.ShapeSource>
				</MapboxGL.MapView>
			</View>
		);
		// return (
		// 	<View style={common.container}>
		// 			<Text>Location, plzzz</Text>
		// 	</View>
		// );
	}
}
