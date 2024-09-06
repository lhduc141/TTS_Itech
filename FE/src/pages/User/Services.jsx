/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fieldListThunk } from "../../redux/userReducer/userThunk";
import { BASE_URL_IMG } from "../../services/urlConfig";
import { useLocation } from "react-router-dom";

const Services = () => {
  const [field, setField] = useState([]);
  const [service, setService] = useState([]);
  const path = useLocation();
  const fieldList = useSelector((state) => state.userReducer.fieldList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fieldListThunk());
  }, []);
  useEffect(() => {
    if (fieldList) {
      setField(fieldList);
    }
  }, [fieldList]);

  const getGridTemplateColumns = () => {
    if (location.pathname === "/") {
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5";
    }
    if (field.length <= 2) {
      return "grid-cols-1 sm:grid-cols-2";
    } else if (field.length <= 4) {
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    } else {
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5";
    }
  };

  return (
    <div
      className="py-10 bg-white rounded-lg"
      style={{
        boxShadow:
          "inset 0px -10px 4px 0px rgba(255, 255, 255, 0.25), inset 0px 5px 30px 0px rgba(0, 0, 0, 0.35)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${getGridTemplateColumns()} gap-6`}>
          {location.pathname === "/" && (
            <div
              key={0}
              className="bg-[#021a51] p-4 shadow-lg rounded-lg flex flex-col"
              style={{
                boxShadow: "inset 15px 15px 20px 0px rgba(255, 255, 255, 0.25)",
              }}
            >
              <div className="flex flex-col justify-between flex-grow mt-4 text-white">
                <h3 className="text-lg font-semibold ">LĨNH VỰC CUNG CẤP</h3>
                <div className="mt-2 text-sm ">
                  <ul className="list-disc pl-5">
                    {field?.map((fieldItem, item) => {
                      return (
                        <li key={item} className="mb-2">
                          {fieldItem.field_name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {field?.map((fieldPost, item) => (
            <div
              key={fieldPost.field_id}
              className="bg-white p-4 shadow-lg rounded-lg flex flex-col"
            >
              {/* Nếu không có hình ảnh thì bỏ qua */}
              {fieldPost.fieldImage && (
                <img
                  src={BASE_URL_IMG + fieldPost.fieldImage}
                  //  alt={fieldPost.title}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
              )}
              <div className="flex flex-col justify-between flex-grow mt-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {fieldPost.field_name}
                </h3>
                <div className="mt-2 text-sm text-gray-500">
                  {fieldPost.fieldDesc}
                </div>
                {/* Chỉ hiển thị "XEM THÊM" nếu có liên kết */}
                <a
                  href={`/field-detail/${fieldPost.field_id}`}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  XEM THÊM &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
