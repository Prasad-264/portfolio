import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeBtn from "../Theme Button/ThemeBtn";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const [navbg, setNavBg] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/about" || location.pathname === "/projects") {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  }, [location.pathname]);
  return (
    <header
      className={`${
        header
          ? "backdrop-blur"
          : ` ${
              navbg
                ? "bg-white dark:bg-[#00091D]"
                : "dark:bg-[#00091D] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[radial-gradient(#0000004f_1px,#ffffff1a_1px)] bg-[size:20px_20px]"
            }`
      } sticky top-0 z-50 transition-al`}
    >
      <nav className=" border-gray-200 max-w-7xl mx-auto overflow-x-hidden px-4 g:px-6 pt-2 pb-1  ">
        <div className="flex flex-wrap justify-between items-center  mx-auto max-w-screen-xl md:px-10">
          <Link to="/" className="flex items-center space-x-4 mx-0">
            <div className="w-10 rounded-full">
              <img className="" src="/sa_logo.jpg" alt="profile logo" />
            </div>
            <h2 className="hidden md:block px-0.5 text-3xl text-[#ca6202] font-semibold">
              Prasad Kandekar
            </h2>
          </Link>
          <span className="cursor-pointer md:hidden flex gap-4 items-center">
            <ThemeBtn />
            <img
              onClick={() => setOpen(!open)}
              src={
                open
                  ? "https://cdn.hugeicons.com/icons/cancel-01-stroke-rounded.svg"
                  : "/burger-menu-svgrepo-com.svg"
              }
              alt="hamburger-02"
              name="hamburger"
              width="30"
              height="30"
              className="dark:invert"
            />
          </span>

          <div
            className="menu  sm:hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
            id="mobile-menu-2 "
          >
            <ul
              onClick={() => setOpen(!open)}
              className={`flex flex-col md:mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 md:flex md:item-center md:pb-0 pb-12 absolute md:static  dark:text-gray-400 dark::bg-white dark:bg-gray-900 sm:dark:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all md:transition-none duration-500  ease-in ${
                open ? "top-16" : "top-[-490px]"
              }`}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#fd5e2b]" : "to-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 dark:border-gray-600  lg:hover:bg-transparent lg:border-0 hover:text-[#fd5e2b] lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#fd5e2b]" : "to-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 dark:border-gray-600 lg:hover:bg-transparent lg:border-0 hover:text-[#fd5e2b] lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${
                      isActive ? "text-[#fd5e2b]" : "to-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50  dark:border-gray-600  lg:hover:bg-transparent lg:border-0 hover:text-[#fd5e2b] lg:p-0`
                  }
                >
                  My Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://github.com/Prasad-264"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#fd5e2b]" : "to-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 dark:border-gray-600 lg:hover:bg-transparent lg:border-0 hover:text-[#fd5e2b] lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#fd5e2b]" : "to-gray-700"
                    } border-b border-gray-100 
                        dark:border-gray-600  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#fd5e2b] lg:p-0`
                  }
                >
                  Contact Me
                </NavLink>
              </li>
              <li className=" invisible md:visible">
                <ThemeBtn />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
