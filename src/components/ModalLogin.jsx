import { React, useEffect, useState } from "react";
import ModalLoginEmail from "./ModalLoginEmail";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
const ModalLogin = ({ modalOpen }) => {
  // const [thisModal, setThisModal] = useState(modalOpen);
  // const [closeModal, setCloseModal] = useState(false);
  // const [thisModalEmail, setThisModalEmail] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/register");
  };
  return (
    <div className="">
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal cursor-pointer">
        <div className="modal-box relative w-1/4 h-1/2">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-[18px] font-bold pb-6">
            Masuk untuk menyimpan resep dan artikel favoritmu.
          </h3>
          <div className="py-4">
            <label htmlFor="my-modal-6">
              <div className="text-center text-[14px] font-semibold border border-gray-500 shadow-md py-2 cursor-pointer">
                <div>Masuk Dengan Email</div>
                <ModalLoginEmail />
              </div>
            </label>
            <div className="text-center text-[14px] font-semibold border border-gray-500 shadow-md py-2 my-3">
              <a href="/register">Buat akun baru</a>
            </div>
            <hr className="border-t-gray-400 shadow-sm mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
