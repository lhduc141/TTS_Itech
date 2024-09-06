/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import image from "../../images/aboutus.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAboutUsPost } from "../../redux/userReducer/userThunk";
import Services from "./Services";

const AboutUsPage = () => {
  const [aboutUs, setAboutUs] = useState([]);
  const auPostList = useSelector((state) => state.userReducer.aboutUsPost);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAboutUsPost());
  }, [dispatch]);
  useEffect(() => {
    if (auPostList?.PostDetails?.length > 0) {
      setAboutUs(auPostList.PostDetails);
      setLoading(false);
    }
  }, [auPostList]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Về chúng tôi</h1>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Lời TRI ÂN</h2>
          <div className="flex">
            <div
              className="flex-1 border p-8 rounded-xl"
              style={{
                boxShadow:
                  "inset 0px -5px 4px 0px rgba(255, 255, 255, 0.25), inset 7px 7px 20px 0px rgba(0, 0, 0, 0.35)",
              }}
            >
              <p className="text-justify">
                UTECH xin gởi lời cảm ơn sâu sắc nhất đến toàn thể Quý khách
                hàng đã tin tưởng và lựa chọn UTECH là người bạn đồng hành trong
                lĩnh vực truyền thông. Với phương châm hoạt động là đặt uy tín
                lên hàng đầu; đề cao đạo đức nghề nghiệp; chú trọng đầu tư, nâng
                cao trình độ cho đội ngũ nhân viên; cũng như xây dựng một môi
                trường làm việc chuyên nghiệp, UTECH tự hào cung cấp cho Quý
                khách hàng những sản phẩm – dịch vụ tối ưu nhất với chi phí hợp
                lý nhất mà vẫn đảm bảo chất lượng vượt trội, nhằm đạt được tối
                đa sự hài lòng và tín nhiệm từ phía khách hàng. Chúng tôi luôn
                tâm niệm rằng sự thành công của UTECH trên thị trường hiện nay
                là do sự ủng hộ và cổ vũ lớn lao của Quý khách hàng. Chính vì
                thế, cam kết sẽ là sự lựa chọn đáng tin cậy và chuẩn xác của Quý
                khách hàng trong thời đại công nghệ thông tin như vũ bão ngày
                nay
              </p>
            </div>
            <img
              src={image}
              alt="Gratitude"
              className="w-2/5 ml-8 rounded-xl shadow-md"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">ĐỘI NGŨ</h2>
          <div className="flex justify-between space-x-8">
            {aboutUs?.map((post, index) => (
              <div key={post.pDetail_id} className="w-1/3">
                <h3 className="text-xl font-semibold mb-2 bg-[#021a51] text-white text-center rounded-lg py-2">
                  {post.pDetail_title}
                </h3>
                <p className="text-justify">{post.pDetail_content}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Lĩnh vực</h2>
          <Services />
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
