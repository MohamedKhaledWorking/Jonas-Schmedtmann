import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import Menu from "./Pages/Menu/Menu.jsx";
import Details from "./Pages/Details/Details.jsx";
import Track from "./Pages/Track/Track.jsx";
import Order from "./Pages/Order/Order.jsx";
import Cart from "./Pages/Cart/Cart.jsx";

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
      {
        path: "/track",
        element: <Track />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
