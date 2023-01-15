import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Register from "../Register";
function Daftar() {
  return (
    <div>
      <div className="h-screen">
        <div className="bg-white  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="">
            <Navbar />
          </div>
        </div>
        <div className="bg-[#f2f2f2]">
          <div className="mx-24 min-h-full">
            <Register />
          </div>
        </div>
        <div className="bg-[#ff4800] ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Daftar;
