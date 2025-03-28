import React from "react";
import { Link } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./loginForm";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn, setIsAdmin, setIsFaculty }) => {
  return (
    <div className="bg-gray-900 w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-between w-11/12 max-w-[1160px] p-8 gap-12 text-white">
        
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">
            {title}
          </h1>

          <p className="text-[1.125rem] mt-4">
            <span className="text-gray-300">{desc1}</span>
            <br />
            <span className="text-blue-500 italic">{desc2}</span>
          </p>

          {formtype === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} setIsFaculty={setIsFaculty} />
          )}

          <div className="flex w-full items-center my-4 gap-x-2">
            <div className="w-full h-[1px] bg-gray-700"></div>
            <p className="text-gray-400 font-medium">OR</p>
            <div className="w-full h-[1px] bg-gray-700"></div>
          </div>

          <div className="flex flex-col w-full gap-4">
            <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-white border border-gray-700 px-4 py-2 gap-x-2">
              <Link to="/admin-login" className="flex items-center gap-2">
                <MdAdminPanelSettings className="text-3xl" />
                <p>Admin Privileges</p>
              </Link>
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <img src={frameImage} alt="frame" className="absolute w-full max-w-md opacity-50" />
          <img src={image} alt="form-related" className="relative w-[11/12] max-w-xs" />
        </div>
      </div>
    </div>
  );
};

export default Template;
