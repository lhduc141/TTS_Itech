// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarousel } from "../../redux/userReducer/userThunk";
import { BASE_URL_IMG } from "../../services/urlConfig";
import { updateCarouselImage } from "../../redux/adminReducer/adminThunk";
import { message } from "antd";

const AdCarousel = () => {
  const [selectedFiles, setSelectedFiles] = useState({}); // Store selected files for each image
  const [fileNames, setFileNames] = useState({}); // Store the file names for each image
  const [carouselImg, setCarouselImg] = useState([]);
  const carouselArr = useSelector((state) => state.userReducer.carouselImg);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarousel());
  }, [dispatch]);

  useEffect(() => {
    setCarouselImg(carouselArr);
  }, [carouselArr]);

  // Handle file input change, store the selected file and file name for the specific image
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

  // Handle text input change for file name
  const handleFileNameChange = (event, index) => {
    const newFileName = event.target.value;
    setFileNames((prevState) => ({
      ...prevState,
      [index]: newFileName, // Update the file name in the input field
    }));
  };

  const handleUpdateClick = async (index) => {
    const selectedFile = selectedFiles[index];
    const updatedFileName = fileNames[index];
    const imgId = carouselImg[index].img_id;

    if (selectedFile) {
      const formData = new FormData();

      // Rename the file by appending the new name to formData
      const renamedFile = new File([selectedFile], updatedFileName, {
        type: selectedFile.type,
      });
      formData.append("file", renamedFile);

      // Dispatch the action with the file and img_id
      dispatch(updateCarouselImage({ formData, img_id: imgId }))
        .then(() => {
          message.success("Update Success");
          setTimeout(() => {
            window.location.reload(); // Reset lại trang
          }, 2000); // 2000ms = 2 giây
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Carousel Image</h2>
        </div>
        <div className="py-2">Select a file to update the carousel image</div>
      </div>

      {/* Image grid with flexbox, 4 images per row */}
      <div className="flex flex-wrap -mx-4">
        {carouselImg?.map((img, index) => (
          <div key={index} className="w-1/4 px-4 mb-6">
            <img
              src={BASE_URL_IMG + img.img_content}
              alt=""
              className="w-full h-64 object-cover mb-2" // Ensure fixed height
            />

            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              name="img_name"
              value={fileNames[index] || img.img_content} // Show either the updated or the original name
              onChange={(e) => handleFileNameChange(e, index)} // Update the file name in state
            />

            <input
              type="file"
              className="file-input w-full max-w-xs"
              onChange={(e) => handleFileChange(e, index)} // Pass index to track selected file for this image
            />

            {selectedFiles[index] && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => handleUpdateClick(index)} // Pass index to handleUpdateClick
              >
                Cập Nhật
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdCarousel;
