import { HeroUIProvider } from "@heroui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import AppLayout from "./Ui/AppLayout/AppLayout.jsx";
import Guest from "./Pages/Guest/Guest.jsx";
import Home from "./Pages/Home/Home.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/guest",
        element: <Guest />,
      },
    ],
  },
]);

function App() {
  return (
    <HeroUIProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools  />
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </HeroUIProvider>
  );
}

export default App;
