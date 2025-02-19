import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          Have questions? We’d love to hear from you! Reach out to us anytime.
        </p>
        <div className="text-center mb-6">
          <p className="text-gray-700 text-lg">Email: <a href="mailto:khicharhitesh065@gmail.com" className="text-orange-500">khicharhitesh065@gmail.com</a></p>
          <p className="text-gray-700 text-lg">Phone: +91 XXXXXXXXXX</p>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg h-32"></textarea>
          <button type="submit" className="w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
