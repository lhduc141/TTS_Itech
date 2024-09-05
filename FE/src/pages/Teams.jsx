import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeamMembers } from "../redux/userReducer/userThunk";

const Teams = () => {
  const [team, setTeam] = useState([]);
  const dispatch = useDispatch();
  const memList = useSelector((state) => state.userReducer.members);

  useEffect(() => {
    dispatch(getTeamMembers());
  }, [dispatch]);

  const memberList = [
    {
      mem_name: "Đái Tú Nga",
      mem_img: "/src/images/user-36-01.jpg",
      mem_pos: "Giám đốc điều hành",
      mem_desc:
        "Giám sát hoạt động của công ty, đảm bảo các mục tiêu chiến lược được hoàn thành, và lãnh đạo đội ngũ điều hành. Thúc đẩy đổi mới và duy trì mối quan hệ với các bên liên quan để định hướng công ty đạt đến thành công.",
    },
    {
      mem_name: "UTECH ITECHNOLOGY",
      mem_img: "/src/images/user-36-02.jpg",
      mem_pos: "General Director",
      mem_desc:
        "Quản lý và tối ưu hóa nguồn nhân lực và kỹ thuật để hỗ trợ hoạt động của công ty. Tập trung vào tuyển dụng tài năng, phát triển nhân viên, và điều chỉnh tài nguyên phù hợp với mục tiêu chiến lược.",
    },
    {
      mem_name: "Tran Thach Tran",
      mem_img: "/src/images/user-36-03.jpg",
      mem_pos: "General Director",
      mem_desc:
        "Lãnh đạo hoạt động của bộ phận dịch vụ hỗ trợ, đảm bảo hỗ trợ CNTT hiệu quả. Quản lý đội ngũ dịch vụ hỗ trợ, phát triển quy trình hỗ trợ và áp dụng các phương pháp tốt nhất để nâng cao chất lượng dịch vụ",
    },
  ];

  return (
    <div className="py-10 mx-auto text-center">
      <div className="">
        <div className="text-5xl font-bold text-[#021a51]">ĐỘI NGŨ</div>
        <div
          className="bg-gray-100 my-6 p-8 rounded-2xl text-ceter"
          style={{
            boxShadow:
              "inset 0px -5px 4px 0px rgba(255, 255, 255, 0.25), inset 0px 15px 20px 0px rgba(0, 0, 0, 0.35)",
          }}
        >
          <div className="md:columns-2 lg:columns-3 gap-8 space-y-8 container">
            {memberList.map((mem, index) => (
              <div
                key={index}
                className="aspect-auto p-8 border rounded-3xl bg-white hover:bg-[#021a51] hover:text-white hover:cursor-pointer transition-all duration-300 ease-in-out dark:bg-[#FAFAFA] shadow-2xl shadow-gray-350"
              >
                <div className="flex gap-4 items-center">
                  <img
                    className="w-24 h-24 rounded-full"
                    src={mem.mem_img}
                    width={800}
                    height={800}
                    alt="user avatar"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium">{mem.mem_name}</h6>
                    <p className="text-sm">{mem.mem_pos}</p>
                  </div>
                </div>
                <p className="mt-8 text-left text-lg">{mem.mem_desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
