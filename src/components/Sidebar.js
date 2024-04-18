import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="w-[40%] bg-[#795695] flex flex-col items-center">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
