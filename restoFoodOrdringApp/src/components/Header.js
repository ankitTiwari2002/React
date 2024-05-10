import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../utils/logo/logo.png.png";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const Header = () => {
  const [log, setLog] = useState("login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const [cartItemCount, setCartItemCount] = useState(0); // Local state for cart item count
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  // Function to handle sign-out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Dispatch action to remove user from Redux store
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

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
            <Link to="/browse" className="hover:underline">
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
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
        {user && (
          <div>
            <button
              className=" bg-blue-600 rounded-lg p-2 my-3 text-white text-lg font-light"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
