import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-6 text-white bg-primary">
      <div className="flex items-center justify-between w-5/6 mx-auto">
        {/* Cinema */}
        <Link to="/">
          <h1 className="font-poppins text-xl sm:text-4xl font-[900] tracking-[10px] sm:tracking-[20px] uppercase">
            Cinema
          </h1>
        </Link>
        {/* Menu */}
        <div className="space-x-8 text-white sm:text-xl font-roboto">
          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              isActive ? " font-semibold border-b-2 border-red-500" : ""
            }
          >
            Favorite
          </NavLink>
          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              isActive ? " font-semibold border-b-2 border-red-500" : ""
            }
          >
            Watchlist
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
