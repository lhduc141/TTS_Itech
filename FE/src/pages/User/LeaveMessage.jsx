/* eslint-disable no-unused-vars */
import React from "react";

const LeaveMess = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[3.5fr,6.5fr] gap-12">
          <div>
            <h2 className="text-xl text-justify font-bold text-blue-800 mb-6">
              Về chúng tôi
            </h2>
            <hr />
            <p className="text-gray-600 leading-relaxed mb-10">
              Hòa nhịp chung với xu hướng phát triển vượt bậc của thị trường,
              CÔNG TY CÔNG NGHỆ UTECH ra đời đáp ứng và thỏa mãn tối ưu nhu cầu,
              các đòi hỏi khắt khe của Doanh nghiệp. Là một tập thể với những
              người trẻ, nhiệt huyết và tầm nhìn dài hạn, kết hợp với công nghệ
              - kỹ thuật hiện đại, không chỉ là đơn vị cung cấp dịch vụ CNTT đến
              khách hàng mà chúng tôi luôn đồng hành, phấn đấu mang đến cho
              khách hàng chất lượng dịch vụ công nghệ tốt nhất đem lại hiệu quả
              kinh tế cao nhất.
            </p>
          </div>
          <form className="bg-white p-6 shadow-lg rounded-xl">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Để lại tin nhắn
            </h3>
            <div className="flex">
              <div className="w-[40%]">
                <input
                  type="text"
                  placeholder="Công ty"
                  className="w-full border-gray-300 rounded-lg p-2 mb-4"
                />
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
              </div>
              <div>
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
              </div>
            </div>

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
