import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar w-full h-[50px] p-[10px] bg-[#371F76] flex justify-between items-center">
      <div className="brand">Hi Chat</div>
      <div className="flex justify-evenly items-center">
        <div className="owner flex justify-between items-center">
          <img src="/Images/tshirt.png" alt="" />
          <span className="ml-[5px]">Jane</span>
        </div>
        <button
          className="logout h-[30px] px-[10px] bg-[#643B9F] font-bold ml-[15px]"
          onClick={() => signOut(auth)}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
