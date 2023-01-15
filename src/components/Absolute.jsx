import React from "react";

const Absolute = () => {
  return (
    <div className="  h-[48rem]">
      <div className="w-[55%] mx-auto relative top-44 left-44">
        <div className="bg-red-300 rounded-md w-[25%] h-[7.1rem] z-10 absolute left-4 top-3 "></div>
        <div className="bg-red-400 rounded-md w-[25%] h-[7.5rem] z-20 absolute left-2 top-2 "></div>
        <div className="bg-red-500 rounded-md h-32 absolute w-[25%] left-0 top-1 z-30">
          sad
        </div>
      </div>
      <div className="border-b-[100px] bg-red-900 border-l-[50px] border-r-[50px] h-0 w-full">
        asdas
      </div>
    </div>
  );
};

export default Absolute;
