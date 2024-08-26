/* eslint-disable no-unused-vars */
import React from "react";

const LeaveMess = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-blue-800 mb-6">Về chúng tôi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600 leading-relaxed mb-10">
              Nội dung giới thiệu về công ty. Đây là đoạn văn bản mô tả về công ty,
              dịch vụ cung cấp, và lý do khách hàng nên chọn công ty.
            </p>
          </div>
          <form className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Để lại tin nhắn
            </h3>
            <input
              type="text"
              placeholder="Tên và họ của bạn"
              className="w-full border-gray-300 rounded-lg p-2 mb-4"
            />
            <input
              type="email"
              placeholder="Email của bạn"
              className="w-full border-gray-300 rounded-lg p-2 mb-4"
            />
            <input
              type="text"
              placeholder="Chủ đề"
              className="w-full border-gray-300 rounded-lg p-2 mb-4"
            />
            <textarea
              placeholder="Nội dung"
              className="w-full border-gray-300 rounded-lg p-2 mb-4"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 rounded-lg"
            >
              GỬI TIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveMess;
