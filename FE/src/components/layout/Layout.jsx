/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Layout.jsx
import React from 'react';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import Sidebar from '../../partials/Sidebar';
import WelcomeBanner from '../../partials/dashboard/WelcomeBanner';

const Layout = ({ children, sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Welcome banner */}
            <WelcomeBanner />
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
