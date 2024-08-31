import React, { useRef, useState } from "react";
import style from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [passwordMismatch, setPasswordMismatch] = useState(true);
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const handleRepeatPasswordChange = (e) => {
    const value = e.target.value;

    // Check if passwords match
    if (value !== passwordRef.current.value) {
      setPasswordMismatch(false);
    } else {
      setPasswordMismatch(true);
    }
  };

  return (
    <div
      className={`${style.logincontainer}   w-screen h-screen flex  justify-center  items-center`}
    >
      <div className="flex border bg-slate-100 mx-10 md:mx-0 w-full md:w-4/5  rounded-lg h-4/5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-semibold mt-16 ml-10">
            Register To Your Account!
          </h1>
          <form className="mt-10 ml-10" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              className=" bg-slate-50 border border-solid border-black rounded-sm w-4/6 h-10 px-5 outline-none"
            />
            <input
              type="email"
              placeholder="email"
              className=" bg-slate-50 mt-5 border border-solid border-black rounded-sm w-4/6 h-10 px-5 outline-none"
            />
            <input
              type="password"
              placeholder="password"
              className=" bg-slate-50 mt-5 border border-solid border-black rounded-sm w-4/6 h-10 px-5 outline-none"
              ref={passwordRef}
            />
            <input
              type="password"
              placeholder="repeat password"
              className={` bg-slate-50 mt-5 border border-solid
              ${passwordMismatch ? " border-black" : "border-red-500"}
               rounded-sm w-4/6 h-10 px-5 outline-none`}
              onChange={handleRepeatPasswordChange}
            />
            {!passwordMismatch && (
              <small className="text-red-500 block">
                Passwords do not match. Please try again.
              </small>
            )}
            <div></div>
            <button className="py-3 px-5 pr-16 mt-5 text-white block bg-#b4b9a0 rounded-lg">
              Register
            </button>
            <p className="mt-5">
              <Link to="/login" className="underline">
                login
              </Link>
            </p>
          </form>
        </div>
        <div className="w-1/2 flex justify-center items-center flex-col hidden md:flex">
          <div className="text-center">
            <img src="organic-products-hero.png" className="" alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
