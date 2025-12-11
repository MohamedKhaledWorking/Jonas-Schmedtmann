import { useState } from "react";

export function useGoeLocation() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function getPosition() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        return reject("Your browser does not support geolocation");
      }

      setIsLoading(true);

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const latitude = pos.coords.latitude;
          const longitude = pos.coords.longitude;

          setLat(latitude);
          setLng(longitude);
          setError(null);
          setIsLoading(false);

          resolve({ lat: latitude, lng: longitude });
        },
        (err) => {
          setError(err.message);
          setIsLoading(false);
          reject(err.message);
        }
      );
    });
  }

  return {
    lat,
    lng,
    error,
    isLoading,
    getPosition,
  };
}
