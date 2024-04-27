import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoute from './pages/ProtectedRoute';

import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import SpinnerFullPage from './components/SpinnerFullPage';

import React, { Suspense, lazy } from 'react';

// import Product from "./pages/Product";
// import Homepage from "./pages/Homepage";
// import Pricing from "./pages/Pricing";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

// dist/assets/index-Dx-1G45s.css   29.85 kB │ gzip:   5.08 kB
// dist/assets/index-aljq2Yjq.js   530.02 kB │ gzip: 150.24 kB

const Homepage = lazy(() => import('./pages/Homepage'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const Login = lazy(() => import('./pages/Login'));

// dist/assets/Logo-rXzzFTzh.css             0.03 kB │ gzip:   0.05 kB
// dist/assets/Login-Hz-oqbuF.css            0.35 kB │ gzip:   0.22 kB
// dist/assets/Product-l96e_Z8K.css          0.47 kB │ gzip:   0.27 kB
// dist/assets/Homepage-cA_7_lc6.css         0.49 kB │ gzip:   0.29 kB
// dist/assets/PageNav-tpSF5DwP.css          0.51 kB │ gzip:   0.28 kB
// dist/assets/AppLayout-2VldbgSI.css        1.91 kB │ gzip:   0.70 kB
// dist/assets/index-g8muhNZL.css           26.20 kB │ gzip:   4.36 kB
// dist/assets/Product.module-OBpXS8Vy.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-GH0qaSbz.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-jHPm7JZY.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/PageNav-gWCaN_tv.js           0.49 kB │ gzip:   0.27 kB
// dist/assets/Pricing-EZytxntI.js           0.65 kB │ gzip:   0.42 kB
// dist/assets/Homepage-okfzfTkq.js          0.67 kB │ gzip:   0.41 kB
// dist/assets/Product-zBBzwHqD.js           0.86 kB │ gzip:   0.49 kB
// dist/assets/Login-hwN3o1zj.js             1.01 kB │ gzip:   0.54 kB
// dist/assets/AppLayout-y9qc1YO3.js       156.97 kB │ gzip:  46.12 kB
// dist/assets/index-jVzvP2FB.js           371.33 kB │ gzip: 103.71 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />

              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
