/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import image from "../images/favicon.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { aboutUsPost } from "../redux/userReducer/userThunk";

const AboutUsPage = () => {
  const [aboutUs, setAboutUs] = useState([]);
  const auPostList = useSelector((state) => state.userReducer.aboutUsPost);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(aboutUsPost());
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
            <div className="flex-1">
              <p className="mb-4">
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
              <p>
                UTECH hệ thống nhân sự chuyên nghiệp, luôn nỗ lực mang đến giá
                trị cốt lõi cho khách hàng, để tất cả các sản phẩm – dịch vụ sau
                bán hàng tốt nhất.
              </p>
            </div>
            <img
              src={image}
              alt="Gratitude"
              className="w-1/3 ml-8 rounded-md shadow-md"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">ĐỘI NGŨ</h2>
          <div className="flex justify-between space-x-8">
            {aboutUs?.map((post, index) => (
              <div key={post.pDetail_id} className="w-1/3">
                <h3 className="text-xl font-semibold mb-2">
                  {index + 1}. {post.pDetail_title}
                </h3>
                <p>{post.pDetail_content}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Lĩnh vực</h2>
          <div className="flex justify-between">
            <div className="w-1/4 p-4 bg-gray-100 rounded-md shadow-md">
              <img
                src={image}
                alt="Service 1"
                className="w-full mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">
                BẢO TRÌ HỆ THỐNG CNTT
              </h3>
              <p>
                Cung cấp dịch vụ bảo trì hệ thống theo yêu cầu của khách hàng
              </p>
              <Link to="#" className="text-blue-500 hover:underline">
                Xem thêm{" "}
              </Link>
            </div>
            <div className="w-1/4 p-4 bg-gray-100 rounded-md shadow-md">
              <img
                src={image}
                alt="Service 2"
                className="w-full mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">
                DỊCH VỤ HỖ TRỢ CNTT
              </h3>
              <p>Hỗ trợ cho doanh nghiệp từ IT căn bản đến IT cao cấp</p>
              <Link to="#" className="text-blue-500 hover:underline">
                Xem thêm{" "}
              </Link>
            </div>
            <div className="w-1/4 p-4 bg-gray-100 rounded-md shadow-md">
              <img
                src={image}
                alt="Service 3"
                className="w-full mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">
                DỊCH VỤ CUNG CẤP EMAIL
              </h3>
              <p>Cài đặt - Cung cấp - Quản trị máy chủ Email Hosting</p>
              <Link to="#" className="text-blue-500 hover:underline">
                Xem thêm{" "}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
