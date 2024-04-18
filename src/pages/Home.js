import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="homeContainer bg-[#AC94F4] h-screen flex justify-center items-center">
      <div className="homeWrapper w-[60%] min-[700px] h-[80%] bg-white flex rounded-[10px] overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
