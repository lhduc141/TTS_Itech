/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import utechlogo from "../../images/utech_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { fieldListThunk } from "../../redux/userReducer/userThunk";

function WelcomeBanner() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [fieldListArr, setFieldListArr] = useState([]);

  const dispatch = useDispatch();

  // Corrected: `fieldList` should not be destructured
  const fieldList = useSelector((state) => state.userReducer.fieldList);

  useEffect(() => {
    dispatch(fieldListThunk());
  }, [dispatch]);

  useEffect(() => {
    if (fieldList) {
      setFieldListArr(fieldList);
    }
  }, [fieldList]);

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
    <div className="relative bg-gradient-to-r from-white from-30% via-[#445886] via-45% to-[#021a51] to-80% p-4 sm:px-8 rounded-xl overflow-visible mb-8 shadow-2xl shadow-[#021a51]/50">
      {/* Content */}
      <div className="relative z-10 text-white font-medium">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">
            <Link to={"/"}>
              <img src={utechlogo} className="h-20 w-80" alt="" />
            </Link>
          </h1>
          <div className="flex space-x-10">
            <div className="text-xl">
              <Link to="/" className="hover:underline">
                Trang chủ
              </Link>
            </div>
            <div
              className="text-xl relative"
              onMouseEnter={() => openDropdown("aboutUs")}
              onMouseLeave={closeDropdown}
            >
              <button className="hover:underline">Về chúng tôi</button>
              {activeDropdown === "aboutUs" && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded shadow-lg z-30"
                  onMouseEnter={cancelClose}
                  onMouseLeave={closeDropdown}
                >
                  <div className="py-1">
                    <Link
                      to="/Aboutus"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-400"
                    >
                      Về chúng tôi
                    </Link>
                    <Link
                      to="/Team"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-400"
                    >
                      Đội ngũ
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div
              className="text-xl relative"
              onMouseEnter={() => openDropdown("services")}
              onMouseLeave={closeDropdown}
            >
              <button className="hover:underline">Lĩnh vực</button>
              {activeDropdown === "services" && fieldListArr.length > 0 && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded shadow-lg z-30"
                  onMouseEnter={cancelClose}
                  onMouseLeave={closeDropdown}
                >
                  <div className="py-1">
                    {fieldListArr?.map((field, index) => (
                      <Link
                        key={field.field_id}
                        to={`/field-detail/${field.field_id}`}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-400"
                      >
                        {field.field_name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="text-xl">
              <Link to="/customers" className="hover:underline">
                Khách hàng
              </Link>
            </div>
            <div className="text-xl">
              <Link to="/Contact" className="hover:underline">
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
