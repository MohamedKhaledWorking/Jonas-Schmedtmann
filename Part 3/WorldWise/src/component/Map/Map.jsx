import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCities } from "../../../CitiesContext.jsx";
import { useGoeLocation } from "../../../hooks/useLocation.jsx";
import { useUrlPosition } from "../../../hooks/useUrlPosition.jsx";

export default function Map() {
  const { cities } = useCities();
  const { lat, lng } = useUrlPosition();
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);
  const { isLoading, lat: geoLat, lng: geoLng, getPosition } = useGoeLocation();

  useEffect(() => {
    if (lat && lng) {
      setMapPosition([lat, lng]);
    }
  }, [lat, lng]);

  useEffect(() => {
    if (geoLat && geoLng) {
      setMapPosition([geoLat, geoLng]);
    }
  }, [geoLat, geoLng]);

  return (
    <div className={styles.mapContainer}>
      <button className={`btn position`} onClick={getPosition}>
        {isLoading ? "getting your location ..." : "get current location"}
      </button>

      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", position: "relative" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {cities?.map((city) => {
          return (
            <Marker
              position={[city?.position?.lat, city?.position?.lng]}
              key={city.id}
            >
              <Popup className="flex-wrap bg-rose-500">
                <p>{city.cityName}</p>
              </Popup>
            </Marker>
          );
        })}
        <ChangeMapPosition position={mapPosition}></ChangeMapPosition>
        <LocationMarker setMapPosition={setMapPosition}> </LocationMarker>
      </MapContainer>
    </div>
  );
}

function ChangeMapPosition({ position }) {
  useMap().setView(position);
  return null;
}

function LocationMarker({ setMapPosition }) {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
      setMapPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
}

// npm i leaflet
// npm i react-leaflet

/* Taken from getting started guide at: https://leafletjs.com/examples/quick-start/ */
// put this in index.css at the top
// @import "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
// @import "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap";

// import 'leaflet/dist/leaflet.css';

{
  /* <MapContainer
  center={mapPosition}
  zoom={13}
  scrollWheelZoom={true}
  style={{ height: "100%", width: "100%" }}
>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={mapPosition}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>; */
}
