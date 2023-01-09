import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./components/Route/Beranda";
import Favorit from "./components/Route/Favorit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/favorit" element={<Favorit />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
