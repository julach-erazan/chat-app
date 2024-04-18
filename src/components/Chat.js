import React from "react";
import { IoVideocam } from "react-icons/io5";
import { HiUserAdd } from "react-icons/hi";
import { IoIosMore } from "react-icons/io";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="w-[60%]">
      <div className="w-full h-[50px] bg-[#643B9F] text-[22px] text-[#fff] flex justify-end gap-[15px] items-center px-[10px]">
        <IoVideocam />
        <HiUserAdd />
        <IoIosMore />
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
