// App.jsx
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";
// Import pages
import SignIn from "./pages/authentication/signin/SignIn";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
              <SignIn />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <Dashboard />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
