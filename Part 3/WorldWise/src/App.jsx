import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import Product from "./Pages/Product/Product.jsx";
import Login from "./Pages/Login/Login.jsx";
import Pricing from "./Pages/Pricing/Pricing.jsx";
import Main from "./Pages/Main/Main.jsx";
import CityList from "./component/City/CityList.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import CountryList from "./component/Country/CountryList.jsx";
import City from "./component/City/City.jsx";
import Form from "./component/Form.jsx";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getData() {
    setIsLoading(true);
    axios
      .get(`http://localhost:3001/cities`)
      .then((res) => res.data)
      .then((data) => setCities(data));

    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<Main />}>
            <Route
              index
              element={ <Navigate to="cities" replace /> }
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route path="cities/:id" element={<City cities={cities} /> } />
            <Route path="form" element={<Form  /> } />
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
