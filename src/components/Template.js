import React from "react";
import background from "../assets/backgroundIMG.jpg";
import SignForm from "./SignForm";
import LoginForn from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

// Using props all the data pass into Template object.
const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  console.log("form type--> ");
  console.log(formType);
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="w-11/12 max-w-[450px] mx-0">
        <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-white">{desc1}</span> <br></br>
          <span className="text-blue-400 italic">{desc2}</span>
        </p>

        {/* Check formType and render */}
        {formType === "signup" ? (
          <SignForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForn setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-black"></div>
          <p className="text-white">OR</p>
          <div className="w-full h-[1px] bg-black"></div>
        </div>
        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-white border border-gray-400 px-[12px] py-[8px] gap-x-2 mt-6 ">
          <FcGoogle />
          Sign Up With Google
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px] ">
        <img
          src={background}
          alt="Pattern"
          width={558}
          height={490}
          loading="lazy"
          className="w-full h-[300px]"
        />
        <img
          src={image}
          alt="Student"
          width={558}
          height={490}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
};

export default Template;
