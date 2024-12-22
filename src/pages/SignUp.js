import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/SecondPhoto.jpg";

// Properly destructure setIsLoggedIn from props
const SignUp = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Join the millions learning to code with studyNotation for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default SignUp;
