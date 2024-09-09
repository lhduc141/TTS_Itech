import { useState } from "react";

const AboutUsForm = () => {
  const [aboutUs, setAboutUs] = useState({
    pDetail_title: "Mission",
    pDetail_content: "Our mission is to apply IT into reality...",
    post_id: 12,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAboutUs((prevAboutUs) => ({
      ...prevAboutUs,
      [name]: value,
    }));
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold">About Us Form</h2>
        <form>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Tiêu Đề</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              name="pDetail_title"
              value={aboutUs.pDetail_title}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Nội Dung</label>
            <textarea
              className="p-2 border border-gray-300 rounded h-32"
              name="pDetail_content"
              value={aboutUs.pDetail_content}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Post ID</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded"
              name="post_id"
              value={aboutUs.post_id}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutUsForm;
