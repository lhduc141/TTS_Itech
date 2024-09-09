import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentList } from "../../redux/userReducer/userThunk";
import { message } from "antd";
import { updateFeedback } from "../../redux/adminReducer/adminThunk";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    fb_id: "",
    fb_writer: "",
    fb_cpn: "",
    fb_content: "",
  });

  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();
  const cmtList = useSelector((state) => state.userReducer.comments);

  useEffect(() => {
    dispatch(getCommentList());
  }, [dispatch]);

  useEffect(() => {
    setComments(cmtList);
  }, [cmtList]);

  useEffect(() => {
    if (cmtList && cmtList.length > 0) {
      setComments(cmtList);
      setFeedback({
        fb_id: cmtList[0]?.id || "",
        fb_writer: cmtList[0]?.writer || "",
        fb_cpn: cmtList[0]?.company || "",
        fb_content: cmtList[0]?.content || "",
      });
    }
  }, [cmtList]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const limitContentToWords = (content, maxWords = 10) => {
    const words = content.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + " ...";
    }
    return content;
  };

  const handleUpdateClick = () => {
    const data = {
      fb_writer: feedback.fb_writer,
      fb_cpn: feedback.fb_cpn,
      fb_content: feedback.fb_content,
    };
    dispatch(updateFeedback({ data: data, id: feedback.fb_id }))
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

  const handleEditClick = (comment) => {
    setFeedback({
      fb_id: comment.id,
      fb_writer: comment.writer,
      fb_cpn: comment.company,
      fb_content: comment.content,
    });
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold">Feedback Form</h2>

        {/* Grid layout for comments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4">
          {comments?.map((cmt, index) => (
            <div
              key={index}
              className="shadow-xl rounded-lg border-black p-4 flex justify-between"
            >
              <div className="w-[80%]">
                <h2 className="font-bold">{cmt.writer}</h2>
                <h3 className="text-[12px]">{cmt.company}</h3>
                <p>{limitContentToWords(cmt.content)}</p>
              </div>

              <div className="flex items-center">
                <button
                  className="btn bg-green-200"
                  onClick={() => handleEditClick(cmt)} // Handle edit click
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback form */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Thông Tin Công Ty</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleUpdateClick}
            >
              Cập Nhật
            </button>
          </div>
        </div>

        <form className="space-y-6">
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Id bài viết</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              name="fb_id"
              readOnly
              value={feedback.fb_id}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Người Viết</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              name="fb_writer"
              value={feedback.fb_writer}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Công Ty</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              name="fb_cpn"
              value={feedback.fb_cpn}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Nội Dung</label>
            <textarea
              className="p-2 border border-gray-300 rounded h-32"
              name="fb_content"
              value={feedback.fb_content}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
