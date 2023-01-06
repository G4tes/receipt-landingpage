import React from "react";
const Menu = ({ img, text }) => {
  return (
    <div className="">
      <div className="hover:ease-in-out hover:scale-110 transition duration-500 ">
        <div className="absolute w-[1100px] h-[359px] bg-gradient-to-r from-black/70  rounded-2xl"></div>
        <img
          src={img}
          className="w-full h-[359px] object-cover  rounded-2xl "
          alt=""
        />
      </div>
      <div className="w-[32%] absolute inset-x-0 inset-y-10 m-12 group">
        <p className="w-[90%] text-2xl font-bold text-white group-hover:ease-in-out group-hover:scale-110 transition duration-500">
          {text}
        </p>
        <div className="mt-3">
          <button class="btn bg-[#00a057] px-14  hover:bg-[#00a057] group-hover:ease-in-out group-hover:scale-110 transition duration-500">
            Cek Resep
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
