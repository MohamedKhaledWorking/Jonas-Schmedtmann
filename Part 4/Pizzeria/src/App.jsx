import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import Menu from "./Pages/Menu/Menu.jsx";
import Details from "./Pages/Details/Details.jsx";
import Track from "./Pages/Track/Track.jsx";
import Order from "./Pages/Order/Order.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import CheckOut from "./Pages/CheckOut/CheckOut.jsx";
import CreatePizza from "./Pages/CreatePizza/CreatePizza.jsx";

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
        path: "/pizza/:id",
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
      {
        path: "/Checkout",
        element: <CheckOut />,
      },
      {
        path: "/createPizza",
        element: <CreatePizza />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
