import "./App.css";

import { lazy } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { CitiesContextProvider } from "../Context/CitiesContext.jsx";
import { AuthContextProvider } from "../Context/AuthContext.jsx";

// import Home from "./Pages/Home/Home.jsx";
// import Login from "./Pages/Login/Login.jsx";
// import Product from "./Pages/Product/Product.jsx";
// import Pricing from "./Pages/Pricing/Pricing.jsx";
// import ProtectedRoute from "./Pages/Layout/ProtectedRoute.jsx";
// import Main from "./Pages/Main/Main.jsx";

import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import CityList from "./component/City/CityList.jsx";
import CountryList from "./component/Country/CountryList.jsx";
import City from "./component/City/City.jsx";
import Form from "./component/Form.jsx";
import { Suspense } from "react";

const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const Login = lazy(() => import("./Pages/Login/Login.jsx"));
const Product = lazy(() => import("./Pages/Product/Product.jsx"));
const Pricing = lazy(() => import("./Pages/Pricing/Pricing.jsx"));
const ProtectedRoute = lazy(() => import("./Pages/Layout/ProtectedRoute.jsx"));
const Main = lazy(() => import("./Pages/Main/Main.jsx"));

export default function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <CitiesContextProvider>
          <AuthContextProvider>
            <Navbar />
            <Suspense>
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
            </Suspense>
          </AuthContextProvider>
        </CitiesContextProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

// dist/index.html                   0.47 kB │ gzip:   0.30 kB
// dist/assets/icon-C76IL8ru.png    20.20 kB
// dist/assets/logo-CRBkOzM_.png    50.69 kB
// dist/assets/index-BM6mTkP4.css   49.29 kB │ gzip:  13.85 kB
// dist/assets/index-BamyUrs8.js   417.67 kB │ gzip: 133.17 kB
