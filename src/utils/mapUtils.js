import { NativeEventEmitter } from 'react-native';
import IndoorManager from 'react-native-indoor-manager';

import mapConst from 'mallin-app/src/const/mapConst';
import building_detected from 'mallin-app/src/modules/building';

import { GeoStore } from 'terraformer-geostore';
import { RTree } from 'terraformer-rtree';
import { Memory } from 'terraformer-geostore-memory';

import { chain, map } from 'lodash';

export function getFloorMapUrl(floorID) {
	return mapConst.url.replace('{floorID}', floorID);
}

export function initIndoAltasService(store) {
	// Create a React Native NativeEventEmitter
	const indoorEventEmitter = new NativeEventEmitter(IndoorManager);
	// Add listener
	indoorEventEmitter.addListener('locationChanged', location => {
		store.dispatch(detectBuilding(location));
	});
	// init Indoor Atlas service
	IndoorManager.initService(API_KEY, API_SECRET);
}

export const getCurrentAreaByLocation = (floorId, location, areas, callback) => {
	const store = new GeoStore({
	  store: new Memory(),
	  index: new RTree(),
	});
  
	chain(areas)
	  .filter(area => area.floorId === floorId)
	  .each(area => store.add({
		type: 'Feature',
		id: area._id,
		geometry: {
		  type: 'Polygon',
		  coordinates: [map(area.bounds, ([lat, lng]) => [lng, lat])],
		},
		properties: {},
	  }));
	const { lng, lat } = location;
  
  
	store.contains({
	  type: 'Point',
	  coordinates: [lng, lat],
	}, (err, res) => {
	  if (err) {
		console.log(err);
	  }
	  console.log(res);
	  map(res, (area) => {
		if (callback) {
		  console.log(area);
		  callback(area);
		}
	  });
	});
  };
  
