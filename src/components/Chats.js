import React from "react";

const Chats = () => {
  return (
    <div className="w-full px-[20px] overflow-y-scroll">
      <div className="userChat flex">
        <img src="/Images/man2.jpg" alt="" />
        <div className="userChatInfo ml-[20px]">
          <h1>Jhone</h1>
          <h2>Hello</h2>
        </div>
      </div>

      <div className="userChat flex">
        <img src="/Images/man2.jpg" alt="" />
        <div className="userChatInfo ml-[20px]">
          <h1>Jhone</h1>
          <h2>Hello</h2>
        </div>
      </div>
    </div>
  );
};

export default Chats;
