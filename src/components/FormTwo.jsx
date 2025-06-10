/* eslint-disable react/prop-types */

const FormTwo = ({ formData, setFormData, errors = {} }) => {
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
              checked={formData.attempted_recovery === "yes"}
              onChange={(e) =>
                handleInputChange("attempted_recovery", e.target.value)
              }
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-sm text-gray-700">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="recovery"
              value="no"
              checked={formData.attempted_recovery === "no"}
              onChange={(e) =>
                handleInputChange("attempted_recovery", e.target.value)
              }
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-sm text-gray-700">No</span>
            {errors.attempted_recovery && (
              <p className="text-red-500 text-sm mt-1">
                {errors.attempted_recovery}
              </p>
            )}
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
          value={formData.loss_description}
          onChange={(e) =>
            handleInputChange("loss_description", e.target.value)
          }
        />
        <p className="text-xs text-gray-500 mt-1">Limit 400 character</p>
        {errors.loss_description && (
          <p className="text-red-500 text-sm mt-1">{errors.loss_description}</p>
        )}
      </div>

      {/* Confirmation Checkbox */}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="confirmation"
          checked={formData.information_certified === "yes"}
          onChange={(e) =>
            handleInputChange(
              "information_certified",
              e.target.checked ? "yes" : ""
            )
          }
          className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />

        <label htmlFor="confirmation" className="ml-2 text-sm text-gray-700">
          I certify that the information I have provided is mine and accurate.
        </label>
      </div>
      {errors.information_certified && (
        <p className="text-red-500 text-sm mt-1">
          {errors.information_certified}
        </p>
      )}
    </div>
  );
};

export default FormTwo;
