import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="h-screen ">
      <div className="bg-white px-24">
        <Navbar />
      </div>
      <div className="mx-24">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
