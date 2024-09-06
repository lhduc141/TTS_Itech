/* eslint-disable no-unused-vars */
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex-1 p-6 bg-gray-50">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Thông Tin Công Ty</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Cập Nhật
            </button>
          </div>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-700">Tên Công Ty</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  value="CÔNG TY CÔNG NGHỆ UTECH"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-700">Tên Rút Gọn</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  value="UTECH TECHNOLOGY CO., LTD"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-700">Địa Chỉ</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  value="36B Ngô Quyền, Phường 6, Quận 5, Thành phố Hồ Chí Minh"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-700">Tiêu Đề</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  value="CÔNG TY CÔNG NGHỆ UTECH"
                  readOnly
                />
              </div>
              <div className="flex flex-col col-span-2">
                <label className="text-sm text-gray-700">Mô Tả</label>
                <textarea
                  className="p-2 border border-gray-300 rounded h-32"
                  readOnly
                >
                  CÔNG TY CÔNG NGHỆ UTECH Địa chỉ: 36B Ngô Quyền, Phường 6, Quận
                  5, Thành phố Hồ Chí Minh Website: www.utechcompany.vn Email:
                  info@utechcompany.vn Hotline : 0938 710 780
                </textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
