import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">About Swiggy</h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          Swiggy is India’s leading food delivery service, bringing your favorite meals to your doorstep quickly and efficiently.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-orange-100 p-4 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-orange-600">Fast Delivery</h2>
            <p className="text-gray-700">We ensure timely deliveries with our vast fleet of riders.</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-orange-600">Top Restaurants</h2>
            <p className="text-gray-700">Partnering with the best eateries to bring you quality food.</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-orange-600">Easy Payment</h2>
            <p className="text-gray-700">Multiple payment options for a seamless experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
