import React from "react";
import { FaCircleXmark } from "react-icons/fa6";

const SuccessCard = ({ close }) => {
  return (
    <div className="text-center bg-white max-w-[300px] rounded-md py-8 px-8 relative">
      {/* <button className="absolute top-2  right-2" onClick={close}>
        <FaCircleXmark className="text-red-500 text-xl" />
      </button> */}
      <h3 className="text-[#26A17B] font-bold text-lg">
        Submitted successfully
      </h3>
      <p>
        Information under review, you will be notify via email to start your
        claim.
      </p>
    </div>
  );
};

export default SuccessCard;
