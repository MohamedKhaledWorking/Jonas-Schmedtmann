import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout.jsx";
import Home, { homePizzasLoader } from "./Pages/Home/Home.jsx";
import Menu, { MenuLoader } from "./Pages/Menu/Menu.jsx";
import Details, { pizzaLoader } from "./Pages/Details/Details.jsx";
import Track from "./Pages/Track/Track.jsx";
import Order, { orderLoader } from "./Pages/Order/Order.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import CheckOut, { orderAction } from "./Pages/CheckOut/CheckOut.jsx";
import CreatePizza from "./Pages/CreatePizza/CreatePizza.jsx";
import Error from "./UI/Error.jsx";
import NoTrackFound from "./Component/Track/NoTrackFound.jsx";
import TrackFound, { getOrderLoader } from "./Component/Track/TrackFound.jsx";
import CartContextProvider from "./Context/CartContext.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homePizzasLoader,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <Error />,
      },
      {
        path: "/pizza/:id",
        element: <Details />,
        loader: pizzaLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/Checkout",
        element: <CheckOut />,
        action: orderAction,
      },
      {
        path: "/order/:id",
        element: <Order />,
        loader: orderLoader,
      },
      {
        path: "/track",
        element: <Track />,
        children: [
          {
            index: true,
            element: <NoTrackFound />,
          },
          {
            path: ":id",
            element: <TrackFound />,
            loader: getOrderLoader,
          },
        ],
      },
      {
        path: "/createPizza",
        element: <CreatePizza />,
      },
    ],
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
