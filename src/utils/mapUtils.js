import { NativeEventEmitter } from 'react-native';

import mapConst from 'mallin-app/src/const/mapConst';

import { GeoStore } from 'terraformer-geostore';
import { RTree } from 'terraformer-rtree';
import { Memory } from 'terraformer-geostore-memory';

import { chain, map } from 'lodash';

export function getFloorMapUrl(floorId) {
	const styleUrl = mapConst.url.replace('{floorId}', floorId);
	return styleUrl;
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
	const { longitude, latitude } = location;
  
  
	store.contains({
	  type: 'Point',
	  coordinates: [longitude, latitude],
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

export const drawPath = (currentPath, location, callback) => {
	currentPath = currentPath||[];
	//push new point(position) to current path
	let newPath = [
		...currentPath,
		[location.longitude, location.latitude]
	];

	//only keep limited points number in path array
	while (newPath.length > 10) {
		newPath.shift();
	}

	//callback
	if (callback) {
		callback(newPath);
	}
}
  
