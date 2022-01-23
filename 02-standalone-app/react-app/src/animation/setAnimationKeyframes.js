import { easing } from 'popmotion';
import { timecode } from '../utils/constants';

export const setAnimationKeyframes = (vs, adapter) => {
  adapter.animationManager.setKeyframes('deck', {
    cameraKeyframe: {
      timings: [0, timecode.end],
      keyframes: [
        {
          longitude: vs.longitude,
          latitude: vs.latitude,
          zoom: vs.zoom,
          pitch: vs.pitch,
          bearing: vs.bearing,
        },
        {
          longitude: vs.longitude,
          latitude: vs.latitude,
          zoom: vs.zoom + 2,
          bearing: vs.bearing + 180,
          pitch: vs.pitch,
        },
      ],
      easings: [easing.easeInOut],
    },
  });
};
