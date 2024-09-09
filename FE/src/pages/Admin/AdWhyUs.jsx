import { useState } from "react";

const WhyUsForm = () => {
  const [whyUs, setWhyUs] = useState({
    pDetail_title: "Mission",
    pDetail_content: "Our mission is to apply IT into reality...",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWhyUs((prevWhyUs) => ({
      ...prevWhyUs,
      [name]: value,
    }));
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold">Why Us Form</h2>
        <form>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Tiêu Đề</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              name="pDetail_title"
              value={whyUs.pDetail_title}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Nội Dung</label>
            <textarea
              className="p-2 border border-gray-300 rounded h-32"
              name="pDetail_content"
              value={whyUs.pDetail_content}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default WhyUsForm;
