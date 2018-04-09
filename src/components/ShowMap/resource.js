import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import {getFloorMapUrl} from 'mallin-app/src/utils/mapUtils';

export default class Resource extends Component {
  
  renderResource() {
    if(!this.props.floors) {
      return null;
    }
    return this.props.floors.map(floor => {
      if (floor.id != this.props.floorID) {
        return null;
      }
      return(
        <MapboxGL.RasterSource
          key={this.props.floorID}
          id='test'
          tms={true}
          url={getFloorMapUrl(this.props.floorID)}>
          <MapboxGL.RasterLayer id='testLayer' sourceID='test'/>
        </MapboxGL.RasterSource>
      )
    });
  }
  render() {
		if (!this.props.floorID) {
			return null;
    }
		return (
      <React.Fragment>
        {this.renderResource()}
      </React.Fragment>
			
		);
	}
}

