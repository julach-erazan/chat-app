import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [error, setError] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const naviate = useNavigate();

  const handleErrorMessage = (error) => {
    const errorMessage = error;

    let cleanedErrorMessage = errorMessage.replace("Firebase: ", "");

    cleanedErrorMessage = cleanedErrorMessage
      .replace(/\(auth\/([^)]*)\)/, "$1")
      .replace(/-/g, " ");

    setErrorMsg(cleanedErrorMessage.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.error("Upload error:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      setError("");
      naviate("/");
    } catch (err) {
      setError(err.message);
      handleErrorMessage(err.message);
    }
  };
  return (
    <div className="formContainer bg-[#AC94F4] h-screen flex justify-center items-center">
      <div className="formWrapper w-[450px] bg-white rounded-[10px] px-[10px] py-[20px] flex flex-col justify-center items-center">
        <h1>Hi Chat</h1>
        <h2>Register</h2>
        <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" hidden />
          <label htmlFor="file">
            <img src="/Images/avatorAdd.png" alt="avator" />
            <span className="ml-[20px]">add an avator</span>
          </label>

          {error && <p className="text-[12px] text-[red]">{errorMsg}</p>}
          <button
            className="bg-[#C8A4D4] text-white p-[10px] font-bold"
            type="submit"
          >
            Sign up
          </button>
        </form>
        <h2 className="mt-[20px]">
          You do have an account? <Link to="/login">Login</Link>
        </h2>
      </div>
    </div>
  );
};

export default Register;
