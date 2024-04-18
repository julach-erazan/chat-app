import React from "react";

const Login = () => {
  return (
    <div className="formContainer bg-[#AC94F4] h-screen flex justify-center items-center">
      <div className="formWrapper w-[450px] bg-white rounded-[10px] px-[10px] py-[20px] flex flex-col justify-center items-center">
        <h1>Hi Chat</h1>
        <h2>Login</h2>
        <form className="flex flex-col gap-[20px]">
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <button className="bg-[#C8A4D4] text-white p-[10px] font-bold">
            Sign in
          </button>
        </form>
        <h2 className="mt-[20px]">You don't have an account? Register</h2>
      </div>
    </div>
  );
};

export default Login;
