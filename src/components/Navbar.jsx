import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";

const Navbutton = ({ title, customfunc, icon, color, dotColor }) => {
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customfunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover::bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      >
        {icon}
      </span>
    </button>
  </TooltipComponent>;
};

function Navbar() {
  const {
    activeMenu,
    setActiveMenu,
    handleClick,
    isClick,
    setScreenSize,
    ScreenSize,
  } = useStateContext();
  return (
    <div className="flex justify-between p-2 md :mx-6 relarive">
      <NavButton
        tittle="Menu"
        customfunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="gray"
        icon={<AiOutlineMenu />}
      />
      <div className="flex" />
      <NavButton
        tittle="cart"
        customfunc={() => handleClick("cart")}
        color="gray"
        icon={<FiShoppingCart />}
      />
      <NavButton
        tittle="chat"
        customfunc={() => handleClick("chat")}
        color="gray"
        icon={<BsChatLeft />}
      />
      <NavButton
        tittle="notification"
        customfunc={() => handleClick("notification")}
        color="gray"
        icon={<RiNotification3Line />}
      />
      <TooltipComponent content="profile" position="BottomCenter" />
      <div
        className="
      felx
      items-center
      gap-2
      curos-pointer
      p-1
      hover:bg-light-gray
      rounded-lg"
        onClick={() => handleClick("userProfile")}
      >
        <img
          className="rounded-full w-8 h-8"
          src={avatar}
          alt="imagen de perfil usuario"
        />
        <p>
          <span className="text-gray-400 text-14"> hola</span> {""}
          <span className="text-gray-400 font-bold ml-1  text-14">
            {" "}
            Chatboot
          </span>
        </p>
        <MdKeyboardArrowDown className="text-gray-400 text-14" />
      </div>
    </div>
  );
}

export default Navbar;
