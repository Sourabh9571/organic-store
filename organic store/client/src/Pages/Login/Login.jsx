import React, { useRef, useState } from "react";
import style from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Slices/userSlice/userSlice";

const Login = () => {
  const usernameref = useRef("");
  const passwordref = useRef("");
  const adminref = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    if (adminref.current.checked === true) {
      dispatch(
        loginUser({
          username: usernameref.current.value,
          password: passwordref.current.value,
          status: "admin",
        })
      ).then((result) => {
        console.log(result);
        if (result.payload.username) {
          navigate("/adminacces");
        }
      });
    } else {
      dispatch(
        loginUser({
          username: usernameref.current.value,
          password: passwordref.current.value,
          status: "local",
        })
      ).then((result) => {
        console.log(result);
        if (result.payload.username) {
          navigate("/");
        }
      });
    }
  };

  return (
    <div
      className={`${style.logincontainer}   w-screen h-screen flex  justify-center  items-center`}
    >
      <div className="flex border bg-slate-100 mx-10 md:mx-0 w-full md:w-4/5  rounded-lg h-4/5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-semibold mt-16 ml-10">
            Login To Your Account!
          </h1>
          <form className="mt-10 ml-10">
            <input
              type="text"
              placeholder="username"
              className=" bg-slate-50 border border-solid border-black rounded-sm w-4/6 h-10 px-5"
              ref={usernameref}
            />
            <input
              type="password"
              placeholder="password"
              className=" bg-slate-50 mt-5 border border-solid border-black rounded-sm w-4/6 h-10 px-5"
              ref={passwordref}
            />
            <div></div>
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              className="mt-5 inline-block"
              ref={adminref}
            />
            <label htmlFor="checkbox" className="ml-2">
              Login as Admin
            </label>
            <div className="flex gap-5 mt-5 items-center">
              <button
                className="py-3 px-5 pr-16  text-white block bg-#b4b9a0 rounded-lg    self-center"
                onClick={handleSubmit}
              >
                Login
              </button>
              {loading && (
                <div className="">
                  <div className="self-center loading ease-linear rounded-full border-8 border-t-8 border-black h-10 w-10"></div>
                </div>
              )}
            </div>
            <p className="mt-5">
              <Link to="/register">create Account</Link>
            </p>
          </form>
          {error && (
            <div className="bg-red-100 text-red-600 p-4 rounded-md mt-5 mx-10">
              {error}
            </div>
          )}
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

export default Login;
