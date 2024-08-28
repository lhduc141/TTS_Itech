/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentList } from "../redux/userReducer/userThunk";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const cmtList = useSelector((state) => state.userReducer.comments);

  useEffect(() => {
    dispatch(commentList());
  }, [dispatch]);

  useEffect(() => {
    setComments(cmtList);
  }, [cmtList]);

  useEffect(() => {
    if (comments.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === comments.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [comments.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? comments.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === comments.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (comments.length === 0) {
    return <div className="py-10 text-center">No comments available.</div>;
  }

  const { content, writer, company } = comments[currentIndex];

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-blue-800 mb-6">
          Đánh giá <span className="text-blue-600">từ khách hàng</span>
        </h2>
        <div className="bg-gray-50 p-6 shadow-2xl rounded-lg">
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrev}
              className="text-blue-600 text-2xl font-bold"
            >
              {"<"}
            </button>
            <div className="text-left mx-8">
              <p className="text-gray-600">{content}</p>
              <p className="mt-4 text-gray-800 font-semibold">
                {writer} - {company}
              </p>
            </div>
            <button
              onClick={handleNext}
              className="text-blue-600 text-2xl font-bold"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
