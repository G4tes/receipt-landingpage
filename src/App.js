import { BrowserRouter, Route, Routes } from "react-router-dom";
import Daftar from "./components/Route/Daftar";
import Beranda from "./components/Route/Beranda";
import Favorit from "./components/Route/Favorit";
// import Absolute from "./components/Absolute";
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
