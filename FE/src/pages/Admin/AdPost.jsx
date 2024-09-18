import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { getAllPost, updatePost } from "../../redux/adminReducer/adminThunk";

const AdPost = () => {
  const [post, setPost] = useState({
    pDetail_id: "",
    pDetail_title: "",
    pDetail_content: "",
    post_type: "",
  });

  const [postList, setPostList] = useState([]);
  const dispatch = useDispatch();
  const postArr = useSelector((state) => state.adminReducer.allPost);

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  useEffect(() => {
    setPostList(postArr);
  }, [postArr]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
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
      pDetail_title: post.pDetail_title,
      pDetail_content: post.pDetail_content,
    };

    // Assuming you dispatch the correct action to update the post
    dispatch(updatePost({ data, pDetail_id: post.pDetail_id }))
      .then(() => {
        message.success("Update success");
        setTimeout(() => {
          window.location.reload(); // Reset the page
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditClick = (postDetail) => {
    setPost({
      pDetail_id: postDetail.pDetail_id,
      pDetail_title: postDetail.pDetail_title,
      pDetail_content: postDetail.pDetail_content,
      post_type: postDetail.post.post_type,
    });
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold">Edit Post</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4">
          {postList?.map((postDetail, index) => (
            <div
              key={index}
              className="shadow-xl rounded-lg border-black p-4 flex justify-between"
            >
              <div className="w-[80%]">
                <h2 className="font-bold">
                  {postDetail.pDetail_title}{" "}
                  <h3 className="font-medium">
                    type: {postDetail.post.post_type}
                  </h3>
                </h2>

                <p>{limitContentToWords(postDetail.pDetail_content)}</p>
              </div>

              <div className="flex items-center">
                <button
                  className="btn bg-green-200"
                  onClick={() => handleEditClick(postDetail)} // Handle edit click
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Post form */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Post Detail</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleUpdateClick}
            >
              Update
            </button>
          </div>
        </div>

        <form className="space-y-6">
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Post ID</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              name="pDetail_id"
              readOnly
              value={post.pDetail_id}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Type</label>
            <input
              className="p-2 border border-gray-300 rounded"
              name="post_type"
              value={post.post_type}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Post Title</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              name="pDetail_title"
              value={post.pDetail_title}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700">Content</label>
            <textarea
              type="text"
              className="p-2 border border-gray-300 rounded h-32"
              name="pDetail_content"
              value={post.pDetail_content}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdPost;
