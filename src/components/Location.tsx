import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const libraries: any[] = ["places"];
const mapContainerStyle = { width: "100%", height: "400px" };
const center = { lat: 37.7749, lng: -122.4194 };

const snazzyMapStyle = [
  {
    featureType: "all",
    elementType: "geometry.fill",
    stylers: [
      {
        lightness: "-100",
      },
      {
        color: "#ffdac9",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#ffcab1",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffcab1",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        lightness: 100,
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
      {
        lightness: 700,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#92e1dd",
      },
    ],
  },
];

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAfa1C92OTnIgoS2Ao5WJ3NDtZG8vvRTYo",
    libraries,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <>
      {/* for side bar */}
      <div className="sectionLeft" id="location">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
          options={{ styles: snazzyMapStyle }}
        />
      </div>
    </>
  );
};

export default Map;
