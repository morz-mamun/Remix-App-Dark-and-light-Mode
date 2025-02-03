import { NavLink } from "@remix-run/react";
import { useState } from "react";
import Logo from "./Logo";
import { useTheme } from "../ThemeProvider";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

export default function Navbar({ logoPath, smallLogo }: { readonly logoPath: string, readonly smallLogo: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const {theme, toggleTheme} =  useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const NavLinkComponent = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `transition ${isActive ? "text-[#9F56CA] font-semibold" : " hover:text-[#9F56CA] text-tertiary"
          } ${className ?? ''}`
        }
        onClick={() => window.innerWidth < 768 && setIsOpen(false)} // * Closes on mobile
      >
        {children}
      </NavLink>
    );
  };

  return (
    <nav className="absolute lg:top-5 left-0 right-0 max-w-7xl mx-auto text-sm bg-white border border-[#E5E7EB] rounded-xl p-[10px] shadow-sm">

      {/* navbar for mobile */}
     <div className="flex justify-between items-center">
       {/* Logo for mobile with Home Link */}
       <div className="md:hidden">
        <Logo smallLogo={smallLogo} logoPath={logoPath} />
      </div>

      {/* Hamburger Menu for Mobile Devices */}
      <button
        className="md:hidden flex items-center text-gray-600 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Navigation Links for Mobile Devices */}
      <div
        className={`${isOpen ? "block" : "hidden"
          } absolute bg-white md:static top-16 left-0 w-full md:w-auto flex flex-col md:flex-row gap-4 md:gap-6 px-4 md:px-0 py-4 md:py-0 shadow-md md:shadow-none z-10`}
      >
        <NavLinkComponent to="/">Home</NavLinkComponent>
        <NavLinkComponent to="/blogs">Blogs</NavLinkComponent>
        <NavLinkComponent to="/pricing">Pricing</NavLinkComponent>
        <NavLinkComponent to="/about-us">About Us</NavLinkComponent>
        <NavLinkComponent to="/career">Career</NavLinkComponent>
        <NavLinkComponent to="/contact-us" className="md:hidden">
          Contact Us
        </NavLinkComponent>
      </div>
     </div>

      {/* Navbar for Larger Screens */}
     <div className="flex justify-between items-center ">
      {/* Logo for Larger Screens */}
     <div className="hidden md:block">
        <Logo smallLogo={smallLogo} logoPath={logoPath} />
      </div>
      
      {/* Navigation Links for Larger Screens */}
      <div className="hidden md:flex gap-7">
        <NavLinkComponent to="/">Home</NavLinkComponent>
        <NavLinkComponent to="/blogs">Blogs</NavLinkComponent>
        <NavLinkComponent to="/pricing">Pricing</NavLinkComponent>
        <NavLinkComponent to="/about-us">About Us</NavLinkComponent>
        <NavLinkComponent to="/career">Career</NavLinkComponent>
      </div>

      {/* Contact Us Button for Larger Screens */}
      <NavLink
        to="/contact-us"
        className={({ isActive }) =>
          isActive
            ? "text-white bg-[#7A5AF8] hidden md:block font-semibold px-4 py-3 rounded-xl shadow-sm"
            : "text-white bg-[#7A5AF8] hover:bg-sky-600 hidden md:block font-semibold px-4 py-3 rounded-xl shadow-md"
        }
      >
        <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M11.0833 12.25V11.0833C11.0833 10.4645 10.8375 9.871 10.3999 9.43342C9.96229 8.99583 9.3688 8.75 8.74996 8.75H5.24996C4.63112 8.75 4.03763 8.99583 3.60004 9.43342C3.16246 9.871 2.91663 10.4645 2.91663 11.0833V12.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.99996 6.41667C8.28862 6.41667 9.33329 5.372 9.33329 4.08333C9.33329 2.79467 8.28862 1.75 6.99996 1.75C5.71129 1.75 4.66663 2.79467 4.66663 4.08333C4.66663 5.372 5.71129 6.41667 6.99996 6.41667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<p> Contact Us</p>
        </div>
       
      </NavLink>
      <button onClick={toggleTheme}>
      {theme === "dark" ? (
                <IoSunnyOutline />
              ) : (
                <FaMoon /> 
              )}
      </button>
     </div>
    </nav>
  );
}