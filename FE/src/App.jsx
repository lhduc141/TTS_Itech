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
import MaintenanceService from "./pages/User/Maintaince";
import ITSupportService from "./pages/User/SupportService";
import EmailServices from "./pages/User/ProvideMail";
import WebsiteVirtualServer from "./pages/User/WebVirtual";

import Dashboard from "./pages/Admin/dashboard/Dashboard";
import SignIn from "./pages/Admin/authentication/signin/SignIn";
import FieldDetail from "./pages/User/FieldDetail";

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
          path="/Maintaince"
          element={
            <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <MaintenanceService />
            </Layout>
          }
        />
        <Route
          path="/SupportService"
          element={
            <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <ITSupportService />
            </Layout>
          }
        />
        <Route
          path="/ProvideMail"
          element={
            <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <EmailServices />
            </Layout>
          }
        />
        <Route
          path="/WebVirtual"
          element={
            <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <WebsiteVirtualServer />
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
        <Route
          path="/dashboard"
          element={
            <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <Dashboard />
            </Layout>
          }
        />
        {/* Admin Page */}
      </Routes>
    </>
  );
}

export default App;
