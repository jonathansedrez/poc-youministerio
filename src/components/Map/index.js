import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyle from './mapStyle.json';

const Marker = ({ name }) => {
  return (
    <div
      className="marker"
      style={{
        cursor: 'pointer',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '18px',
        height: '18px',
        backgroundColor: 'red',
        border: '2px solid #fff',
        borderRadius: '100%',
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
        options={{ styles: mapStyle }}
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
