import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import mapConst from 'mallin-app/src/const/mapConst';
import FloorMapLayer from './floorMapLayer';
import { common, map } from 'mallin-app/src/styles';
import {getFloorMapUrl} from 'mallin-app/src/utils/mapUtils';

export default class ShowMap extends Component {

	renderFloorMapLayer() {
		//return <Resource floorID={this.props.currentFloors._id} floors={this.props.floors} />
		return (
			<FloorMapLayer
			 floorID={this.props.currentFloor._id} 
			 floors = {[this.props.currentFloor]}
			 />
		)
	}

	renderPathLayer() {
		return (
			<MapboxGL.ShapeSource id="path" shape={{
				"type": "Feature",
				"properties": {},
				"geometry": {
					"type": "LineString",
					"coordinates": this.props.currentPath
				}
			}}>
				<MapboxGL.LineLayer
					id="asdf"
					style={{
						lineColor: 'red',
						lineWidth: 10,
						lineOpacity: 0.84,
					}}
				/>
			</MapboxGL.ShapeSource>
		)
	}

	renderMap() {
		if (this.props.currentFloor && this.props.location) {

			// show indoor map if got currentFloor
			const centerCoord = [this.props.location.longitude, this.props.location.latitude];
			return(
				<MapboxGL.MapView
					centerCoordinate={centerCoord}
					zoomLevel={21}
					//styleURL={this.props.styleURL}
					style={map.map}>
					{this.renderPathLayer()}
					<MapboxGL.RasterSource
						id='test'
						tms={true}
						tileSize={150}
						url='http://pluspng.com/img-png/facebook-logo-png-image-2335-1403.png?{z}{x}{y}'
						//url='http://mallin-backend.herokuapp.com/api/floors/map_layer/598995439412f10a09bfce9f/{z}/{x}/{y}'
						>
						<MapboxGL.RasterLayer id='testLayer' sourceID='test'/>
					</MapboxGL.RasterSource>
				</MapboxGL.MapView>
			)
			
		} else {
			return (
				<MapboxGL.MapView
					zoomLevel={18}
					styleURL={this.props.styleURL}
					style={map.map}/>
			)
		}
	}

	renderDebug() {
		return (
			<View>
				<Text>Building: {this.props.currentBuilding? this.props.currentBuilding.name: 'none'}</Text>
				<Text>Floor: {this.props.currentFloor? this.props.currentFloor.name: 'none'}</Text>
				<Text>Url: {this.props.currentFloor? getFloorMapUrl(this.props.currentFloor._id): 'none'}</Text>
				<Text>Path: {this.props.currentPath? JSON.stringify(this.props.currentPath) : '[]'}</Text>
				<Text>Latlng: {this.props.location? `[${[this.props.location.longitude]}, ${[this.props.location.latitude]}]`: '[]'}</Text>
			</View>
		)
		
	}

	render() {
		return (
			<View style={map.havePermission}>
				{this.renderMap()}
			</View>
		);
		// return (
		// 	<View style={common.container}>
		// 			<Text>Location, plzzz</Text>
		// 	</View>
		// );
	}
}
