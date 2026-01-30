import React from "react";
import useCabin from "../../Hooks/Cabin/useCabin.js";
import CardSkeleton from "../../Ui/Card/CardSkeleton.jsx";
import Cabin from "./Cabin.jsx";
import { ErrorCard } from "../../Ui/Card/ErrorCard.jsx";
import { EmptyCard } from "../../Ui/Card/EmptyCard.jsx";

export default function CabinList({ handleOpenDrawer }) {
  const { cabins, isLoading, error } = useCabin();
  return (
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
  );
}
