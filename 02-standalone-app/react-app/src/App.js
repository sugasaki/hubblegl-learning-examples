import React from 'react';
import { Container } from './components/Container';
import { Trips } from './components/Trips';

// const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';
const MAP_STYLE = 'mapbox://styles/mapbox/dark-v9';
// const MAP_STYLE = 'mapbox://styles/mapbox/light-v9';
// const MAP_STYLE = 'mapbox://styles/mapbox/streets-v9';
// const MAP_STYLE = 'mapbox://styles/mapbox/outdoors-v9';
// const MAP_STYLE = 'mapbox://styles/mapbox/satellite-v9';

export default function App({ mapStyle = MAP_STYLE }) {
  return (
    <Container>
      <Trips mapStyle={mapStyle} />
    </Container>
  );
}
