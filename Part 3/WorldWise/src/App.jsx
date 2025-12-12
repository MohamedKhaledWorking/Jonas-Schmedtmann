import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesContextProvider } from "../Context/CitiesContext.jsx";

import Home from "./Pages/Home/Home.jsx";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import Product from "./Pages/Product/Product.jsx";
import Login from "./Pages/Login/Login.jsx";
import Pricing from "./Pages/Pricing/Pricing.jsx";
import Main from "./Pages/Main/Main.jsx";
import CityList from "./component/City/CityList.jsx";
import CountryList from "./component/Country/CountryList.jsx";
import City from "./component/City/City.jsx";
import Form from "./component/Form.jsx";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "../Context/AuthContext.jsx";
import ProtectedRoute from "./Pages/Layout/ProtectedRoute.jsx";

export default function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <CitiesContextProvider>
          <AuthContextProvider>
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <Main />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="cities" replace />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="form" element={<Form />} />
                <Route path="countries" element={<CountryList />} />
              </Route>
            </Routes>
          </AuthContextProvider>
        </CitiesContextProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}
