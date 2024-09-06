/* eslint-disable no-unused-vars */
import React from "react";

const Map = () => {
  return (
    <div className="relative">
      <div className="rounded-b-3xl md:rounded-b-none md:rounded-tr-3xl md:rounded-br-3xl">
        <div className="items-center md:max-w-sm lg:max-w-6xl text-white">
          <div className="py-5 md:py-10 lg:items-center relative">
          <iframe
            className="w-screen h-96 rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9124427620964!2d106.664681!3d10.752143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f291c5b38e7%3A0x2beb8d36cb96e159!2zQ8O0bmcgVHkgVE5ISCBD4buRbmcgTmdoxKlhIFVURUNITA!5e0!3m2!1svi!2s!4v1693051500923!5m2!1svi!2s"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
