import { BrowserRouter, Route, Routes } from "react-router-dom";
import Daftar from "./components/Route/Daftar";
import Beranda from "./components/Route/Beranda";
import Favorit from "./components/Route/Favorit";
// import Absolute from "./components/Absolute";
import { createContext } from "react";

export const NavbarItem = createContext([
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
]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/favorit" element={<Favorit />} />
        <Route path="/register" element={<Daftar />} />
        {/* <Route path="/absolute" element={<Absolute />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
