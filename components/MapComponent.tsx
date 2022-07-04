import React from "react";
import Map from "react-map-gl";

interface MapComponentProps {
  className?: string;
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

/*
This component is responsible for rendering the map. This component has to show the map and 
markers bookmarked by users.
*/
const MapComponent = (props: MapComponentProps): JSX.Element => {
  return (
    <div className={props.className}>
      <h3>Map</h3>
      <Map
        initialViewState={{
          latitude: 37.7577,
          longitude: -122.4376,
          zoom: 8,
        }}
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
};

export default MapComponent;
