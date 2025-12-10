import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCities } from "../../../CitiesContext.jsx";

export default function Map() {
  const { cities } = useCities();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);

  useEffect(() => {
    if (lat && lng) {
      setMapPosition([lat, lng]);
    }
  }, [lat, lng]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
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
      console.log(e);
      navigate(`form?${e.latlng.lat}&${e.latlng.lng}`);
      setMapPosition(e.latlng);
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
