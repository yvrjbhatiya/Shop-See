import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-white py-6 shadow-md"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-[40px]">
        <Link to={"/"}>
          <div>
            <img className="w-[150px] md:w-[200px]" src={Logo} alt="" />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to={"/"} className="text-lg font-normal uppercase">
            Home
          </Link>
          <Link to={"/category"} className="text-lg font-normal uppercase">
            Categories
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer relative"
          >
            <BsBag className="text-2xl" />
            <div className="bg-custom absolute -right-2 -bottom-2 text-xs w-6 h-6 text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
