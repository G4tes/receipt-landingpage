import React from "react";
import Menu from "./Navbar/Menu";
import { BsFillPersonFill } from "react-icons/bs";
import ModalLogin from "./ModalLogin";
const Navbar = () => {
  const loyang = [
    {
      menuTitle: "Resep",
      menuItems: [
        {
          title: "Sarapan",
        },
        {
          title: "Menu Makan Siang",
        },
        {
          title: "Menu Makan Malam",
        },
        {
          title: "Dessert",
        },
        {
          title: "Resep Ayam",
        },
        {
          title: "Resep Daging",
        },
        {
          title: "Resep Sayuran",
        },
        {
          title: "Resep Seafood",
        },
        {
          title: "Masakan Tradisional",
        },
        {
          title: "Masakan Hari Raya",
        },
      ],
    },
    {
      menuTitle: "Artikel",
      menuItems: [
        {
          title: "Insipirasi Dapur",
        },
        {
          title: "Makanan & Gaya Hidup",
        },
        {
          title: "Tips Masak",
        },
      ],
    },
    {
      menuTitle: "Produk",
      menuItems: [
        {
          title: "Kecap Manis",
        },
        {
          title: "Kaldu",
        },
        {
          title: "Bumbu Jadi",
        },
        {
          title: "Saus",
        },
        {
          title: "Cabai Tabur",
        },
        {
          title: "Teh",
        },
        {
          title: "Minuman",
        },
        {
          title: "Sup",
        },
        {
          title: "Es Krim",
        },
      ],
    },
  ];

  return (
    <div className=" py-2 flex items-center max-w-7xl mx-auto  ">
      <div>
        <img
          src="https://www.masakapahariini.com/wp-content/themes/mahi_revamp/assets/img/masakapahariini-logo.svg"
          className="h-[104px] w-[104px]"
          alt=""
        />
      </div>
      <div className="mx-8 flex items-center">
        {loyang.map(({ menuTitle, menuItems }, id) => (
          <div className="" key={id}>
            <Menu menuTitle={menuTitle} menuItems={menuItems} />
          </div>
        ))}
      </div>
      <div className="">
        <form className="">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative w-[484px] h-[46px]">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-3  pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold"
              placeholder="Mau Masak Apa Hari Ini?"
              required
            />
          </div>
        </form>
      </div>
      <div className="flex items-center justify-end gap-2 mx-auto">
        <p className="font-bold text-[18px] cursor-pointer hover:text-green-500 ">
          Favorit
        </p>

        <label
          htmlFor="my-modal-4"
          className="font-bold text-[18px] cursor-pointer hover:text-green-500 ml-6"
        >
          Masuk
        </label>
        <ModalLogin />
        <div className="flex items-center">
          <BsFillPersonFill
            className="fill-green-600 cursor-pointer"
            size={35}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
