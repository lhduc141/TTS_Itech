/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { whyUsPost } from "../redux/userReducer/userThunk";

const WhyChooseUs = () => {
  const [whyUs, setWhyUs] = useState([]);
  const wuPostList = useSelector((state) => state.userReducer.whyUsPost);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(whyUsPost());
  }, [dispatch]);

  useEffect(() => {
    if (wuPostList?.PostDetails?.length > 0) {
      setWhyUs(wuPostList.PostDetails);
      setLoading(false);
    }
  }, [wuPostList]);

  return (
    <div
      className="py-10 my-12 bg-gray-100"
      style={{
        boxShadow: "0px 10px 10px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Tại sao <span className="text-blue-600">chọn chúng tôi?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs?.map((whyus, index) => (
            <div
              key={whyus.pDetail_id}
              className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg text-center"
            >
              <div className="bg-blue-800 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                {whyus.pDetail_title}
              </h3>
              <p className="text-gray-600">{whyus.pDetail_content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
