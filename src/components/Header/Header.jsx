import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  /**
   * nav menu array
   */
  const navMenuItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/login", label: "Sign In" },
    { path: "/signup", label: "Sign Up" },
  ];

  /**
   * navbar component
   */
  const NavItems = () => {
    return (
      <ul className="flex items-center gap-4">
        {navMenuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              className="text-base font-light text-zinc-900"
              to={item.path}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="border-b border-b-zinc-300 mb-10">
      <nav className="w-full max-w-[1440px] mx-auto px-4 py-4 flex items-center justify-between gap-8">
        {/* logo */}
        <div className="">
          <NavLink to="/">
            <img width={70} src="/logo.png" alt="GAI Logo" />
          </NavLink>
        </div>

        <div className="">
          <NavItems />
        </div>
      </nav>
    </header>
  );
};

export default Header;
