/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import Logo from "../../assets/hello.png";
import LogoMobile from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
];

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#banner",
    newTab: false,
  },
  {
    name: "Saved Plans",
    link: "/savedplans",
    newTab: false,
  },
  {
    name: "Virtual Tour",
    link: "https://safar-saathi-vt.netlify.app/",
    newTab: true,
  },
];

const Navbar = ({ isLoggedIn, login, logout, handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to handle login/logout
  const handleLoginLogout = () => {
    if (isLoggedIn) {
      logout();
    } else {
      login();
    }
  };

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
        <div className="bg-gradient-to-r from-primary to-secondary text-white ">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">Your AI powered personal Tour Planner</p>
              <p>mobile no. +91 123456789</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4  font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="h-16 hidden md:block" />
                <img src={LogoMobile} alt="" className="h-16 block md:hidden" />
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 ">
                {NavbarLinks.map((link) => (
                  <li className="py-4" key={link.name}>
                    <NavLink to={link.link} activeClassName="active">
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      <ul className="space-y-3">
                        {DropdownLinks.map((link) =>
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
                              <a href={link.link}>{link.name}</a>
                            </li>
                          )
                        )}
                      </ul>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                onClick={() => {
                  handleOrderPopup();
                }}
              >
                Feedback Form
              </button>
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                onClick={handleLoginLogout}
              >
                {isLoggedIn ? "Sign Out" : "Sign In"}
              </button>
              {isLoggedIn && !isMobile && !showMenu && (
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <img
                      src={localStorage.getItem("profilePic")}
                      alt="Profile"
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                    <p className="absolute bottom-0 right-0 bg-white px-1 py-0.5 text-xs rounded-md">
                      {localStorage.getItem("user").split(" ")[0]}
                    </p>
                  </div>
                </div>
              )}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          isLoggedIn={isLoggedIn}
          logout={logout}
          dropdownLinks={DropdownLinks}
        />
      </nav>
    </>
  );
};

export default Navbar;
