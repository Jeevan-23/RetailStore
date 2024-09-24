import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { LOGO_URL } from '../utils/constants';

const Title = () => (
  <Link to="/">
    <img 
      className="w-24 h-24 rounded-full shadow-lg transition-transform transform hover:scale-110"
      alt="logo"
      src={LOGO_URL}
    />
  </Link>
);

const Navbar = () => {
  const [btn_name, setbtn_name] = useState("Login");

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Title />
        
        <ul className="flex space-x-8 text-white text-lg font-semibold">
          <li>
            <Link className="hover:text-indigo-200 transition-colors" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-indigo-200 transition-colors" to="/about">About</Link>
          </li>
          <li>
            <Link className="hover:text-indigo-200 transition-colors" to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="hover:text-indigo-200 transition-colors" to="/cart">Cart</Link>
          </li>
        </ul>

        <button
          className="px-6 py-2 bg-white text-indigo-700 font-bold rounded-full shadow-md hover:bg-indigo-700 hover:text-white transition-all duration-300"
          onClick={() => setbtn_name(btn_name === "Login" ? "Logout" : "Login")}
        >
          {btn_name}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
