import React, { useState, useRef, useEffect, useCallback } from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL from '@deck.gl/react';

import { BasicControls, useHubbleGl, useDeckAnimation } from '@hubble.gl/react';

import { deckAnimationOption } from '../utils/deckAnimationOption';
import { setAnimationKeyframes } from '../animation/setAnimationKeyframes';
import {
  DEFAULT_THEME,
  INITIAL_VIEW_STATE,
  timecode,
  formatConfigs,
  resolution,
} from '../utils/constants';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
// console.log(MAPBOX_TOKEN, 'MAPBOX_TOKEN');

export const Trips = ({ mapStyle }) => {
  const deckRef = useRef(null);
  const staticMapRef = useRef(null);
  const [busy, setBusy] = useState(false);

  const deckAnimation = useDeckAnimation(deckAnimationOption);
  const { deckProps, staticMapProps, adapter, cameraFrame, setCameraFrame } = useHubbleGl({
    deckRef,
    staticMapRef,
    deckAnimation,
    initialViewState: INITIAL_VIEW_STATE,
  });

  const onViewStateChange = useCallback(
    ({ viewState: vs }) => {
      setAnimationKeyframes(cameraFrame, adapter);
      setCameraFrame(vs);
    },
    [timecode.end],
  );

  useEffect(() => {
    onViewStateChange({ viewState: cameraFrame });
  }, []);

  return (
    <>
      <div style={{ position: 'relative' }}>
        <DeckGL
          ref={deckRef}
          style={{ position: 'unset' }}
          effects={DEFAULT_THEME.effects}
          controller={true}
          viewState={cameraFrame}
          onViewStateChange={onViewStateChange}
          width={resolution.width}
          height={resolution.height}
          {...deckProps}
        >
          {staticMapProps.gl && (
            <StaticMap
              ref={staticMapRef}
              mapStyle={mapStyle}
              mapboxApiAccessToken={MAPBOX_TOKEN}
              {...staticMapProps}
              // Note: 'reuseMap' prop with gatsby and mapbox extension causes stale reference error.
            />
          )}
        </DeckGL>
      </div>
      <BasicControls
        adapter={adapter}
        busy={busy}
        setBusy={setBusy}
        formatConfigs={formatConfigs}
        timecode={timecode}
      />
    </>
  );
};
