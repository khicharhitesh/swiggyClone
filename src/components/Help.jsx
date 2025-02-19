import React from "react";

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 text-center">Help & Support</h1>
        <p className="text-gray-600 text-lg text-center mb-8">
          Need assistance? We’re here to help you with any questions or concerns.
        </p>
        <div className="space-y-6">
          <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-600">Order Related Issues</h2>
            <p className="text-gray-700">Track your order, cancellations, or refunds easily.</p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-600">Payments & Wallet</h2>
            <p className="text-gray-700">Support for payment failures, refunds, or wallet balance.</p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-600">Account & Login</h2>
            <p className="text-gray-700">Help with login, password reset, or account settings.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-700 text-lg">Still need help? Contact our customer care:</p>
          <p className="text-orange-600 text-lg font-semibold">Email: khicharhitesh065@gmail.com</p>
          <p className="text-orange-600 text-lg font-semibold">Customer Care: +91 XXXXXXXXXX</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
