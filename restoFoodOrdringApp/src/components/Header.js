import React, { useState } from "react";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../utils/logo.png.png"


const Header = () => {
  const [log, setLog] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-indigo-200 text-black py-4 px-8 shadow-2xl">
      <div className="flex items-center">
        <img className="w-24 mr-5" src={logo} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-6 mr-8">
          <li>Online status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
        </ul>
        <button
          className={`log-btn ${log === "login" ? "bg-blue-500" : "bg-red-500"} hover:bg-opacity-75 text-white py-2 px-4 rounded`}
          onClick={() => {
            setLog(log === "login" ? "logout" : "login");
          }}
        >
          {log}
        </button>
      </div>
    </div>
  );
};

export default Header;
