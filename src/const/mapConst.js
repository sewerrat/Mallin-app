import apiConst from 'mallin-app/src/const/api';
export default {
    url: `${apiConst.url}/api/floors/map_layer/{floorId}/{z}/{x}/{y}`,
    defaultStyle: 'mapbox://styles/mapbox/satellite-v9',
    API_KEY: '',
    API_SECRET: ''
}