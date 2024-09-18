import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeamMembers } from "../../redux/userReducer/userThunk";
import { BASE_URL_IMG } from "../../services/urlConfig";
import { updateMember } from "../../redux/adminReducer/adminThunk";
import { message } from "antd";

const MembersForm = () => {
  const [member, setMember] = useState({
    mem_img: "",
    mem_name: "",
    mem_pos: "",
    mem_desc: "",
    mem_id: "",
  });

  const [selectedFiles, setSelectedFiles] = useState({}); // Store the selected files for each member
  const [fileNames, setFileNames] = useState({}); // Store the file names for each image
  const [team, setTeam] = useState([]);
  const dispatch = useDispatch();
  const memList = useSelector((state) => state.userReducer.members);

  useEffect(() => {
    dispatch(getTeamMembers());
  }, [dispatch]);

  useEffect(() => {
    setTeam(memList);
  }, [memList]);

  const limitContentToWords = (content, maxWords = 15) => {
    const words = content.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + " ...";
    }
    return content;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleEditClick = (mem, index) => {
    setMember({
      mem_img: BASE_URL_IMG + mem.img,
      mem_name: mem.name,
      mem_pos: mem.position,
      mem_desc: mem.desc,
      mem_id: mem.id,
    });

    setFileNames((prevState) => ({
      ...prevState,
      [index]: mem.img, // Store the file name for the corresponding index
    }));
  };

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name;
      setSelectedFiles((prevState) => ({
        ...prevState,
        [index]: file, // Store the selected file for the corresponding index
      }));

      setFileNames((prevState) => ({
        ...prevState,
        [index]: fileName, // Store the file name for the corresponding index
      }));
    }
  };

  const handleFileNameChange = (event, index) => {
    const newFileName = event.target.value;
    setFileNames((prevState) => ({
      ...prevState,
      [index]: newFileName, // Update the file name in the input field
    }));
  };

  const handleUpdateClick = () => {
    const formData = new FormData();
    const fileIndex = member.mem_id;

    // Append file if selected
    const selectedFile = selectedFiles[fileIndex];
    const updatedFileName = fileNames[fileIndex];

    if (selectedFile) {
      const renamedFile = new File([selectedFile], updatedFileName, {
        type: selectedFile.type,
      });
      formData.append("file", renamedFile);
    }

    // Append other form fields
    formData.append("mem_name", member.mem_name);
    formData.append("mem_pos", member.mem_pos);
    formData.append("mem_desc", member.mem_desc);

    // Dispatch the action to update member with formData
    dispatch(updateMember({ formData, mem_id: member.mem_id }))
      .then(() => {
        message.success("update success");
        setTimeout(() => {
          window.location.reload(); // Reset the page
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="bg-white shadow rounded-lg p-6 space-y-12">
        <h2 className="text-xl font-semibold">Members</h2>

        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8 container">
          {team?.map((mem, index) => (
            <div
              key={index}
              className="aspect-auto p-4 border rounded-3xl bg-white "
            >
              <div className="flex gap-4 items-center">
                <img
                  className="w-24 h-24 rounded-full"
                  src={BASE_URL_IMG + mem.img}
                  alt="user avatar"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium">{mem.name}</h6>
                  <p className="text-sm">{mem.position}</p>
                </div>
              </div>
              <p className="text-left text-lg mt-2">
                {limitContentToWords(mem.desc)}
              </p>
              <div className="flex items-center w-full">
                <button
                  className="btn bg-green-200"
                  onClick={() => handleEditClick(mem, index)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Edit Member</h2>
          <div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleUpdateClick} // Update both info and image
            >
              Update Info and Image
            </button>
          </div>
        </div>

        <form className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-3/10">
              <label className="text-sm text-gray-700">Image</label>
              <img
                src={member.mem_img}
                alt=""
                className="w-24 h-24 rounded-full"
              />
              <div className="flex flex-col">
                <label className="text-sm text-gray-700">File Name</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  value={fileNames[member.mem_id] || ""}
                  onChange={(e) => handleFileNameChange(e, member.mem_id)}
                />
              </div>
              <input
                type="file"
                className="file-input w-full max-w-xs"
                onChange={(e) => handleFileChange(e, member.mem_id)}
              />
            </div>

            <div className="w-full">
              <div className="flex flex-col mt-4">
                <label className="text-sm text-gray-700">Name</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  name="mem_name"
                  value={member.mem_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-sm text-gray-700">Position</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  name="mem_pos"
                  value={member.mem_pos}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-sm text-gray-700">Description</label>
                <textarea
                  className="p-2 border border-gray-300 rounded h-24"
                  name="mem_desc"
                  value={member.mem_desc}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-sm text-gray-700">Member ID</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  name="mem_id"
                  value={member.mem_id}
                  readOnly
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembersForm;
