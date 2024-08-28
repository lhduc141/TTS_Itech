/* eslint-disable no-unused-vars */
import React from 'react';

const MaintenanceService = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <header className="bg-gray-800 text-center p-5">
        <img src="https://via.placeholder.com/200x50" alt="UTECH Logo" className="mx-auto" />
      </header>
      <div className="container mx-auto p-8">
        <section className="mb-10">
          <h1 className="text-4xl text-center font-bold text-green-400 mb-6">Dịch vụ bảo trì CNTT</h1>
          <h3 className="text-3xl text-center font-bold text-green-400 mb-6">HỆ THỐNG - MÁY TRẠM</h3>
          <h2 className="text-2xl font-semibold text-green-400 mb-4">1. Giới thiệu</h2>
          <p className="leading-loose mb-6">
            Dịch vụ bảo trì (bảo dưỡng), hệ thống máy tính, hệ thống máy chủ, hệ thống lưu trữ định kỳ và hỗ trợ kỹ thuật của UTECH giúp hệ thống máy tính, hệ thống máy chủ, hệ thống lưu trữ của khách hàng được chăm sóc hàng tháng, hàng quý, và hỗ trợ xử lý sự cố kịp thời, khi có sự cố bất ngờ, từ đó hệ thống CNTT của quý khách luôn vận hành ổn định, nhằm đáp ứng tốt nhất cho các hoạt động sản xuất, kinh doanh cho quý khách. Dịch vụ của UTECH còn bao gồm tư vấn, cảnh báo kịp thời và đảm bảo thiết bị thay thế khi hệ thống gặp sự cố mà không khắc phục được ngay, giúp tiết kiệm tối đa cho việc đầu tư vào thiết bị lưu trữ.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">2. Phạm vi công việc</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">a. Đối với hệ thống:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Kiểm tra, theo dõi tình trạng hoạt động của các thành phần hệ thống: cơ sở hạ tầng mạng, máy chủ (server), cơ chế sao lưu dự phòng, hệ thống e-mail, hệ thống Internet, cơ sở dữ liệu, cơ chế bảo mật, chính sách người dùng và các dịch vụ mạng (DNS, DHCP, VPN ...)</li>
              <li>Kiểm tra môi trường bảo quản của hệ thống: nhiệt độ, độ ẩm, không khí lưu thông, bụi bám ...v.v.</li>
              <li>Kiểm tra độ ổn định của nguồn điện</li>
              <li>Kiểm tra các loại dây dẫn, hệ thống mạng, cấp mạng, cấp nguồn.</li>
              <li>Kiểm tra các công kết nối, các mô đun bên ngoài,</li>
              <li>Kiểm tra và đánh giá các thành phần hệ thống và lưu trữ,</li>
              <li>Kiểm tra sao lưu và khắc phục dữ liệu khi có sự cố,</li>
              <li>Tập hợp các đánh giá và thông tin cấu hình hệ thống,</li>
              <li>Thu thập các mẫu tải và các thông tin của hệ thống trong khoảng thời gian nhất định,</li>
              <li>Đưa ra các báo cáo chi tiết về:
                <ul className="list-disc list-inside ml-5">
                  <li>Bảng tóm tắt về cấu hình hiện tại của máy chủ</li>
                  <li>Tổng quan về các vị trí của hệ thống</li>
                  <li>Xác định hiệu suất hoạt động của hệ thống</li>
                  <li>Khuyến cáo, đề xuất các công việc cần thực hiện</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">b. Đối với máy trạm:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Kiểm tra tình trạng hoạt động phần cứng</li>
              <li>Kiểm tra tình trạng hoạt động của hệ điều hành và các phần mềm ứng dụng.</li>
              <li>Kiểm tra và backup data, mail client định kỳ cho người sử dụng.</li>
              <li>Tối ưu hóa tốc độ máy tính: Refresh system, Hardisk Defragment, Clean-up system, gỡ bỏ các chương trình thường trú không sử dụng, điều chỉnh các thông số của máy tính ...</li>
              <li>Kiểm tra và loại bỏ những chương trình gián điệp (spyware), quảng cáo (adware, popup) và các chương trình nguy hại khác: malware, trojans, keyloggers, spybot ...</li>
              <li>Cập nhật thường xuyên chương trình chống Virus, Spyware, Spam ... cho toàn hệ thống (máy chủ, máy trạm, mail server)</li>
              <li>Cập nhật các bản vá lỗi và phiên bản mới cho các phần mềm có trong hệ thống như: hệ điều hành máy chủ, hệ điều hành máy trạm và các phần mềm ứng dụng khác.</li>
              <li>Vệ sinh, hút bụi theo định kỳ mỗi năm 03 lần đối với tất cả các thiết bị trên toàn hệ thống.</li>
              <li>Tư vấn, cài đặt và hướng dẫn sử dụng các phần mềm (phổ thông) theo yêu cầu của người sử dụng.</li>
              <li>Tư vấn, hỗ trợ giải quyết triệt để các sự cố phát sinh trong quá trình sử dụng máy tính.</li>
              <li>Xử lý các yêu cầu phát sinh liên quan đến CNTT từ phía khách hàng.</li>
              <li>Báo cáo (report) định kỳ tình hình của hệ thống mạng và các vấn đề liên quan.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MaintenanceService;
