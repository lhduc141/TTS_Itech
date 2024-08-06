import React from 'react';
import image from "../images/favicon.png"
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Về chúng tôi</h1>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Lời TRI ÂN</h2>
          <div className="flex">
            <div className="flex-1">
              <p className="mb-4">
                UTECH xin gửi lời cảm ơn sâu sắc nhất đến toàn thể Quý khách hàng đã tin tưởng và lựa chọn UTECH là người bạn đồng hành trong suốt thời gian qua. Với phương châm hoạt động là sự hài lòng của Quý khách hàng, UTECH luôn nỗ lực từng ngày nhằm đáp ứng mọi nhu cầu cũng như xây dựng mối quan hệ hợp tác chuyên nghiệp. UTECH hứa hẹn sẽ tiếp tục mang đến những sản phẩm, dịch vụ tốt nhất với chất lượng và độ tin cậy cao nhất.
              </p>
              <p>
                UTECH hệ thống nhân sự chuyên nghiệp, luôn nỗ lực mang đến giá trị cốt lõi cho khách hàng, để tất cả các sản phẩm – dịch vụ sau bán hàng tốt nhất.
              </p>
            </div>
            <img src={image} alt="Gratitude" className="w-1/3 ml-8 rounded-md shadow-md"/>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">ĐỘI NGŨ</h2>
          <div className="flex justify-between">
            <div className="w-1/3">
              <h3 className="text-xl font-semibold mb-2">1. TÂM</h3>
              <p>UTECH SYSTEM INTERGRATION chú trọng Tâm và hệ thống những nền tảng quan trọng của việc kinh doanh. Chúng tôi luôn tâm niệm rằng sự thành công của UTECH luôn đi cùng với lợi ích của Quý khách hàng.</p>
            </div>
            <div className="w-1/3">
              <h3 className="text-xl font-semibold mb-2">2. TRÍ</h3>
              <p>UTECH SYSTEM INTERGRATION coi Trí là điều kiện tiên quyết, để đảm bảo cung cấp dịch vụ với chất lượng sản phẩm cao nhất.</p>
            </div>
            <div className="w-1/3">
              <h3 className="text-xl font-semibold mb-2">3. TÍN</h3>
              <p>UTECH SYSTEM INTERGRATION chú trọng đến sự tín nhiệm của khách hàng, luôn nỗ lực hết mình để đảm bảo dịch vụ sau bán hàng tốt nhất.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Lĩnh vực</h2>
          <div className="flex justify-between">
            <div className="w-1/4 p-4 bg-gray-100 rounded-md shadow-md">
              <img src={image} alt="Service 1" className="w-full mb-4 rounded-md"/>
              <h3 className="text-xl font-semibold mb-2">BẢO TRÌ HỆ THỐNG CNTT</h3>
              <p>Cung cấp dịch vụ bảo trì hệ thống theo yêu cầu của khách hàng</p>
              <Link to="#" className="text-blue-500 hover:underline">Xem thêm </Link>
            </div>
            <div className="w-1/4 p-4 bg-gray-100 rounded-md shadow-md">
              <img src={image} alt="Service 2" className="w-full mb-4 rounded-md"/>
              <h3 className="text-xl font-semibold mb-2">DỊCH VỤ HỖ TRỢ CNTT</h3>
              <p>Hỗ trợ cho doanh nghiệp từ IT căn bản đến IT cao cấp</p>
              <Link to="#" className="text-blue-500 hover:underline">Xem thêm </Link>
            </div>
            <div className="w-1/4 p-4 bg-gray-100 rounded-md shadow-md">
              <img src={image} alt="Service 3" className="w-full mb-4 rounded-md"/>
              <h3 className="text-xl font-semibold mb-2">DỊCH VỤ CUNG CẤP EMAIL</h3>
              <p>Cài đặt - Cung cấp - Quản trị máy chủ Email Hosting</p>
              <Link to="#" className="text-blue-500 hover:underline">Xem thêm </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
