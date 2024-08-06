import React from 'react';
const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-8">Liên hệ với chúng tôi</h1>
        <form className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="font-medium">
              Tên cá nhân/công ty *
            </label>
            <input
              type="text"
              id="name"
              className="p-3 border rounded-md"
              placeholder="Tên cá nhân/công ty"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="font-medium">
              Email của bạn *
            </label>
            <input
              type="email"
              id="email"
              className="p-3 border rounded-md"
              placeholder="Email của bạn"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="phone" className="font-medium">
              Di động *
            </label>
            <input
              type="tel"
              id="phone"
              className="p-3 border rounded-md"
              placeholder="Di động"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="subject" className="font-medium">
              Chủ đề
            </label>
            <input
              type="text"
              id="subject"
              className="p-3 border rounded-md"
              placeholder="Chủ đề"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="font-medium">
              Nội dung *
            </label>
            <textarea
              id="message"
              className="p-3 border rounded-md"
              placeholder="Nội dung (cần nhập ít nhất 50 ký tự)"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Gửi tin
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact
