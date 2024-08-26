/* eslint-disable no-unused-vars */
import React from "react";

const Services = () => {
  const services = [
    {
      title: "LĨNH VỰC CUNG CẤP",
      description: (
        <ul className="list-disc pl-5 text-gray-600 mt-4">
          <li className="mb-2">Bảo trì Hệ thống CNTT</li>
          <li className="mb-2">Dịch vụ hỗ trợ CNTT</li>
          <li className="mb-2">Cung cấp máy chủ Email</li>
          <li>Cung cấp Website & Máy chủ</li>
        </ul>
      ),
      image: "", // Bạn có thể để trống hoặc sử dụng một hình ảnh khác.
      hasMoreLink: false, // Không hiển thị liên kết "XEM THÊM"
    },
    {
      title: "Bảo Trì Hệ Thống CNTT",
      description: "Cung cấp dịch vụ bảo trì hệ thống theo yêu cầu của khách hàng.",
      image: "image-placeholder.png",
      hasMoreLink: true, // Hiển thị liên kết "XEM THÊM"
    },
    {
      title: "Dịch Vụ Hỗ Trợ CNTT",
      description: "Dịch vụ hỗ trợ CNTT cho doanh nghiệp như IT tại chỗ và IT từ xa.",
      image: "image-placeholder.png",
      hasMoreLink: true,
    },
    {
      title: "Dịch Vụ Cung Cấp Email",
      description: "Giải pháp - Cung cấp - Quản trị máy chủ Email Hosting.",
      image: "image-placeholder.png",
      hasMoreLink: true,
    },
    {
      title: "Dịch Vụ Website & Máy Chủ Ảo",
      description: "Cung cấp máy chủ để phục vụ Website - chia sẻ dữ liệu trực tuyến.",
      image: "image-placeholder.png",
      hasMoreLink: true,
    },
  ];

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-4 shadow-lg rounded-lg flex flex-col"
            >
              {/* Nếu không có hình ảnh thì bỏ qua */}
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
              )}
              <div className="flex flex-col justify-between flex-grow mt-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {service.title}
                </h3>
                <div className="mt-2 text-sm text-gray-500">
                  {service.description}
                </div>
                {/* Chỉ hiển thị "XEM THÊM" nếu có liên kết */}
                {service.hasMoreLink && (
                  <a
                    href="#"
                    className="mt-4 text-blue-600 hover:underline"
                  >
                    XEM THÊM &gt;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
