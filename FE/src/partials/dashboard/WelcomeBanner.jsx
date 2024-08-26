/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function WelcomeBanner() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  let timeoutId;

  const openDropdown = (dropdownName) => {
    setActiveDropdown(dropdownName);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const closeDropdown = () => {
    timeoutId = setTimeout(() => {
      setActiveDropdown(null);
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
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">Avocado from Mexico</h1>
          <div className="flex space-x-8">
            <div className="text-xl"><Link to="/" className="hover:underline">Trang chủ</Link></div>
            <div
              className="text-xl relative"
              onMouseEnter={() => openDropdown('aboutUs')}
              onMouseLeave={closeDropdown}
            >
              <button className="hover:underline">Về chúng tôi</button>
              {activeDropdown === 'aboutUs' && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-indigo-300 rounded shadow-lg z-30"
                  onMouseEnter={cancelClose}
                  onMouseLeave={closeDropdown}
                >
                  <div className="py-1">
                    <Link to="/Aboutus" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-400">Về chúng tôi</Link>
                    <Link to="/Team" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-400">Đội ngũ</Link>
                  </div>
                </div>
              )}
            </div>
            <div
              className="text-xl relative"
              onMouseEnter={() => openDropdown('services')}
              onMouseLeave={closeDropdown}
            >
              <button className="hover:underline">Lĩnh vực</button>
              {activeDropdown === 'services' && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-indigo-300 rounded shadow-lg z-30"
                  onMouseEnter={cancelClose}
                  onMouseLeave={closeDropdown}
                >
                  <div className="py-1">
                    <Link to="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-400">BẢO TRÌ HỆ THỐNG CNTT</Link>
                    <Link to="#" className="block px-4 py-2 text-sm text-slate-700  hover:bg-indigo-400">DỊCH VỤ HỖ TRỢ CNTT</Link>
                    <Link to="#" className="block px-4 py-2 text-sm text-slate-700  hover:bg-indigo-400">DỊCH VỤ CUNG CẤP EMAIL</Link>
                    <Link to="#" className="block px-4 py-2 text-sm text-slate-700  hover:bg-indigo-400">DỊCH VỤ WEBSITE & MÁY CHỦ ẢO</Link>
                  </div>
                </div>
              )}
            </div>
            <div className="text-xl"><Link to="/customers" className="hover:underline">Khách hàng</Link></div>
            <div className="text-xl"><Link to="/Contact" className="hover:underline">Liên hệ</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
