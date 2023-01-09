import React from "react";
import ModalLogin from "./ModalLogin";
const FavoritPage = () => {
  return (
    <div className="mx-auto mt-12 max-w-6xl ">
      <div className="h-28"></div>
      <div className="h-[388px] ">
        <div className="flex justify-center items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/1200px-Love_Heart_symbol.svg.png"
            alt=""
            className="w-[4%] h-[4%] pr-2"
          />
          <h2 className="text-[30px] font-bold">Favorit</h2>
        </div>
        <div className="flex justify-center my-3">
          <h1 className="text-[30px] font-bold w-[35%] text-center">
            Anda harus masuk terlebih dahulu
          </h1>
        </div>
        <div className="flex justify-center ">
          <p className="font-semibold w-[30%] text-center">
            Masuk untuk menyimpan resep dan artikel favoritmu.
          </p>
        </div>
        <div className="flex justify-center my-4">
          <label
            className="btn px-28 bg-green-600 hover:bg-green-600  "
            htmlFor="my-modal-4"
          >
            <p className="font-bold">Masuk/Daftar</p>
          </label>
          <ModalLogin />
        </div>
        <div className="flex justify-center">
          <p className=" underline">
            You haven't registered yet? Register here
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavoritPage;
