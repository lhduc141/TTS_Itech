/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

import { useDispatch, useSelector } from "react-redux";
import { storage } from "../../services/storage";
import { changeLangId } from "../../redux/langReducer/langReducer";

const Layout = ({ children, sidebarOpen, setSidebarOpen }) => {
  const dispatch = useDispatch();
  const { lang_id } = useSelector((state) => state.userReducer);

  useEffect(() => {
    storage.setLangId(2);
    dispatch(changeLangId(2));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar with fixed width */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        className="w-64 lg:block hidden" // Fixed width for large screens
      />
      
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
