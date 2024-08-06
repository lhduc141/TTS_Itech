/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function WelcomeBanner() {
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  let timeoutId;

  const openAboutUs = () => {
    setAboutUsOpen(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const closeAboutUs = () => {
    timeoutId = setTimeout(() => {
      setAboutUsOpen(false);
    }, 200);
  };

  const cancelClose = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return (
    <div className="relative bg-indigo-200 dark:bg-indigo-500 p-4 sm:p-6 rounded-sm overflow-visible mb-8">
      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">Avocado from Mexico</h1>
          <div className="flex space-x-8">
            <div className="text-xl"><Link to="/" className="hover:underline">Trang chủ</Link></div>
            <div
              className="text-xl relative"
              onMouseEnter={openAboutUs}
              onMouseLeave={closeAboutUs}
            >
              <button className="hover:underline">Về chúng tôi</button>
              {aboutUsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded shadow-lg z-30"
                  onMouseEnter={cancelClose}
                  onMouseLeave={closeAboutUs}
                >
                  <div className="py-1">
                    <Link to="/Aboutus" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700">Về chúng tôi</Link>
                    <Link to="/Team" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700">Đội ngũ</Link>
                  </div>
                </div>
              )}
            </div>
            <div className="text-xl"><Link to="/services" className="hover:underline">Lĩnh vực</Link></div>
            <div className="text-xl"><Link to="/customers" className="hover:underline">Khách hàng</Link></div>
            <div className="text-xl"><Link to="/Contact" className="hover:underline">Liên hệ</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
