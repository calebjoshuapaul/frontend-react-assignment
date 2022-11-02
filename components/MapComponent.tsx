import React, { useContext, useState } from "react";
import Head from "next/head";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import { BookmarksContext } from "../context/BookmarksContext";
import { Button } from "@mui/material";

interface MapComponentProps {
  className?: string;
}

interface Bookmark {
  name: string;
  Lat: number;
  Lng: number;
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
/*
This component is responsible for rendering the map. This component has to show the map and 
markers bookmarked by users.
*/
const MapComponent = (props: MapComponentProps): JSX.Element => {
  const { bookmarks, setBookmarks } = useContext(BookmarksContext);

  const [markerLat, setMarkerLat] = useState(18.37148);
  const [markerLng, setMarkerLng] = useState(78.07017);

  const handleAddBookmark = () => {
    const bookmarkToAdd = prompt("Give your bookmark a name");

    if (bookmarkToAdd) {
      setBookmarks(() => [
        ...bookmarks,
        {
          name: bookmarkToAdd,
          Lat: markerLat,
          Lng: markerLng,
        },
      ]);

      setMarkerLat(18.37148);
      setMarkerLng(78.07017);
    } else alert("Please provide a name");
  };

  const handleDblClick = (evt: any) => {
    const bookmarkToAdd = prompt("Give your bookmark a name");

    if (bookmarkToAdd) {
      setBookmarks(() => [
        ...bookmarks,
        {
          name: bookmarkToAdd,
          Lat: evt.lngLat.lat,
          Lng: evt.lngLat.lng,
        },
      ]);
    } else alert("Please provide a name");
  };

  return (
    <div className={props.className}>
      <Head>
        <title>Test</title>
      </Head>
      <h3>Map</h3>
      <Map
        initialViewState={{
          latitude: 18.37148,
          longitude: 78.07017,
          zoom: 4,
        }}
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        doubleClickZoom={false}
        onDblClick={(evt) => handleDblClick(evt)}
      >
        <GeolocateControl />
        <ScaleControl position="bottom-right" />
        <NavigationControl position="bottom-left" />
        <FullscreenControl position="top-right" />
        <Marker
          longitude={markerLng}
          latitude={markerLat}
          anchor="bottom"
          draggable={true}
          onDrag={(evt: any) => {
            setMarkerLat(evt.lngLat.lat.toFixed(5));
            setMarkerLng(evt.lngLat.lng.toFixed(5));
          }}
        />
        {bookmarks.map((bookmark: Bookmark, index: any) => {
          return (
            <Marker
              key={index}
              longitude={bookmark.Lng}
              latitude={bookmark.Lat}
              anchor="bottom"
              color="#ff0000"
            />
          );
        })}
      </Map>

      <div>
        <p>
          <strong>Latitude:</strong> {markerLat} | <strong>Longitude:</strong>{" "}
          {markerLng}
        </p>
        <Button variant="contained" onClick={handleAddBookmark}>
          Add to bookmarks
        </Button>
      </div>
    </div>
  );
};

export default MapComponent;
