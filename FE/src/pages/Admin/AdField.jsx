import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFieldList,
  updateFieldPost,
} from "../../redux/adminReducer/adminThunk";
import { message } from "antd";

const AdField = () => {
  const [field, setField] = useState({
    field_id: "",
    field_name: "",
    fieldDesc: "",
    fieldImage: "",
  });

  const [fieldPost, setFieldPost] = useState({
    fPost_id: "",
    fPost_title: "",
    fPost_content: "",
  });

  const [selectedFile, setSelectedFile] = useState(null); // Store the selected image file
  const [fields, setFields] = useState([]);
  const dispatch = useDispatch();
  const fieldList = useSelector((state) => state.adminReducer.field);

  useEffect(() => {
    dispatch(getFieldList());
  }, [dispatch]);

  useEffect(() => {
    if (fieldList && fieldList.length > 0) {
      setFields(fieldList);
      setField({
        field_id: fieldList[0]?.field_id || "",
        field_name: fieldList[0]?.field_name || "",
        fieldDesc: fieldList[0]?.fieldDesc || "",
        fieldImage: fieldList[0]?.fieldImage || "",
      });
      setFieldPost({
        fPost_id: fieldList[0]?.FieldPosts[0]?.fieldPostId || "",
        fPost_title: fieldList[0]?.FieldPosts[0]?.fieldPostTitle || "",
        fPost_content: fieldList[0]?.FieldPosts[0]?.fPostContent || "",
      });
    }
  }, [fieldList]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setField((prevField) => ({
      ...prevField,
      [name]: value,
    }));
  };

  const handlePostInputChange = (e) => {
    const { name, value } = e.target;
    setFieldPost((prevFieldPost) => ({
      ...prevFieldPost,
      [name]: value,
    }));
  };

  const handleEditClick = (field, post) => {
    setField({
      field_id: field.field_id,
      field_name: field.field_name,
      fieldDesc: field.fieldDesc,
      fieldImage: field.fieldImage,
    });

    setFieldPost({
      fPost_id: post.fieldPostId,
      fPost_title: post.fieldPostTitle,
      fPost_content: post.fPostContent,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file); // Store the selected file for the image
    }
  };

  const handleUpdateClick = () => {
    const formData = new FormData();

    // Append file if selected
    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    // Append other form fields
    formData.append("field_name", field.field_name);
    formData.append("fieldDesc", field.fieldDesc);
    formData.append("fPost_title", fieldPost.fPost_title);
    formData.append("fPost_content", fieldPost.fPost_content);

    // Dispatch the action to update the field and post details with formData
    dispatch(updateFieldPost({ formData, fPost_id: fieldPost.fPost_id }))
      .then(() => {
        message.success("Field and post updated successfully");
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
      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold">Field and Post Management</h2>

        {/* Field and post list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4">
          {fields?.map((fld, index) =>
            fld.FieldPosts.map((post, idx) => (
              <div
                key={`${index}-${idx}`}
                className="shadow-xl rounded-lg border-black p-4 flex justify-between"
              >
                <div className="w-[80%]">
                  <h2 className="font-bold">{fld.field_name}</h2>
                  <h3 className="text-[12px]">{post.fieldPostTitle}</h3>
                  <p>{post.fPostContent.slice(0, 20)}...</p>
                </div>

                <div className="flex items-center">
                  <button
                    className="btn bg-green-200"
                    onClick={() => handleEditClick(fld, post)} // Edit field and post
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Field and Post form */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Edit Field and Post</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleUpdateClick} // Update both info and image
            >
              Update
            </button>
          </div>
        </div>

        <form className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-3/10">
              <label className="text-sm text-gray-700">Field Image</label>
              <img
                src={
                  field.fieldImage ? `/path/to/images/${field.fieldImage}` : ""
                }
                alt="Field"
                className="w-24 h-24 rounded-full"
              />
              <div className="flex flex-col">
                <label className="text-sm text-gray-700">Choose Image</label>
                <input
                  type="file"
                  className="file-input w-full max-w-xs"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-col mt-4">
                <label className="text-sm text-gray-700">Field Name</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  name="field_name"
                  value={field.field_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-sm text-gray-700">
                  Field Description
                </label>
                <textarea
                  className="p-2 border border-gray-300 rounded h-24"
                  name="fieldDesc"
                  value={field.fieldDesc}
                  onChange={handleInputChange}
                />
              </div>

              {/* Post Info */}
              <div className="flex flex-col mt-4">
                <label className="text-sm text-gray-700">Post Title</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  name="fPost_title"
                  value={fieldPost.fPost_title}
                  onChange={handlePostInputChange}
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-sm text-gray-700">Post Content</label>
                <textarea
                  className="p-2 border border-gray-300 rounded h-24"
                  name="fPost_content"
                  value={fieldPost.fPost_content}
                  onChange={handlePostInputChange}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdField;
