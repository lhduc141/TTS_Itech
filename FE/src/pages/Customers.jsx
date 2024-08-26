/* eslint-disable no-unused-vars */
import React from 'react';
import image from "../images/favicon.png"

const customers = [
  { name: 'Okamura', logo: image },
  { name: '1A', logo: image },
  { name: 'Shimada', logo: image },
  { name: 'BV Khu vực Cai Lậy', logo: image },
  { name: 'Kume Design Asia', logo: image },
  { name: 'Aon', logo: image },
  { name: 'Asics', logo: image },
  { name: 'Top Solvent', logo: image },
  { name: 'Hoàn Mỹ', logo: image },
  { name: 'DHA Healthcare', logo: image },
];

const Customers =() => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-8">Khách hàng</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {customers.map((customer, index) => (
          <div key={index} className="flex justify-center items-center p-4 border hover:border-black rounded-lg shadow-sm">
            <img src={customer.logo} alt={customer.name} className="h-16" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customers;
