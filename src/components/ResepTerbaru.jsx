import { React, useState } from "react";
import atiampela from "./assets/img/resep-terbaru/atiampela.jpg";
import kuahbandeng from "./assets/img/resep-terbaru/kuahbandeng.jpg";
import kupattahu from "./assets/img/resep-terbaru/kupattahu.jpg";
import blacktea from "./assets/img/resep-terbaru/blacktea.jpg";
import jumeokbap from "./assets/img/resep-terbaru/jumeokbap.jpg";
import bolakentang from "./assets/img/resep-terbaru/bolakentang.jpg";

const ResepTerbaru = () => {
  const makanan = [
    {
      id: 1,
      title: "Resep Kupat Tahu Magelang, Menu Sarapan Enak dan Komplet",
      src: kupattahu,
    },
    {
      id: 2,
      title: "Resep Pindang Bandeng Kuah Asam Manis, Sajian Sehat dan Istimewa",
      src: kuahbandeng,
    },
    {
      id: 3,
      title: "Resep Ati Ampela Kecap Daun Jeruk, Makanan Rumahan Wajib Ada",
      src: atiampela,
    },
    {
      id: 4,
      title:
        "Resep Black Tea Macchiato, Sekarang Bisa Bikin di Rumah Kapan Saja",
      src: blacktea,
    },
    {
      id: 5,
      title: "Resep Jumeokbap Daging Sayuran, Ide Menu Bekal Viral yang Enak",
      src: jumeokbap,
    },
    {
      id: 6,
      title: "Resep Bola-Bola Kentang Keju, Menu MPASI Lezat Bergizi",
      src: bolakentang,
    },
  ];
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="mx-auto my-8 max-w-6xl">
      <div>
        <h1 className="text-3xl font-bold text-center">Resep terbaru</h1>
      </div>
      <div className="grid grid-cols-3">
        {makanan.map(({ id, title, src }) =>
          !readMore ? (
            <div className="">
              {id <= 3 && (
                <div className="p-5 group">
                  <img
                    src={src}
                    alt=""
                    className="rounded-2xl group-hover:ease-in-out group-hover:scale-110 transition duration-500"
                  />
                  <p className="font-bold w-[90%] pt-2 group-hover:ease-in-out group-hover:scale-110 transition duration-500 group-hover:mt-2 group-hover:text-green-500">
                    {title}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-5 group">
              <img
                src={src}
                alt=""
                className="rounded-2xl group-hover:ease-in-out group-hover:scale-110 transition duration-500"
              />
              <p className="font-bold w-[90%] pt-2 group-hover:ease-in-out group-hover:scale-110 transition duration-500 group-hover:mt-2 group-hover:text-green-500">
                {title}
              </p>
            </div>
          )
        )}
      </div>
      <div className="flex justify-center">
        {!readMore ? (
          <button
            onClick={() => setReadMore(!readMore)}
            type="button"
            class=" py-2.5 px-5 mr-2 mb-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Read More
          </button>
        ) : (
          <button
            onClick={() => setReadMore(!readMore)}
            type="button"
            class=" py-2.5 px-5 mr-2 mb-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Hide
          </button>
        )}
      </div>
    </div>
  );
};

export default ResepTerbaru;
