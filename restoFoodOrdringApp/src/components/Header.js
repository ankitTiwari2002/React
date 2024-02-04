import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../utils/logo/logo.png.png";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const [log, setLog] = useState("login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const [cartItemCount, setCartItemCount] = useState(0); // Local state for cart item count

  // Update cart item count when items change
  useEffect(() => {
    setCartItemCount(cartItems.length);
  }, [cartItems]);

  return (
    <div className="flex justify-between bg-indigo-200 text-black py-4 px-8 shadow-lg h-24">
      <div className="flex items-center">
        <img className="w-36 mr-5" src={logo} alt="Logo" />
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
          <li>
          <Link to="/Cart" className="relative flex items-center">
                <ShoppingCartIcon className="h-6 w-6"/>
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">{cartItemCount}</span>
                )}
              </Link>
          </li>
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

