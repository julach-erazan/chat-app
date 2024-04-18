import React from "react";

const Navbar = () => {
  return (
    <div className="navbar w-full h-[50px] p-[10px] bg-[#371F76] flex justify-between items-center">
      <div className="brand">Hi Chat</div>
      <div className="owner flex justify-between items-center">
        <img src="/Images/tshirt.png" alt="" />
        <span className="ml-[10px]">Jane</span>
      </div>
      <button className="logout h-[30px] px-[10px] bg-[#643B9F] font-bold">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
