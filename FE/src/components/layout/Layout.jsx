/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Layout.jsx
import React, { useEffect } from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import Sidebar from "../../partials/Sidebar";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import Map from "../../pages/Map";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../../services/storage";
import { changeLangId } from "../../redux/langReducer/langReducer";

const Layout = ({ children, sidebarOpen, setSidebarOpen }) => {
  const dispatch = useDispatch();
  const { lang_id } = useSelector((state) => state.userReducer);
  useEffect(() => {
    storage.setLangId(2);
    dispatch(changeLangId(2));
  }, []);

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner />
            {children}
          </div>
        </main>
        <Map />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
