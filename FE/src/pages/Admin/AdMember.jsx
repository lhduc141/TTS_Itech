import { useState } from "react";

const MembersForm = () => {
  const [member, setMember] = useState({
    mem_img: "",
    mem_name: "Đái Tú Nga",
    mem_pos: "Giám đốc điều hành",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold">Members Form</h2>
        <form>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Hình Ảnh</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              name="mem_img"
              value={member.mem_img}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Tên</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              name="mem_name"
              value={member.mem_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Chức Vụ</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              name="mem_pos"
              value={member.mem_pos}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembersForm;
