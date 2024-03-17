/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa"; // Import FaCaretDown
import { Link } from "react-router-dom";
import { NavbarLinks } from "./Navbar";
import Logo from "../../assets/hello.png";
import { signInWithGoogle } from "../../(auth)/login.jsx";

const ResponsiveMenu = ({
  showMenu,
  setShowMenu,
  isLoggedIn,
  logout,
  dropdownLinks,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-50 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        {/* Conditionally render profile for logged-in user */}
        {isLoggedIn && (
          <div className="flex items-center justify-start gap-3">
            <img
              src={localStorage.getItem("profilePic")}
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div>
              <h1 className="text-xl bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent font-semibold">
                Hello {localStorage.getItem("user").split(" ")[0]}
              </h1>
              <h1 className="text-md bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Premium user
              </h1>
            </div>
          </div>
        )}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavbarLinks.map((data) => (
              <li key={data.name}>
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                >
                  {data.name}
                </Link>
              </li>
            ))}
            <li>
              <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                Quick Links{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </button>
              {dropdownOpen && (
                <div className="absolute z-50 bg-white dark:bg-gray-900 dark:text-white rounded-md shadow-md mt-2">
                  <ul className="p-4">
                    {dropdownLinks.map((link) =>
                      link.newTab ? (
                        <li key={link.name}>
                          <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.name}
                          </a>
                        </li>
                      ) : (
                        <li key={link.name}>
                          <Link to={link.link}>{link.name}</Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </li>
          </ul>
          <img src={Logo} alt="" className="h-16 mt-10" />
        </nav>
      </div>
      <div className="footer">
        {/* Conditionally render login/logout button */}
        {isLoggedIn && (
          <button
            onClick={logout}
            className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-2 rounded-md"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default ResponsiveMenu;
