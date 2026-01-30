import { createContext, useContext, useState } from "react";

const SelectedCabinContext = createContext();

export default function SelectedCabinContextProvider({ children }) {
  const [selectedCabin, setSelectedCabin] = useState(null);
  return (
    <SelectedCabinContext.Provider value={{ selectedCabin, setSelectedCabin }}>
      {children}
    </SelectedCabinContext.Provider>
  );
}

export function useSelectedCabin() {
  return useContext(SelectedCabinContext);
}
