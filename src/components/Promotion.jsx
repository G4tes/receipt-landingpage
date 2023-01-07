import React from "react";
import newsletter from "./assets/newsletter.jpg";
const Promotion = () => {
  return (
    <div className="mx-auto mt-12 max-w-6xl h-72">
      <div className="flex flex-row border rounded-2xl bg-white">
        <div className="flex">
          <img src={newsletter} alt="" />
        </div>
        <div className="flex flex-col justify-center w-[43%] mx-auto">
          <h1 className="text-3xl font-bold">
            Dapatkan update terbaru resep MAHI dengan mendaftar sekarang!
          </h1>
          <div className="flex items-center mt-8">
            <input
              type="email"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              class="border w-1/2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="E-mail"
            />
            <button className="border bg-[#00a057] px-10 rounded-md py-2 text-white font-bold mx-3">
              Daftar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
