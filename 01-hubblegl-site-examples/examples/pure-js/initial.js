import { DeckAdapter, DeckAnimation, AnimationManager, WebMEncoder } from '@hubble.gl/core';
import { easing } from 'popmotion';

export const POSITION_1 = {
  latitude: 53.43908116042187,
  longitude: 12.287845233145143,
  zoom: 4.874450321621229,
  bearing: 72.28125,
  pitch: 86.69082968902045,
  maxZoom: 20,
  minZoom: 0,
  maxPitch: 90,
  minPitch: 0,
};

export const POSITION_2 = {
  latitude: 30.024522739828146,
  longitude: -43.62384043774613,
  zoom: 1.1306811261830276,
  bearing: 8.71875,
  pitch: 30.662291717091527,
  maxZoom: 20,
  minZoom: 0,
  maxPitch: 90,
  minPitch: 0,
};

export const timecode = {
  start: 0,
  end: 2000,
  framerate: 60,
};

export const resolution = {
  width: 640,
  height: 480,
};

export const animation = new DeckAnimation({
  cameraKeyframe: {
    width: resolution.width,
    height: resolution.height,
    timings: [0, timecode.end - 250],
    keyframes: [POSITION_1, POSITION_2],
    easings: easing.easeInOut,
  },
});

export const formatConfigs = {
  webm: {
    quality: 0.8,
  },
  jpeg: {
    quality: 0.8,
  },
  gif: {
    sampleInterval: 1000,
  },
};

export const filename = 'pure-js';
