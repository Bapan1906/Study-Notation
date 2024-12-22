import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = ({ setIsLoggedIn }) => {
  // This is for navigate.
  const navigate = useNavigate();

  //   create state variable name is --> formData. and function name is --> setFormData. and the object is email and password.
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //   this state variable password show or not show.
  const [showPassword, setShowPassword] = useState(false);

  //   Inside changeHandeler function pass event, setFormData --> inside this already has previous data and add new data.
  function changeHandeler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  // this submitHandelar function pass the event, and prevent the default behaviour. after signin setLoggedIn true.
  function submitHandelar(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={submitHandelar}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full ">
        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
          Email Address
          <sup className="text-pink-600 ">*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandeler}
          placeholder="Enter Email Address"
          name="email"
          className="bg-gray-600 rounded-[0.5rem] text-gray w-full p-[12px]"
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
          Password
          <sup className="text-pink-600 ">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandeler}
          placeholder="Enter Password"
          name="password"
          className="bg-gray-600 rounded-[0.5rem] text-gray w-full p-[12px]"
        />

        <span
          className="absolute right-3 top-[38px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <Link to="#">
          <p className="text-xs mt-1 text-blue-600 max-w-max ml-auto ">
            {" "}
            Forget Password
          </p>
        </Link>
      </label>

      <button
        type="submit"
        className="bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
