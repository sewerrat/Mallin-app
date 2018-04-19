import data from './data.json';

const indoorListener = [];
const gpsListener = [];

const sortedData = data.sort((a, b) => a.time < b.time);
const minTime = Math.min.apply(null, sortedData.map(a => a.time));
const maxTime = Math.max.apply(null, sortedData.map(a => a.time));
const atlasId = '268fde9a-8ce3-415f-9fcb-b303c6822e71';

const STEP = 500;
const SPEED = 1000;

let time = minTime;
let reversed = false;

export const process = () => {
  let currentData = [];

  if (reversed) {
    currentData = sortedData.filter(data => data.time >= time && data.time < time + SPEED);
  } else {
    currentData = sortedData.filter(data => data.time <= time && data.time > time - SPEED);
  }

  if (reversed) {
    time -= SPEED;
  } else {
    time += SPEED;
  }

  if (time < minTime) {
    reversed = false;
  }

  if (time > maxTime) {
    reversed = true;
  }

  currentData.filter(a => a.type === 'gps').forEach(a => {
    const { latitude, longitude } = a.latlng;
    gpsListener.forEach(listener => listener({ latitude, longitude, atlasId }));
  });;

  currentData.filter(a => a.type === 'indoor').forEach(a => {
    const { latitude, longitude } = a.latlng;
    indoorListener.forEach(listener => listener({ latitude, longitude, atlasId }));
  });

  setTimeout(process, STEP);
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
