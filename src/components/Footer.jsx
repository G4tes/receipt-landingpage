import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import recepedia from "./assets/recepedia.png";
import unilever from "./assets/unilever.png";
const Footer = () => {
  return (
    <div className="h-[19rem] mx-auto max-w-6xl ">
      <div className="w-[97%] mx-auto">
        <div className="flex flex-row py-6">
          <div className="grid grid-cols-2 w-[25%]">
            <p className="pr-32 pt-3 font-bold text-white cursor-pointer h-1/2 text-[20px]">
              Beranda
            </p>
            <p className="pr-32 pt-3 font-bold text-white cursor-pointer h-1/2 text-[20px]">
              Produk
            </p>
            <p className="pr-32 pt-3 font-bold text-white cursor-pointer h-1/2 text-[20px]">
              Resep
            </p>
            <p className="pr-32 pt-3 font-bold text-white cursor-pointer h-1/2 text-[20px]">
              Favorit
            </p>
            <p className="pr-32 pt-3 font-bold text-white cursor-pointer h-1/2 text-[20px]">
              Artikel
            </p>
          </div>
          <div className="grid grid-cols-2 mx-auto w-[60%] pt-2">
            <p className=" px-[4rem]   text-white cursor-pointer h-[30%] text-[16px]">
              Pemberitahuan privasi
            </p>
            <p className=" px-[4rem]  text-white cursor-pointer  h-[30%] text-[16px]">
              Informasi Legal
            </p>
            <p className=" px-[4rem]  text-white cursor-pointer h-[30%] text-[16px]">
              Pemberitahuan Cookie
            </p>
            <p className=" px-[4rem]   text-white cursor-pointer  h-[30%] text-[16px]">
              Sitemap
            </p>
            <p className=" px-[4rem]   text-white cursor-pointer h-[30%] text-[16px]">
              Kontak Kami
            </p>
          </div>
          <div className="flex flex-col w-[23%] justify-start text-center mt-2">
            <p className="text-[16px] font-bold text-white">Ikuti kami</p>
            <div className="flex items-center mx-auto">
              <AiOutlineInstagram className="w-10 h-10 fill-white " />
              <AiOutlineYoutube className="w-10 h-10 fill-white " />
            </div>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="w-1/2">
            <div className=" flex justify-end">
              <img
                src={unilever}
                alt=""
                className="w-[80px] h-[88px] object-cover"
              />
            </div>
            <div className="flex justify-end">
              <p className="font-bold text-white text-[13px] mt-2">
                © Unilever 2023
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <img src={recepedia} className=" object-cover ml-4" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
