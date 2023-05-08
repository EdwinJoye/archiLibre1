import React from "react";
import GoogleMapReact from "google-map-react";
import "../css/contact.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 48.822430661529026,
      lng: 2.208630993253485,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="contact__map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDw8C1USZ9tllcVvnuQ70GWil8tp3XpETk" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
