// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

// Import pages
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import AboutUsPage from "./pages/Aboutus";
import Layout from "./components/layout/Layout";
import Customers from "./pages/Customers";
import Teams from "./pages/Teams";
import MaintenanceService from "./pages/Maintaince";
import ITSupportService from "./pages/SupportService";
import EmailServices from "./pages/ProvideMail";
import WebsiteVirtualServer from "./pages/WebVirtual";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
              <Dashboard />
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
        {/* Admin Page */}
      </Routes>
    </>
  );
}

export default App;
