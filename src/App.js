import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Kategori from "./components/Kategori";
import ResepTerbaru from "./components/ResepTerbaru";

function App() {
  return (
    <div className="h-screen">
      <div className="bg-white  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="  ">
          <Navbar />
        </div>
      </div>

      <div className="bg-[#f2f2f2]">
        <div className="mx-24 ">
          <Carousel />
          <Kategori />
          <ResepTerbaru />
        </div>
      </div>
    </div>
  );
}

export default App;
