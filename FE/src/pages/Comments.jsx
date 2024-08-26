/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Comments = () => {
  const comments = [
    {
      content: "Dịch vụ UTECH là tuyệt vời, hỗ trợ nhiệt tình và rất nhanh chóng.",
      author: "Nguyễn Văn A",
      company: "Công ty XYZ",
    },
    {
      content: "Chúng tôi rất hài lòng với chất lượng dịch vụ của UTECH.",
      author: "Lê Thị B",
      company: "Công ty ABC",
    },
    {
      content: "UTECH đã giúp chúng tôi giải quyết vấn đề một cách hiệu quả.",
      author: "Trần Văn C",
      company: "Công ty DEF",
    },
    {
      content: "Rất hài lòng với dịch vụ, đội ngũ làm việc rất chuyên nghiệp.",
      author: "Phạm Văn D",
      company: "Công ty GHI",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === comments.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

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

  const resetInterval = () => {
    setCurrentIndex(currentIndex);
  };

  useEffect(() => {
    resetInterval();
  }, [currentIndex]);

  const { content, author, company } = comments[currentIndex];

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-blue-800 mb-6">
          Đánh giá <span className="text-blue-600">từ khách hàng</span>
        </h2>
        <div className="bg-gray-50 p-6 shadow-lg rounded-lg">
          <div className="flex justify-between items-center">
            <button onClick={handlePrev} className="text-blue-600 text-2xl font-bold">
              {"<"}
            </button>
            <div className="text-center">
              <p className="text-gray-600">{content}</p>
              <p className="mt-4 text-gray-800 font-semibold">
                {author} - {company}
              </p>
            </div>
            <button onClick={handleNext} className="text-blue-600 text-2xl font-bold">
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
