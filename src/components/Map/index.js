import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyle from './mapStyle.json';

const Marker = ({ name }) => {
  return (
    <img
      src="http://v3.danielmall.com/articles/svg-workflow-for-designers/svg.svg"
      className="marker"
      style={{
        cursor: 'pointer',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '42px',
        height: '18px',
        transform: 'translate(-50%, -50%)',
      }}
      title={name}
    />
  );
};

function Map({ options }) {
  const GOOGLE_API_KEY = process.env.GATSBY_GOOGLE_MAPS_API_KEY;

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        defaultCenter={options.center}
        defaultZoom={options.zoom}
        options={{
          styles: mapStyle,
          fullscreenControl: false,
          zoomControl: false,
        }}
      >
        <Marker
          lat={options.center.lat}
          lng={options.center.lng}
          name="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;

Map.defaultProps = {
  options: {
    center: { lat: -29.93478, lng: -51.001107 },
    zoom: 17,
  },
};
