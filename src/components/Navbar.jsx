import { React, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import Menu from "./Navbar/Menu";
import { Link, NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import ModalLogin from "./ModalLogin";
import NavbarMobile from "./NavbarMobile";
import { NavbarItem } from "../App";
const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/favorit");
  };
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(false);
  const [MenuClose, setMenuClose] = useState(false);

  const loyang = useContext(NavbarItem);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MenuHandle = (e) => {
    e.preventDefault();
    setMenuOpen(!MenuOpen);
    console.log(MenuOpen);
  };
  const CloseMenuHandle = (e) => {
    e.preventDefault();
    setMenuClose(!MenuClose);
    console.log(MenuOpen);
  };
  return (
    <div className="">
      {/* navbar mobile transition */}
      <div
        className={`block  transition-all delay-100 duration-700  ${
          MenuOpen ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        {MenuOpen && <NavbarMobile />}
      </div>

      {/*  */}
      <div className=" py-2 flex items-center max-w-7xl mx-auto ">
        {/* pc logo */}
        <div className="hidden md:block">
          <Link to="/">
            <img
              src="https://www.masakapahariini.com/wp-content/themes/mahi_revamp/assets/img/masakapahariini-logo.svg"
              className="h-[104px] w-[104px] bg-white rounded-full"
              alt=""
            />
          </Link>
        </div>
        {/*  */}
        {/* mobile logo */}
        <div className=" md:hidden flex justify-center w-full">
          <Link to="/">
            <img
              src="https://www.masakapahariini.com/wp-content/themes/mahi_revamp/assets/img/masakapahariini-logo.svg"
              className="h-[88px] w-[88px] bg-white rounded-full absolute top-3 left-0 right-0 bottom-0 m-auto"
              alt=""
            />
          </Link>
        </div>
        {/*  */}
        <div className="absolute top-7 left-5 md:hidden">
          {MenuOpen ? (
            <IoClose className="w-7 h-7" onClick={MenuHandle} />
          ) : (
            <TfiMenu className="w-7 h-7  " onClick={MenuHandle} />
          )}
        </div>

        {!isScrolledDown ? (
          <div className="absolute top-6 right-5 md:hidden">
            <BsFillPersonFill className="w-8 h-8 fill-green-600" />
          </div>
        ) : (
          <div className="absolute top-7 right-5 md:hidden">
            <svg
              aria-hidden="true"
              class="w-7 h-7  "
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
        )}

        <div className="hidden mx-8 md:flex items-center">
          {loyang.map(({ menuTitle, menuItems }, id) => (
            <div className="" key={id}>
              <Menu menuTitle={menuTitle} menuItems={menuItems} />
            </div>
          ))}
        </div>
        <div className="hidden md:block">
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
        <div className="hidden md:flex items-center justify-end gap-2 mx-auto">
          <p className="font-bold text-[18px] cursor-pointer hover:text-green-500 ">
            <Link to="/favorit" onClick={handleClick}>
              Favorit
            </Link>
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
    </div>
  );
};

export default Navbar;
