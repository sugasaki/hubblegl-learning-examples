import { AmbientLight, PointLight, LightingEffect } from '@deck.gl/core';

export const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0,
});

export const pointLight = new PointLight({
  color: [255, 255, 255],
  intensity: 2.0,
  position: [139.8799118, 35.632947, 8000], // シンデレラ城
  // position: [139.7526734, 35.6849986, 8000] // 皇居
});

export const lightingEffect = new LightingEffect({ ambientLight, pointLight });

export const material = {
  ambient: 0.1,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [60, 64, 70],
};

export const DEFAULT_THEME = {
  buildingColor: [74, 80, 87],
  trailColor0: [253, 128, 93],
  trailColor1: [23, 184, 190],
  material,
  effects: [lightingEffect],
};

export const INITIAL_VIEW_STATE = {
  longitude: -74,
  latitude: 40.72,
  zoom: 13,
  pitch: 45,
  bearing: 0,
};
//35.6327799,139.8824151,41m

export const landCover = [
  [
    [-74.0, 40.7],
    [-74.02, 40.7],
    [-74.02, 40.72],
    [-74.0, 40.72],
  ],
];

export const resolution = {
  width: 1280,
  height: 720,
};

/** @type {import('@hubble.gl/core/src/types').FormatConfigs} */
export const formatConfigs = {
  webm: {
    quality: 0.8,
  },
  png: {
    archive: 'zip',
  },
  jpeg: {
    archive: 'zip',
    quality: 0.8,
  },
  gif: {
    sampleInterval: 1000,
    width: resolution.width,
    height: resolution.height,
  },
};

export const timecode = {
  start: 0,
  end: 5000,
  framerate: 30,
};
