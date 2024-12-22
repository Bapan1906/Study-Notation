import React from "react";
import logo from "../assets/Logo1.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = (props) => {
  //this four button --> Login - SignUp - LogOut - Dashboard -->  depand on this variable
  let isLoggedIn = props.isLoggedIn;
  let setLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/" >
        <img src={logo} alt="Logo" width={65} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-x-6  text-white">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">About</Link>
          </li>

          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Login - SignUp - LogOut - Dashboard */}

      <div className="flex items-center gap-x-4">
        {/* !isLoggedIn--> this condition means not login.  */}

        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-gray-600 text-white py-[8px] px-[12px] rounded-[8px] border border-black-600">
              Log in
            </button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-gray-600 text-white py-[8px] px-[12px] rounded-[8px] border border-black-600">
              Sign up
            </button>
          </Link>
        )}

        {/* isLoggedIn--> this condition means login.  */}

        {isLoggedIn && (
          <Link to="/">
            <button
              className="bg-gray-600 text-white py-[8px] px-[12px] rounded-[8px] border border-black-600"
              onClick={() => {
                setLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log Out
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-gray-600 text-white py-[8px] px-[12px] rounded-[8px] border border-black-600">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
