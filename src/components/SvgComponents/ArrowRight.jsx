import React from "react";

const ArrowRight = ({ color }) => {
  return (
    <span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.6002 12L22.1666 12.5664L22.7314 12L22.1666 11.4336L21.6002 12ZM21.0338 11.4336L14.6338 17.8336L15.7666 18.9664L22.1666 12.5664L21.0338 11.4336ZM22.1666 11.4336L15.7666 5.03357L14.6338 6.16637L21.0338 12.5664L22.1666 11.4336ZM21.6002 11.2L1.60025 11.2L1.60025 12.8L21.6002 12.8L21.6002 11.2Z"
          fill={color}
        />
      </svg>
    </span>
  );
};

export default ArrowRight;
