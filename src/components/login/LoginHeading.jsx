import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo/Facebook-180x180.jpeg";
const LoginHeading = () => {
  return (
    <div>
      {/* Welcome Back Message */}
      <div className="mt-8 mb-6 flex flex-col items-center">
        <img src={logo} className="w-32 rounded-lg mb-5" alt="" />
        <h1 className="text-4xl md:text-5xl text-center font-semibold">
          Welcome Back!
        </h1>
        <p className="text-lg md:text-2xl text-center font-light mt-3">
          Still don't have an account?
          <Link to={"/register"}>
            <span className="text-bg-1"> Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginHeading;
