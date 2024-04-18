import React from "react";

const Register = () => {
  return (
    <div className="formContainer bg-[#AC94F4] h-screen flex justify-center items-center">
      <div className="formWrapper w-[450px] bg-white rounded-[10px] px-[10px] py-[20px] flex flex-col justify-center items-center">
        <h1>Hi Chat</h1>
        <h2>Register</h2>
        <form className="flex flex-col gap-[20px]">
          <input type="text" placeholder="username" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <input type="file" id="file" hidden accept="images" />
          <label htmlFor="file">
            <img src="/Images/avatorAdd.png" alt="avator" />
            <span className="ml-[20px]">add an avator</span>
          </label>
          <button className="bg-[#C8A4D4] text-white p-[10px] font-bold">
            Sign up
          </button>
        </form>
        <h2 className="mt-[20px]">You do have an account? Login</h2>
      </div>
    </div>
  );
};

export default Register;
