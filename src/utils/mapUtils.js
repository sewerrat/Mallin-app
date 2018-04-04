import mapConst from 'mallin-app/src/const/mapConst';

export function getFloorMapUrl(floor) {
	return mapConst.url.replace('abc', floor);
}
