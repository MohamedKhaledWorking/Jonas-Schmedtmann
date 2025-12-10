import { useState } from "react";

export function useGoeLocation() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function getPosition() {
    if (!navigator.geolocation) {
      return toast.error("Your browser does not support geolocation");
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLat(pos.coords.latitude);
        setLng(pos.coords.longitude);
        setError(null);
        setIsLoading(false);
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
      }
    );
  }

  return {
    lat,
    lng,
    error,
    isLoading,
    getPosition,
  };
}
