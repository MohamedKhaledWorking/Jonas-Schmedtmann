import { useState } from "react";
import { HeroUIProvider } from "@heroui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HeroUIProvider>
    </HeroUIProvider>
  );
}

export default App;
