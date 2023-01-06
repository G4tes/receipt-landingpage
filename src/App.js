import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Kategori from "./components/Kategori";

function App() {
  return (
    <div className="h-screen">
      <div className="bg-white px-24">
        <Navbar />
      </div>
      <div className="bg-[#f2f2f2]">
        <div className="mx-24 ">
          <Carousel />
          <Kategori />
        </div>
      </div>
    </div>
  );
}

export default App;
