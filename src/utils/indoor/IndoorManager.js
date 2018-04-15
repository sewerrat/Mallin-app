import data from './data.json';

const indoorListener = [];
const gpsListener = [];

const sortedData = data.sort((a, b) => a.time < b.time);
const minTime = Math.min.apply(null, sortedData.map(a => a.time));
const maxTime = Math.max.apply(null, sortedData.map(a => a.time));
const atlasId = '';

let time = minTime;
let reversed = false;

export const process = () => {
  let currentData = [];

  if (reversed) {
    currentData = sortedData.filter(data => data.time >= time && data.time < time + 100);
  } else {
    currentData = sortedData.filter(data => data.time <= time && data.time > time - 100);
  }

  if (reversed) {
    time -= 100;
  } else {
    time += 100;
  }

  if (time < minTime) {
    reversed = false;
  }

  if (time > maxTime) {
    reversed = true;
  }

  currentData.filter(a => a.type === 'gps').forEach(a => {
    const { lat, lng } = a.latlng;
    gpsListener.forEach(listener => listener({ lat, lng }));
  });;

  currentData.filter(a => a.type === 'indoor').forEach(a => {
    const { lat, lng } = a.latlng;
    indoorListener.forEach(listener => listener({lat, lng}));
  });

  setTimeout(process, 100);
};

export const IndoorManager = {
  init: () => { },
  addListener: listener => {
    indoorListener.push(listener);
  }
};

export const GPSManager = {
  init: () => { },
  addListener: listener => {
    gpsListener.push(listener);
  }
};
