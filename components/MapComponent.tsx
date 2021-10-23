import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { ViewportProps } from "react-map-gl";

interface MapComponentProps {
  className?: string;
}

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN || "";

/*
This component is responsible for rendering the map. This component has to show the map and 
markers bookmarked by users.
*/
const MapComponent = (props: MapComponentProps): JSX.Element => {
  const [viewport, setViewport] = useState<ViewportProps>({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <div className={props.className}>
      <h3>Map</h3>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(nextViewport: ViewportProps) =>
          setViewport(nextViewport)
        }
      />
    </div>
  );
};

export default MapComponent;
