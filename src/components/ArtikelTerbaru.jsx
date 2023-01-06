import { React, useState } from "react";
import bangkabelitung from "./assets/img/artikel-terbaru/bangkabelitung.jpg";
import bolu from "./assets/img/artikel-terbaru/bolu.jpg";
import buryam from "./assets/img/artikel-terbaru/buryam.jpg";
import kacangkedelai from "./assets/img/artikel-terbaru/kacangkedelai.jpg";
import nasigoreng from "./assets/img/artikel-terbaru/nasigoreng.jpg";
import pudding from "./assets/img/artikel-terbaru/pudding.jpg";
import telurkecap from "./assets/img/artikel-terbaru/telurkecap.jpg";
import tempe from "./assets/img/artikel-terbaru/tempe.jpg";
const ArtikelTerbaru = () => {
  const [readMore, setReadMore] = useState(false);
  const makanan = [
    {
      id: 1,
      title: "5 Aneka Olahan Tahu Putih yang Ekonomis untuk Tanggal Tua",
      src: bangkabelitung,
    },
    {
      id: 2,
      title: "Kaya Protein, Inilah 5 Manfaat Kacang Kedelai Untuk Tubuh",
      src: kacangkedelai,
    },
    {
      id: 3,
      title: "Cara Membuat Bubur Nasi Lebih Mudah Sekaligus Variasi Resepnya",
      src: buryam,
    },
    {
      id: 4,
      title: "Yuk, Nostalgia Makanan Jaman Dulu dan Coba Resepnya di Sini!",
      src: bolu,
    },
    {
      id: 5,
      title: "5 Resep Cemilan Goreng Mudah Dibuat Untuk Teman Ngeteh",
      src: tempe,
    },
    {
      id: 6,
      title:
        "Bukan Nasi Goreng, Inilah 8 Olahan Nasi Sisa yang Bikin Kamu Lebih Hemat",
      src: nasigoreng,
    },
    {
      id: 7,
      title:
        "Aneka Resep Puding yang Mudah Dibuat Untuk Dessert Segar di Rumah",
      src: pudding,
    },
    {
      id: 8,
      title:
        "5 Olahan Jamur Tiram serta Tips Memasaknya Agar Terasa Lebih Lezat",
      src: telurkecap,
    },
  ];
  return (
    <div className="mx-auto my-8 max-w-6xl">
      <div className="">
        <h1 className="text-3xl font-bold text-center">Artikel Terbaru</h1>
      </div>
      <div className="grid grid-cols-4">
        {makanan.map(({ id, title, src }) =>
          !readMore ? (
            <div key={id}>
              {id <= 4 && (
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
            <div key={id}>
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

export default ArtikelTerbaru;
