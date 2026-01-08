import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./UI/Layout/Layout.jsx";
import ThemeContextProvider from "./Context/ThemeContext.jsx";
import Guest from "./Pages/Guest/Guest.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
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
    <>
      <Toaster />
      <HeroUIProvider>
        <ThemeContextProvider>
          <RouterProvider router={router}>
            <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </RouterProvider>
        </ThemeContextProvider>
      </HeroUIProvider>
    </>
  );
}

export default App;
