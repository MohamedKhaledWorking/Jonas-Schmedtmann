import { createContext, useContext, useState } from "react";

const SelectedContext = createContext();

export default function SelectedContextProvider({ children }) {
  const [selectedGuest, setSelectedGuest] = useState(null);
  return (
    <SelectedContext.Provider value={{ selectedGuest, setSelectedGuest }}>
      {children}
    </SelectedContext.Provider>
  );
}

export function useSelectedGuest() {
  return useContext(SelectedContext);
}
