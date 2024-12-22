import "./App.css";
import "./main.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  // this is for check user login or not. (this detaills pass to the navbar.)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-gray-800 flex flex-col">
      {/*Here pass the detaills*/}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route
          path="signup"
          element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
            </PrivateRoute>
          }
        />
      </Routes>{" "}
    </div>
  );
}

export default App;
