import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll"; 
import logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 shadow-blue-100 mx-auto px-4 text-black bg-blue-600">
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="cursor-pointer text-3xl font-bold text-black hover:text-gray-900"
      >
        {" "}
        <div className="flex justify-center items-center  opacity-11000  rounded-full">
          <img
            src={logo}
            width={155}
            height={140}
            alt="logo"
            className="rounded-full"
          />
        </div>
      </Link>
      <ul className="hidden md:flex space-x-4">
        <NavItem to="home">Home</NavItem>
        <NavItem to="about">About</NavItem>
        <NavItem to="services">Services</NavItem>
        <NavItem to="contact">Contact</NavItem>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-black m-4">REACT.</h1>
        <NavItem to="home" handleClick={handleNav}>
          Home
        </NavItem>
        <NavItem to="about" handleClick={handleNav}>
          About
        </NavItem>
        <NavItem to="services" handleClick={handleNav}>
          Services
        </NavItem>
        <NavItem to="contact" handleClick={handleNav}>
          Contact
        </NavItem>
      </ul>
    </div>
  );
};

const NavItem = ({ to, children, handleClick }) => (
  <li className="p-4 border-b border-gray-600">
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="cursor-pointer text-white hover:text-gray-300 transition duration-300"
      onClick={handleClick}
    >
      {children}
    </Link>
  </li>
);

export default Navbar;
