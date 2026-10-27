import React from 'react';

export default function PlaceMarkerPreview({ view = 'Map' }) {
  return (
    <div className="phone-shell" aria-label="Place Marker mobile app concept preview">
      <div className="phone-speaker" />
      <div className="phone-screen">
        <div className="phone-top">
          <span>9:41</span>
          <span>◔ ▮</span>
        </div>
        <div className="map-heading">
          <span>{view === 'Map' ? 'YOUR PLACES' : 'SAVED PLACES'}</span>
          <b>⌕</b>
        </div>
        {view === 'Map' ? (
          <div className="map-canvas">
            <span className="map-road road-one" />
            <span className="map-road road-two" />
            <span className="map-block block-one" />
            <span className="map-block block-two" />
            <span className="map-block block-three" />
            <span className="map-water" />
            <span className="map-pin pin-one">✳</span>
            <span className="map-pin pin-two">✳</span>
            <span className="map-pin pin-three">✳</span>
            <span className="map-current">●</span>
          </div>
        ) : (
          <div className="concept-saved-list">
            {['Somewhere good', 'Weekend escape', 'Coffee stop'].map((place) => (
              <div key={place}>
                <span>✳</span>
                <strong>{place}</strong>
                <small>Saved place · concept</small>
              </div>
            ))}
          </div>
        )}
        <div className="saved-place">
          <span className="place-icon">✳</span>
          <span>
            <small>RECENTLY SAVED</small>
            <strong>Somewhere good</strong>
          </span>
          <b>↗</b>
        </div>
        <div className="phone-tabs">
          <span>
            ⌖<small>Map</small>
          </span>
          <span>
            ✳<small>Saved</small>
          </span>
          <span>
            ＋<small>Add place</small>
          </span>
        </div>
      </div>
    </div>
  );
}
