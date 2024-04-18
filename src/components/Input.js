import React from "react";
import { FaRegImage } from "react-icons/fa";
import { IoMdAttach } from "react-icons/io";

const Input = () => {
  return (
    <div className="inputbar w-full h-[50px] flex justify-evenly items-center bg-[#f9eafe]">
      <input type="text" placeholder="Type Something..." />
      <div className="flex justify-evenly items-center">
        <IoMdAttach className="cursor-pointer" />
        <input type="file" id="file" hidden />
        <label htmlFor="file" className="cursor-pointer">
          <FaRegImage />
        </label>
        <button className="text-[#fff] h-[30px] px-[10px] bg-[#643B9F] font-bold">
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
