import React, { useState } from "react";

const FormTwo = () => {
    const [recoveryAttempted, setRecoveryAttempted] = useState(null);
    const [summary, setSummary] = useState("");
    const [confirmed, setConfirmed] = useState(false);
  return (
    <div className="space-y-6  rounded-md">
      {/* Recovery Attempt */}
      <div className="border border-gray-300 rounded-md p-4">
        <p className="mb-2 text-sm font-medium text-gray-700">
          Have you attempted to recover this loss already?
        </p>
        <div className="flex gap-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="recovery"
              value="yes"
              checked={recoveryAttempted === "yes"}
              onChange={() => setRecoveryAttempted("yes")}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-sm text-gray-700">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="recovery"
              value="no"
              checked={recoveryAttempted === "no"}
              onChange={() => setRecoveryAttempted("no")}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-sm text-gray-700">No</span>
          </label>
        </div>
      </div>

      {/* Tell Us More */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tell us more
        </label>
        <textarea
          rows="4"
          maxLength="400"
          placeholder="(please provide us with a brief summary on how you lost your digital currency)"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <p className="text-xs text-gray-500 mt-1">Limit 400 character</p>
      </div>

      {/* Confirmation Checkbox */}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="confirmation"
          checked={confirmed}
          onChange={() => setConfirmed(!confirmed)}
          className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="confirmation" className="ml-2 text-sm text-gray-700">
          I certify that the information I have provided is mine and accurate.
        </label>
      </div>
    </div>
  );
};

export default FormTwo;
