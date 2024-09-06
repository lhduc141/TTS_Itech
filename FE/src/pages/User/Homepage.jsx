/* eslint-disable no-unused-vars */
import React from "react";

import Banner from "../../partials/Banner";
import Customers from "./Customers";
import Carousel from "./Carousel";
import WhyChooseUs from "./WhyChooseUs";
import LeaveMess from "./LeaveMessage";
import Comments from "./Comments";
import Services from "./Services";

function Homepage() {
  return (
    <>
      {/* Dashboard actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        <Carousel />
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <Services />
        <LeaveMess />
        <WhyChooseUs />
        <Comments />
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <Customers />
      </div>
      <Banner />
    </>
  );
}

export default Homepage;
