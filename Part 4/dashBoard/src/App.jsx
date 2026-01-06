import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HeroUIProvider } from "@heroui/react";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <HeroUIProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </HeroUIProvider>
    </>
  );
}

export default App;
