import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

import "../css/contact.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({ env }) {
  const location = {
    address: "Cabinet AOtheninGirard",
    lat: 48.822430661529026,
    lng: 2.208630993253485,
  };
  const defaultProps = {
    center: {
      lat: 48.822430661529026,
      lng: 2.208630993253485,
    },
    zoom: 15,
  };

  return (
    // Important! Always set the container height explicitlydfdfd

    <div className="map__container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={location}
        defaultZoom={defaultProps.zoom}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
