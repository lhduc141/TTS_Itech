/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import image from "../../images/favicon.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCustomers } from "../../redux/userReducer/userThunk";
import { BASE_URL_IMG } from "../../services/urlConfig";

const Customers = () => {
  const [cusList, setCusList] = useState([]);
  const customerList = useSelector((state) => state.userReducer.customer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);
  useEffect(() => {
    setCusList(customerList);
  }, [customerList]);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-8">Khách hàng</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cusList.map((customer, index) => (
          <div
            key={customer.img_id}
            className="flex justify-center items-center p-4 border hover:border-black rounded-lg shadow-sm"
          >
            <img src={BASE_URL_IMG + customer.img_content} className="h-16" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
