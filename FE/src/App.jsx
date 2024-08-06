// App.jsx
import { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

// Import pages
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import AboutUsPage from './pages/Aboutus';
import Layout from './components/layout/Layout';
import Customers from './pages/Customers';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/" element={
          <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
            <Dashboard />
          </Layout>
        } />
        <Route path="/Contact" element={
          <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
            <Contact />
          </Layout>
        } />
        <Route path="/Aboutus" element={
          <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
            <AboutUsPage />
          </Layout>
        } />
        <Route path="/Customers" element={
          <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
            <Customers />
          </Layout>
        } />
      </Routes>
    </>
  );
}

export default App;
