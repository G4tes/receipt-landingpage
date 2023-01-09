import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Kategori from "../../components/Kategori";
import ResepTerbaru from "../../components/ResepTerbaru";
import ArtikelTerbaru from "../../components/ArtikelTerbaru";
import Promotion from "../../components/Promotion";
import Footer from "../../components/Footer";
import FavoritPage from "../FavoritPage";

function Favorit() {
  return (
    <div className="h-screen">
      <div className="bg-white  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="">
          <Navbar />
        </div>
      </div>
      <div className="bg-[#f2f2f2]">
        <div className="mx-24 min-h-full">
          <FavoritPage />
        </div>
      </div>
      <div className="bg-[#ff4800] ">
        <Footer />
      </div>
    </div>
  );
}

export default Favorit;
