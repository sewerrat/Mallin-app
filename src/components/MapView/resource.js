import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

export default class Resource extends Component {
	render() {
		<React.Fragment>
			<MapboxGL.RasterSource
				id='test'
				tileSize={256}
				tms={true}
				url={this.props.url}>
				<MapboxGL.RasterLayer id='testLayer' sourceID='test'/>
			</MapboxGL.RasterSource>
		</React.Fragment>
	}
}