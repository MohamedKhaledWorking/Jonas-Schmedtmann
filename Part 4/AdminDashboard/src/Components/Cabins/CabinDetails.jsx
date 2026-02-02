import React from "react";
import CabinDetailsGallery from "./CabinDetailsGallery.jsx";
import CabinDetailsName from "./CabinDetailsName.jsx";
import CabinDetailsInfo from "./CabinDetailsInfo.jsx";
import CabinDetailsDescription from "./CabinDetailsDescription.jsx";
import CabinDetailsAmenities from "./CabinDetailsAmenities.jsx";
import CabinDetailsActions from "./CabinDetailsActions.jsx";

export default function CabinDetails() {
  return (
    <>
      <CabinDetailsGallery />
      <CabinDetailsName />
      <CabinDetailsInfo />
      <CabinDetailsDescription />
      <CabinDetailsAmenities />
      <CabinDetailsActions />
    </>
  );
}
