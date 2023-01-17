import { React, useContext, useState } from "react";
import { NavbarItem } from "../App";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const NavbarMobile = () => {
  const [ListOpen, setListOpen] = useState([false, 1]);
  const loyang = useContext(NavbarItem);
  console.log(loyang);

  return (
    <div
      className={`h-screen w-full ${
        ListOpen ? "overflow-x-scroll" : "overflow-hidden"
      }  bg-white`}
    >
      <div className="h-20 bg-white fixed top-0 left-0 border-b-2 border-gray-200 w-full  -mt-4 " />
      <div className={`${ListOpen[0] ? "" : "h-[75%]"}`}>
        <div className="pt-24 ">
          {loyang.map(({ menuItems, menuTitle }, no) => (
            <div className="">
              <div key={no} className="flex items-center  p-4 ">
                <div className="w-[80%]">
                  <p className="text-2xl font-bold">{menuTitle}</p>
                </div>
                <div className="w-[20%] border-l pl-4">
                  {ListOpen[0] && ListOpen[1].no === no ? (
                    <IoIosArrowUp
                      className="text-2xl font-bold  "
                      onClick={() => {
                        setListOpen([false, { no }]);
                        //   console.log(ListOpen[1]);
                      }}
                    />
                  ) : (
                    <IoIosArrowDown
                      className="text-2xl font-bold "
                      onClick={() => {
                        setListOpen([true, { no }]);
                        //   console.log(ListOpen[1]);
                      }}
                    />
                  )}
                </div>
              </div>
              <div>
                {ListOpen[0] && ListOpen[1].no === no
                  ? menuItems.map(({ title }, no) => (
                      <div>
                        <ul>
                          <li className="text-xl ml-8 py-2 font-bold hover:text-green-600">
                            {title}
                          </li>
                        </ul>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          ))}
        </div>
        <hr className="border-gray-300 mx-4 mt-2 mb-4" />
        <div className="flex justify-center ">
          <button className="btn w-[80%] bg-green-600 hover:bg-green-600">
            <p className="font-bold">Masuk/Daftar</p>
          </button>
        </div>
        <hr className="border-gray-300 mx-4 mt-4 mb-6" />
      </div>
      <div className="bg-white h-[40%]  pt-4">
        <div className="mx-8 ">
          <h1 className="text-2xl font-bold">Telusuri berdasarkan</h1>
          <div className="flex items-center ">
            <ul className="">
              <li className="text-base btn btn-sm rounded-full bg-white text-green-600 border-green-600 mr-2 mt-4 font-semibold hover:bg-green-600 hover:text-white">
                Ayam
              </li>
              <li className="text-base btn btn-sm rounded-full bg-white text-green-600 border-green-600 mr-2 mt-4 font-semibold hover:bg-green-600 hover:text-white">
                Rice Cooker
              </li>
              <li className="text-base btn btn-sm rounded-full bg-white text-green-600 border-green-600 mr-2 mt-4 font-semibold hover:bg-green-600 hover:text-white">
                Bali
              </li>
            </ul>
          </div>
          <div className="flex items-center ">
            <ul>
              <li className="text-base btn btn-sm rounded-full bg-white text-green-600 border-green-600 mr-2 mt-4 font-semibold hover:bg-green-600 hover:text-white">
                Cukup Rumit
              </li>
              <li className="text-base btn btn-sm rounded-full bg-white text-green-600 border-green-600 mr-2 mt-4 font-semibold hover:bg-green-600 hover:text-white">
                Nasi Goreng
              </li>
            </ul>
          </div>
          <div className="flex items-center ">
            <ul>
              <li className="text-base btn btn-sm rounded-full bg-white text-green-600 border-green-600 mr-2 mt-4 font-semibold hover:bg-green-600 hover:text-white">
                Rendah Gula
              </li>
              <li className="text-base btn btn-sm rounded-full bg-white text-green-600 border-green-600 mr-2 mt-4 font-semibold hover:bg-green-600 hover:text-white">
                Manis
              </li>
              <li className="text-base btn btn-sm rounded-full bg-white text-green-600 border-green-600 mr-2 mt-4 font-semibold hover:bg-green-600 hover:text-white">
                Tumis
              </li>
            </ul>
          </div>
          <div className="flex items-center ">
            <ul>
              <li className="text-base btn btn-sm rounded-full bg-white text-green-600 border-green-600 mr-2 mt-4 font-semibold hover:bg-green-600 hover:text-white">
                Low
              </li>
              <li className="text-base btn btn-sm rounded-full bg-white text-green-600 border-green-600 mr-2 mt-4 font-semibold hover:bg-green-600 hover:text-white">
                Imlek
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
