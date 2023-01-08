import React from "react";

const ModalLoginEmail = () => {
  return (
    <div className="">
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <label htmlFor="my-modal-6" className="modal cursor-pointer  ">
        <div className="modal-box relative  w-full h-full">
          <div
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </div>
          <h3 className="text-[18px] font-bold text-left">
            Masuk dengan email
          </h3>
          <form action="">
            <div className="py-4">
              <div className="">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="true"
                  class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="my-2">
              <input
                type="password"
                id="password"
                placeholder="Password"
                class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="pt-4">
              <button className="btn px-12 font-bold text-white bg-green-600 hover:bg-green-600">
                Masuk
              </button>
            </div>
          </form>

          <div className="pt-5">
            <ul className="">
              <li className="underline leading-6">
                <a href="/">Lupa kata sandi?</a>
              </li>
              <li className="underline leading-6">
                <a href="/">Belum mendaftar?</a>
              </li>
              <li className="underline leading-6">
                <a href="/">Daftar</a>
              </li>
            </ul>
          </div>
        </div>
      </label>
    </div>
  );
};

export default ModalLoginEmail;
