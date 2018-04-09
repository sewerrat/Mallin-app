import mapConst from 'mallin-app/src/const/mapConst';

export function getFloorMapUrl(floorID) {
	return mapConst.url.replace('{floorID}', floorID);
}
