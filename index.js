import { AppRegistry } from 'react-native';
import App from './App';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

const accessToken = 'pk.eyJ1Ijoic2V3ZXJyYXQiLCJhIjoiY2plejJxcjBpMDY5MjJ3bzBweGxxZWdxMyJ9.4_8s-Dnpi0lA3w4ZNqMicA';
MapboxGL.setAccessToken(accessToken);

AppRegistry.registerComponent('myMap', () => App);
