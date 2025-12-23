import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import Menu from "./Pages/Menu/Menu.jsx";
import Details from "./Pages/Details/Details.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/menu/:id",
        element: <Details />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
