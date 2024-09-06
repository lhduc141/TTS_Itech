import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeamMembers } from "../../redux/userReducer/userThunk";
import { BASE_URL_IMG } from "../../services/urlConfig";

const Teams = () => {
  const [team, setTeam] = useState([]);
  const dispatch = useDispatch();
  const memList = useSelector((state) => state.userReducer.members);

  useEffect(() => {
    dispatch(getTeamMembers());
  }, [dispatch]);
  useEffect(() => {
    setTeam(memList);
  }, [memList]);

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
            {team?.map((mem, index) => (
              <div
                key={index}
                className="aspect-auto p-8 border rounded-3xl bg-white hover:bg-[#021a51] hover:text-white hover:cursor-pointer transition-all duration-300 ease-in-out dark:bg-[#FAFAFA] shadow-2xl shadow-gray-350"
              >
                <div className="flex gap-4 items-center">
                  <img
                    className="w-24 h-24 rounded-full"
                    src={BASE_URL_IMG + mem.img}
                    width={800}
                    height={800}
                    // alt="user avatar"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium">{mem.name}</h6>
                    <p className="text-sm">{mem.position}</p>
                  </div>
                </div>
                <p className="mt-8 text-left text-lg">{mem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
