import { HeroUIProvider } from "@heroui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Ui/AppLayout/AppLayout.jsx";
import Guest from "./Pages/Guest/Guest.jsx";
import Home from "./Pages/Home/Home.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
       path : "/guest",
        element: <Guest />,
      },
    ],
  },
]);

function App() {
  return (
    <HeroUIProvider>
      <RouterProvider router={router}></RouterProvider>
    </HeroUIProvider>
  );
}

export default App;
