/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import image from "../images/carousel1.jpg";
import image2 from "../images/carousel2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getCarousel } from "../redux/userReducer/userThunk";
import { BASE_URL_IMG } from "../services/urlConfig";

const images = [image, image2, image, image2, image]; // Danh sách hình ảnh

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselImg, setCarouselImg] = useState([]);

  const carouselArr = useSelector((state) => state.userReducer.carouselImg);
  const intervalRef = useRef(null); // Sử dụng useRef để lưu trữ interval
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarousel());
  }, [dispatch]);
  useEffect(() => {
    setCarouselImg(carouselArr);
  }, [carouselArr]);

  // Hàm chuyển đến ảnh tiếp theo
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetInterval(); // Reset interval khi nhấn nút
  };

  // Hàm chuyển đến ảnh trước đó
  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    resetInterval(); // Reset interval khi nhấn nút
  };

  // Hàm thiết lập interval
  const startInterval = () => {
    intervalRef.current = setInterval(goToNext, 2000);
  };

  // Hàm xóa interval và thiết lập lại
  const resetInterval = () => {
    clearInterval(intervalRef.current);
    startInterval();
  };

  // Bắt đầu interval khi component được mount
  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current); // Dọn dẹp khi component bị unmount
  }, []);

  return (
    <div
      id="animation-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {carouselImg?.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <img
              src={BASE_URL_IMG + img.img_content}
              className="w-full h-full object-cover"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 dark:bg-gray-800/30 group-hover:bg-gray-300 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 dark:bg-gray-800/30 group-hover:bg-gray-300 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
