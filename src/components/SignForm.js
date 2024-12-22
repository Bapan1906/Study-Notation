import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  // Create a formData object.
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //   this state variable password show or not show.
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccoundType] = useState("student");

  //   Inside changeHandeler function pass event, setFormData --> inside this already has previous data and add new data.
  function changeHandeler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  // this submitHandelar function pass the event, and prevent the default behaviour.
  function submitHandelar(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("password do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created.");
    const accoundData = {
      ...formData,
    };

    const finalData ={
      ...accoundData,
      accountType
    }
    console.log("Printing Final Accound Data");
    console.log(finalData);
    
    navigate("/dashboard");
  }
  return (
    <div>
      {/* Student-Instructor tab */}
      <div className="flex bg-gray-600 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student"
              ? " bg-gray-900 text-white"
              : "bg-transparent text-gray-300"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccoundType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? " bg-gray-900 text-white"
              : "bg-transparent text-gray-300"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccoundType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandelar}>
        {/* contain first name and last name */}
        <div className="flex justify-between mt-[10px]">
          <label>
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              First Name
              <sup className="text-pink-600 ">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName" // Change to match formData key
              onChange={changeHandeler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-gray-600 rounded-[0.5rem] text-gray w-full p-[12px]"
            />
          </label>

          <label>
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Last Name
              <sup className="text-pink-600 ">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName" // Change to match formData key
              onChange={changeHandeler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="bg-gray-600 rounded-[0.5rem] text-gray w-full p-[12px]"
            />
          </label>
        </div>

        {/* Email Address */}
        <div className="mt-[10px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Email Address
              <sup className="text-pink-600 ">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandeler}
              placeholder="Enter Email Address"
              value={formData.email}
              className="bg-gray-600 rounded-[0.5rem] text-gray w-full p-[12px]"
            />
          </label>
        </div>

        {/* Create passwor and confirm password */}

        <div className="flex justify-between mt-[10px]">
          <label className="relative">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Create Password
              <sup className="text-pink-600 ">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandeler}
              placeholder="Enter password"
              value={formData.password}
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
          </label>

          <label className="relative">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-pink-600 ">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword" // Change to match formData key
              onChange={changeHandeler}
              placeholder="Confirm password"
              value={formData.confirmPassword}
              className="bg-gray-600 rounded-[0.5rem] text-gray w-full p-[12px]"
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignForm;
