/* eslint-disable no-unused-vars */
// Dashboard.jsx
import React from 'react';
//import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
//import FilterButton from '../components/DropdownFilter';
//import Datepicker from '../components/Datepicker';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';
import Customers from './Customers';
import Carousel from './Carousel';
import WhyChooseUs from './WhyChooseUs';
import LeaveMess from './LeaveMessage';
import Comments from './Comments';
import Services from './Services';

function Dashboard() {
  return (
    <>
      {/* Dashboard actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        <Carousel />
      </div>
      {/* Cards */}
      {/* <div className="grid grid-cols-12 gap-6">
        <DashboardCard07 />
        <DashboardCard10 />
        <DashboardCard12 />
        <DashboardCard13 />
      </div> */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <Services />
        <LeaveMess />
        <WhyChooseUs />
        <Comments />
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-8"><Customers /></div>
      <Banner />
    </>
  );
}

export default Dashboard;
