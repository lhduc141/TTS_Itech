import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInformation } from "../../redux/userReducer/userThunk"; // Import updateInfor
import { updateInfor } from "../../redux/adminReducer/adminThunk";
import { message } from "antd";

const Dashboard = () => {
  const [company, setCompany] = useState({
    cpn_name: "",
    cpn_sname: "",
    cpn_address: "",
    cpn_title: "",
    cpn_desc: "",
    cpn_copyright: "",
    cpn_content: "",
  });
  const [id, setId] = useState();

  const cpn = useSelector((state) => state.userReducer.information);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInformation(2));
  }, [dispatch]);

  useEffect(() => {
    if (cpn) {
      setCompany({
        cpn_name: cpn.name || "UTECH TECHNOLOGY",
        cpn_sname: cpn.sname || "UTECH TECHNOLOGY CO., LTD",
        cpn_address:
          cpn.address ||
          "36B Ngo Quyen Street, Ward 6, District 5, Ho Chi Minh City",
        cpn_title: cpn.title || "UTECH TECHNOLOGY",
        cpn_desc: cpn.desc || "This is information technology Company",
        cpn_copyright:
          cpn.copyright ||
          "COPYRIGHT 2021 UTECH TECHNOLOGY LIMITED COMPANY. ALL RIGHTS RESERVED",
        cpn_content: cpn.content || "no content here",
      });
      setId(cpn.id);
    }
  }, [cpn]);

  // Hàm xử lý khi có sự thay đổi từ input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompany((prevCompany) => ({
      ...prevCompany,
      [name]: value,
    }));
  };

  // Hàm xử lý khi ấn nút Cập Nhật
  const handleUpdateClick = () => {
    dispatch(updateInfor({ company: company, id: id }))
      .then(() => {
        message.success("update success");
        setCompany(company);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex-1 p-6 bg-gray-50">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Thông Tin Công Ty</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleUpdateClick} // Gọi hàm khi click
            >
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
                  name="cpn_name"
                  value={company.cpn_name}
                  onChange={handleInputChange} // Thêm sự kiện onChange
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-700">Tên Rút Gọn</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  name="cpn_sname"
                  value={company.cpn_sname}
                  onChange={handleInputChange} // Thêm sự kiện onChange
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-700">Địa Chỉ</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  name="cpn_address"
                  value={company.cpn_address}
                  onChange={handleInputChange} // Thêm sự kiện onChange
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-700">Tiêu Đề</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  name="cpn_title"
                  value={company.cpn_title}
                  onChange={handleInputChange} // Thêm sự kiện onChange
                />
              </div>
              <div className="flex flex-col col-span-2">
                <label className="text-sm text-gray-700">Mô Tả</label>
                <textarea
                  className="p-2 border border-gray-300 rounded h-32"
                  name="cpn_desc"
                  value={company.cpn_desc}
                  onChange={handleInputChange} // Thêm sự kiện onChange
                />
              </div>
              <div className="flex flex-col col-span-2">
                <label className="text-sm text-gray-700">Bản Quyền</label>
                <textarea
                  className="p-2 border border-gray-300 rounded h-16"
                  name="cpn_copyright"
                  value={company.cpn_copyright}
                  onChange={handleInputChange} // Thêm sự kiện onChange
                />
              </div>
              <div className="flex flex-col col-span-2">
                <label className="text-sm text-gray-700">Nội Dung</label>
                <textarea
                  className="p-2 border border-gray-300 rounded h-16"
                  name="cpn_content"
                  value={company.cpn_content}
                  onChange={handleInputChange} // Thêm sự kiện onChange
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
