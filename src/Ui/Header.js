import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <NavLink
          to="/"
          className="p-1 font-semibold text-white hover:text-yellow-300 transition-colors duration-300"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          className="p-1 font-semibold text-white hover:text-yellow-300 transition-colors duration-300"
        >
          Service
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/account"
          className="p-1 font-semibold text-white hover:text-yellow-300 transition-colors duration-300"
        >
          Account
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="w-full">
      <Navbar
        className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
        style={{
          background: "linear-gradient(90deg, #0f172a, #1e293b, #334155)",
        }}
      >
        <div className="flex items-center justify-between text-white">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Free_Fire_Logo.svg/1200px-Free_Fire_Logo.svg.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
            <Typography className="text-xl font-bold">
              <NavLink
                to="/"
                className="text-white hover:text-yellow-300 transition duration-300"
              >
                REGION NEPAL
              </NavLink>
            </Typography>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex">{navList}</div>

          {/* Mobile Menu Toggle */}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-white hover:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>

        {/* Mobile Nav */}
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;
