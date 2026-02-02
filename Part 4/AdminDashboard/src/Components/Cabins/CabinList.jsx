import React, { useState } from "react";
import useCabin from "../../Hooks/Cabin/useCabin.js";
import CardSkeleton from "../../Ui/Card/CardSkeleton.jsx";
import Cabin from "./Cabin.jsx";
import { ErrorCard } from "../../Ui/Card/ErrorCard.jsx";
import { EmptyCard } from "../../Ui/Card/EmptyCard.jsx";
import FilterCabinBox from "./FilterCabinBox.jsx";

export default function CabinList({ handleOpenDrawer }) {
  const { cabins, isLoading, error } = useCabin();
  const [showFilter, setShowFilter] = useState(false);
  const [filteredKey, setFilteredKey] = useState([]);
  let filteredCabins = [];

  if (filteredKey == "all") filteredCabins = cabins;
  if (filteredKey == "available")
    filteredCabins = cabins.filter((cabin) => cabin.status === "available");
  if (filteredKey == "out_of_service")
    filteredCabins = cabins.filter(
      (cabin) => cabin.status === "out_of_service"
    );
  if (filteredKey == "maintenance")
    filteredCabins = cabins.filter((cabin) => cabin.status === "maintenance");

  function filterByEquality(array, field, value) {
    if (!value || value == "all") return array;
    return array.filter((item) => item[field] == value);
  }

  return (
    <>
      <div className="border border-lightBorder my-8 py-3 px-3 rounded-xl flex items-center justify-between">
        <div className="w-full pe-4">
          <input
            type="text"
            placeholder="Search cabins..."
            className="w-full py-2 px-4 border border-lightBorder focus-within:border-theme rounded-xl"
          />
        </div>
        <div className="flex items-center relative">
          <button
            className="mainBtn px-12 whitespace-nowrap py-2.5"
            onClick={() => setShowFilter((sh) => !sh)}
          >
            filter (3)
          </button>
          {showFilter && <FilterCabinBox filterByEquality={filterByEquality} cabins={cabins}  />}
        </div>
      </div>
      <div className="mt-8 flex  flex-wrap space-y-10">
        {error ? (
          <div className="w-full min-h-[50vh] flex justify-center items-center">
            <ErrorCard description={error.message} />
          </div>
        ) : isLoading ? (
          <CardSkeleton />
        ) : cabins.length == 0 ? (
          <div className="w-full min-h-[50vh] flex justify-center items-center">
            <EmptyCard
              title="no cabins founded"
              description="cabins will appear here once they are added"
            />
          </div>
        ) : (
          cabins?.map((cabin) => {
            return (
              <Cabin
                key={cabin.id}
                cabin={cabin}
                handleOpenDrawer={handleOpenDrawer}
              />
            );
          })
        )}
      </div>
    </>
  );
}
