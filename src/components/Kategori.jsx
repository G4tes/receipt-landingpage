import React from "react";
import dessert from "./assets/img/kategori/dessert.jpg";
import hariraya from "./assets/img/kategori/hariraya.jpg";
import makanmalam from "./assets/img/kategori/makanmalam.jpg";
import makansiang from "./assets/img/kategori/makansiang.jpg";
import resepayam from "./assets/img/kategori/resepayam.jpg";
import resepdaging from "./assets/img/kategori/resepdaging.jpg";
import resepsayuran from "./assets/img/kategori/resepsayuran.jpg";
import resepseafood from "./assets/img/kategori/resepseafood.jpg";
import sarapan from "./assets/img/kategori/sarapan.jpg";
import tradisional from "./assets/img/kategori/tradisional.jpg";

const Kategori = () => {
  const kategori = [
    {
      id: 1,
      title: "Sarapan",
      src: dessert,
    },
    {
      id: 2,
      title: "Masakan Hari Raya",
      src: hariraya,
    },
    {
      id: 3,
      title: "Masakan Tradisional",
      src: tradisional,
    },
    {
      id: 4,
      title: "Menu Makan Malam",
      src: makanmalam,
    },
    {
      id: 5,
      title: "Menu Makan Siang",
      src: makansiang,
    },
    {
      id: 6,
      title: "Resep Ayam",
      src: resepayam,
    },
    {
      id: 7,
      title: "Resep Daging",
      src: resepdaging,
    },
    {
      id: 8,
      title: "Resep Sayuran",
      src: resepsayuran,
    },
    {
      id: 9,
      title: "Resep Seafood",
      src: resepseafood,
    },
    {
      id: 10,
      title: "Sarapan",
      src: sarapan,
    },
  ];
  return (
    <div className="mx-auto my-8 max-w-6xl">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Telusuri berdasarkan</h1>
      </div>
      <div className="grid grid-cols-5">
        {kategori.map(({ id, src, title }) => (
          <div key={id} className="m-4 group ">
            <img
              src={src}
              alt=""
              className="rounded-2xl group-hover:ease-in-out group-hover:scale-110 transition duration-500"
            />
            <p className="text-center font-bold text-lg pt-2 cursor-pointer group-hover:text-green-500">
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kategori;
