/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const WhyChooseUs = () => {
  const [whyUs, setWhyUs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch();
  }, []);

  const reasons = [
    {
      title: "Sứ Mệnh",
      content:
        "Sứ mệnh của chúng tôi là sử dụng CNTT và các dịch vụ công nghệ số nhằm nâng cao hiệu suất làm việc và gia tăng giá trị cho khách hàng.",
    },
    {
      title: "Tầm Nhìn - Đồng Hành",
      content:
        "Tầm nhìn của chúng tôi là đồng hành cùng doanh nghiệp để phát triển và thành công trong môi trường kinh doanh số.",
    },
    {
      title: "Nguồn Nhân Lực",
      content:
        "Đội ngũ nhân lực của chúng tôi có kinh nghiệm lâu năm, được đào tạo chuyên sâu, sẵn sàng đáp ứng mọi yêu cầu của khách hàng.",
    },
  ];

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
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg text-center"
            >
              <div className="bg-blue-800 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
