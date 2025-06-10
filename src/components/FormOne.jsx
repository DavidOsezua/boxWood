/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ArrowDown from "./SvgComponents/ArrowDown";
import Modal from "./Modal";
import DigitalCurrency from "./DigitalCurrency";

const FormOne = ({ formData, setFormData, errors = {} }) => {
  const [openModal, setOpenModal] = useState(false);

  const modalHandler = () => {
    setOpenModal((prev) => !prev);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="">
      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block mb-1 text-[0.7rem] md:text-sm font-medium text-gray-700">
            Full name
          </label>
          <input
            type="text"
            onChange={(e) => handleInputChange("full_name", e.target.value)}
            placeholder="Enter full name"
            value={formData.full_name}
            className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block mb-1 text-[0.7rem] md:text-sm font-medium text-gray-700">
            Mobile number
          </label>
          <input
            type="tel"
            value={formData.mobile_number}
            onChange={(e) => handleInputChange("mobile_number", e.target.value)}
            placeholder="Enter mobile number"
            className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.mobileNumber ? "border-red-500" : "border-gray-300"
            }`}
          />

          {errors.mobileNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-[0.7rem] md:text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            type="email"
            placeholder="Enter your email"
            className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Digital Currency Platform & Amount Lost */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full md:w-1/2">
            <label className="block mb-1 text-[0.7rem] md:text-sm font-medium text-gray-700">
              Select currency
            </label>

            <div className="relative">
              <input
                value={formData.digital_currency_platform}
                placeholder="Select currency"
                className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.currency ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                className="absolute right-4 top-4"
                onClick={modalHandler}
              >
                <ArrowDown />
              </button>
            </div>

            {openModal && (
              <Modal modalHandler={modalHandler}>
                <DigitalCurrency
                  onSelection={handleInputChange}
                  modalHandler={modalHandler}
                />
              </Modal>
            )}

            {errors.currency && (
              <p className="text-red-500 text-sm mt-1">{errors.currency}</p>
            )}
          </div>
          <div className="w-full md:w-1/2">
            <label className="block mb-1 text-[0.7rem] md:text-sm font-medium text-gray-700">
              Amount lost
            </label>
            <input
              type="text"
              value={formData.amount_lost}
              onChange={(e) => handleInputChange("amount_lost", e.target.value)}
              placeholder="Enter amount lost"
              className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.amount_lost ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.amount_lost && (
              <p className="text-red-500 text-sm mt-1">{errors.amount_lost}</p>
            )}
          </div>
        </div>

        {/* Country & State */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full md:w-1/2">
            <label className="block mb-1 text-[0.7rem] md:text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              placeholder="Your Country"
              className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.country ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">{errors.country}</p>
            )}
          </div>
          <div className="w-full md:w-1/2">
            <label className="block mb-1 text-[0.7rem] md:text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              placeholder="Enter amount lost"
              className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.state ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">{errors.state}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormOne;
