import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      setError("");
      // navigate("/");
      console.log(res);
    } catch (err) {
      setError("Error. Invalid Email or Password");
    }
  };
  return (
    <div className="formContainer bg-[#AC94F4] h-screen flex justify-center items-center">
      <div className="formWrapper w-[450px] bg-white rounded-[10px] px-[10px] py-[20px] flex flex-col justify-center items-center">
        <h1>Hi Chat</h1>
        <h2>Login</h2>
        <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          {error && <p className="text-[12px] text-[red]">{error}</p>}
          <button
            className="bg-[#C8A4D4] text-white p-[10px] font-bold"
            type="submit"
          >
            Sign in
          </button>
        </form>
        <h2 className="mt-[20px]">
          You don't have an account? <Link to="/register">Register</Link>
        </h2>
      </div>
    </div>
  );
};

export default Login;
