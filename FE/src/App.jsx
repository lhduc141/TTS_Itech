// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

// Import pages
import Homepage from "./pages/User/Homepage";
import Contact from "./pages/User/Contact";
import AboutUsPage from "./pages/User/Aboutus";
import Layout from "./components/layout/Layout";
import Customers from "./pages/User/Customers";
import Teams from "./pages/User/Teams";

import Dashboard from "./pages/Admin/Dashboard";
import SignIn from "./pages/Admin/authentication/signin/SignIn";
import FieldDetail from "./pages/User/FieldDetail";
import AdminLayout from "./components/layout/AdminLayout";
import AdField from "./pages/Admin/AdField";
import AdFeedback from "./pages/Admin/AdFeedback";
import AdCarousel from "./pages/Admin/AdCarousel";
import AdMember from "./pages/Admin/AdMember";
import AdPost from "./pages/Admin/AdPost";
import AdCustomer from "./pages/Admin/AdCustomer";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        {/* User page  */}
        <Route
          path="/"
          element={
            <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <Homepage />
            </Layout>
          }
        />
        <Route
          path="/Contact"
          element={
            <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/Aboutus"
          element={
            <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <AboutUsPage />
            </Layout>
          }
        />
        <Route
          path="/Customers"
          element={
            <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <Customers />
            </Layout>
          }
        />
        <Route
          path="/Team"
          element={
            <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <Teams />
            </Layout>
          }
        />
        <Route
          path="/field-detail/:fieldId"
          element={
            <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <FieldDetail />
            </Layout>
          }
        />

        {/* Admin  */}
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="company-information" element={<Dashboard />} />
          <Route path="carousel" element={<AdCarousel />} />
          <Route path="feedback" element={<AdFeedback />} />
          <Route path="post" element={<AdPost />} />
          <Route path="customer" element={<AdCustomer />} />
          <Route path="member" element={<AdMember />} />
          <Route path="field" element={<AdField />} />
        </Route>

        {/* Admin Page */}
      </Routes>
    </>
  );
}

export default App;
