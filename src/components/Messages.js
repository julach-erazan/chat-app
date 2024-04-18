import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="messages w-full h-full bg-[#efcafe] overflow-y-scroll">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
