import apiConst from 'mallin-app/src/const/api';
export default {
    url: `${apiConst.url}/floors/map_layer/{floorId}/{z}/{x}/{y}`,
    defaultStyle: 'mapbox://styles/mapbox/satellite-v9'
}