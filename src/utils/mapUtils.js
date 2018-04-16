import { NativeEventEmitter } from 'react-native';

import mapConst from 'mallin-app/src/const/mapConst';

import { GeoStore } from 'terraformer-geostore';
import { RTree } from 'terraformer-rtree';
import { Memory } from 'terraformer-geostore-memory';

import { chain, map } from 'lodash';

export function getFloorMapUrl(floorID) {
	return mapConst.url.replace('{floorID}', floorID);
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
  
