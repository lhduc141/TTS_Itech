import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFieldPostDetail } from "../../redux/userReducer/userThunk";
import { BASE_URL_IMG } from "../../services/urlConfig";

const FieldDetail = () => {
  const { fieldId } = useParams();
  const [postDetail, setPostDetail] = useState({});
  const dispatch = useDispatch();
  const fieldPostDetail = useSelector((state) => state.userReducer.postDetail);

  useEffect(() => {
    dispatch(getFieldPostDetail(fieldId));
  }, [dispatch, fieldId]);

  useEffect(() => {
    setPostDetail(fieldPostDetail);
  }, [fieldPostDetail]);

  const formatContent = (content) => {
    if (!content) return null;

    const regexHeader = /^(\d+\.|[a-z]\.)/;

    return content.split("\n").map((paragraph, index) => {
      if (index === 0 || regexHeader.test(paragraph.trim())) {
        return (
          <React.Fragment key={index}>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              {paragraph.trim()}
            </h3>
            <br />
          </React.Fragment>
        );
      }

      return (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      <header className="bg-gray-800 text-center p-5">
        <div className="flex justify-normal space-x-11 items-center">
          <div>
            {/* Hiển thị hình ảnh từ fieldImage */}
            {postDetail.field && (
              <img
                src={BASE_URL_IMG + postDetail.field.fieldImage}
                alt="UTECH Logo"
                className="mx-auto h-64 w-full object-contain"
              />
            )}
          </div>
          <div>
            <h1 className="text-3xl text-center font-bold text-blue-400 mb-6">
              DỊCH VỤ CNTT
            </h1>
            <h2 className="text-2xl text-center font-semibold text-blue-400 mb-4">
              Website - Virtual Server
            </h2>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-8">
        <section className="mb-10">
          {/* Hiển thị nội dung với format xuống dòng */}
          {formatContent(postDetail.fPostContent)}
        </section>
      </div>
    </div>
  );
};

export default FieldDetail;
