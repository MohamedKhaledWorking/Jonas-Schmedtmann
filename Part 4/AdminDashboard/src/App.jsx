import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./Ui/AppLayout/AppLayout.jsx";
import Guest from "./Pages/Guest/Guest.jsx";
import Home from "./Pages/Home/Home.jsx";
import Cabins from "./Pages/Cabins/Cabins.jsx";

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
      {
        path: "/cabins",
        element: <Cabins />,
      },
    ],
  },
]);

function App() {
  return (
    <HeroUIProvider>
      <ToastProvider placement="top-center" toastOffset={50} />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </HeroUIProvider>
  );
}

export default App;
