import { PolygonLayer } from '@deck.gl/layers';
import { TripsLayer } from '@deck.gl/geo-layers';

import { DATA_URL, DEFAULT_THEME, landCover, timecode } from './constants';

export const deckAnimationOption = {
  getLayers: (a) =>
    a.applyLayerKeyframes([
      new TripsLayer({
        id: 'trips',
        data: DATA_URL.TRIPS,
        getPath: (d) => d.path,
        getTimestamps: (d) => d.timestamps,
        getColor: (d) => (d.vendor === 0 ? DEFAULT_THEME.trailColor0 : DEFAULT_THEME.trailColor1),
        opacity: 1,
        widthMinPixels: 2,
        rounded: true,
        trailLength: 180,
        shadowEnabled: false,
      }),
      new PolygonLayer({
        id: 'buildings',
        data: DATA_URL.BUILDINGS,
        extruded: true,
        wireframe: false,
        opacity: 0.5,
        getPolygon: (f) => f.polygon,
        getElevation: (f) => f.height,
        getFillColor: DEFAULT_THEME.buildingColor,
        material: DEFAULT_THEME.material,
      }),
      new PolygonLayer({
        id: 'ground',
        data: landCover,
        getPolygon: (f) => f,
        stroked: false,
        getFillColor: [0, 0, 0, 0],
      }),
    ]),
  layerKeyframes: [
    {
      id: 'trips',
      timings: [0, timecode.end],
      keyframes: [{ currentTime: 0 }, { currentTime: 1800 }],
    },
  ],
};
