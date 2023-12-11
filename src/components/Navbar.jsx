import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Login from "./Login";
import { IoClose } from "react-icons/io5";
import useIsMobile from "../hooks/useIsMobile";
import MobileMenu from "./MobileMenu";
import SearchInput from "./SearchInput";
import { GlobalContext } from "../context/GlobalState";
const Navbar = () => {
  const {
    isLoggedIn,
    handleLogout,
    handleLogin,
    openLoginPopup,
    closeLoginPopup,
    toggleMenu,
    loginPopup,
    handleToggleMenu,
  } = useContext(GlobalContext);
  const isMobile = useIsMobile();

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
        <div className="items-center hidden space-x-8 text-white md:flex sm:text-xl font-roboto">
          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              isActive ? "font-semibold border-b-2 border-red-500" : ""
            }
            onClick={(event) => {
              if (!isLoggedIn) {
                event.preventDefault();
                openLoginPopup();
              }
            }}
          >
            Favorite
          </NavLink>
          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              isActive ? "font-semibold border-b-2 border-red-500" : ""
            }
            onClick={(event) => {
              if (!isLoggedIn) {
                event.preventDefault();
                openLoginPopup();
              }
            }}
          >
            Watchlist
          </NavLink>
          <SearchInput />
          {/* Conditionally render Logout button when logged in */}
          {isLoggedIn && (
            <button className="text-sm font-roboto" onClick={handleLogout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.75 24.5833C20.7114 24.5833 21.6334 24.2014 22.3133 23.5216C22.9931 22.8418 23.375 21.9197 23.375 20.9583L23.375 4.04165C23.375 3.08024 22.9931 2.1582 22.3133 1.47839C21.6334 0.798567 20.7114 0.416649 19.75 0.416649L12.5 0.416648C11.5386 0.416648 10.6166 0.798566 9.93674 1.47838C9.25692 2.1582 8.875 3.08024 8.875 4.04165L8.875 20.9583C8.875 21.9197 9.25692 22.8418 9.93674 23.5216C10.6166 24.2014 11.5386 24.5833 12.5 24.5833L19.75 24.5833ZM7.31263 18.1876C7.08603 18.4141 6.77874 18.5414 6.45833 18.5414C6.13793 18.5414 5.83064 18.4141 5.60404 18.1876L0.770707 13.3543C0.544181 13.1277 0.416925 12.8204 0.416925 12.5C0.416925 12.1796 0.544181 11.8723 0.770707 11.6457L5.60404 6.81235C5.83194 6.59225 6.13716 6.47045 6.45398 6.47321C6.77081 6.47596 7.07387 6.60304 7.29791 6.82707C7.52194 7.05111 7.64902 7.35417 7.65177 7.67099C7.65453 7.98782 7.53273 8.29304 7.31263 8.52094L4.54192 11.2916L14.9167 11.2916C15.2371 11.2916 15.5445 11.419 15.7711 11.6456C15.9977 11.8722 16.125 12.1795 16.125 12.5C16.125 12.8205 15.9977 13.1278 15.7711 13.3544C15.5445 13.581 15.2371 13.7083 14.9167 13.7083L4.54192 13.7083L7.31263 16.479C7.53915 16.7056 7.66641 17.0129 7.66641 17.3333C7.66641 17.6537 7.53915 17.961 7.31263 18.1876Z"
                  fill="white"
                />
              </svg>
            </button>
          )}
        </div>
        {/* Mobile */}
        <button
          className="relative top-0 right-0 z-20 flex w-10 h-10 text-black cursor-pointer md:hidden focus:outline-none "
          onClick={handleToggleMenu}
        >
          <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              className={`absolute h-0.5 w-5 bg-black dark:bg-white transform transition duration-300 ease-in-out ${
                toggleMenu ? "rotate-45 delay-200" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 bg-black dark:bg-white transform transition-all duration-200 ease-in-out ${
                toggleMenu ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 bg-black dark:bg-white transform transition duration-300 ease-in-out ${
                toggleMenu ? "-rotate-45 delay-200" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Login Popup */}
      {loginPopup && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="relative p-8 bg-white rounded-md">
            <Login onLogin={handleLogin} onLogout={handleLogout} />
            <button
              onClick={closeLoginPopup}
              className="absolute top-0 mt-4 text-lg text-black right-3"
            >
              <IoClose />
            </button>
          </div>
        </div>
      )}
      {/* Render Mobile Menu component */}
      {isMobile && (
        <MobileMenu
          handleLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          toggleMenu={toggleMenu}
          openLoginPopup={openLoginPopup}
        />
      )}
    </nav>
  );
};

export default Navbar;
