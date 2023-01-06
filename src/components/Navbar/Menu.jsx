import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Menu = ({ menuTitle, menuItems }) => {
  return (
    <div className="">
      <div className="group ">
        <div className=" flex items-center px-5">
          <p className="font-bold text-[18px]  cursor-pointer group-hover:text-green-500">
            {menuTitle}
          </p>
          <div className="group-hover:hidden cursor-pointer">
            <IoIosArrowDown />
          </div>
          <div className="hidden group-hover:block cursor-pointer">
            <IoIosArrowUp />
          </div>
        </div>
        <div className=" hidden group-hover:block">
          <div className="absolute top-[4.6rem] px-2 w-[15%] z-10">
            <div className="border bg-green-500 rounded-xl text-white font-bold px-2 py-3 ">
              {menuItems.map(({ title }) => (
                <div className="">
                  <p className="cursor-pointer hover:bg-green-600">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
