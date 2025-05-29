import React from "react";

const FormOne = () => {
  return (
    <div className="shadow-md rounded-md">
      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Full name
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Mobile number
          </label>
          <input
            type="tel"
            placeholder="Enter mobile number"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Digital Currency Platform & Amount Lost */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Digital Currency Platform
            </label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Digital Currency Platform</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Amount lost
            </label>
            <input
              type="text"
              placeholder="Enter amount lost"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Country & State */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Country
            </label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select country</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              State
            </label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select state</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormOne;
