import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Brasilia from "./pages/Brasilia";
import FernandoDeNoronha from "./pages/FernandoNoronha";
import Manaus from "./pages/Manaus";
import RioBranco from "./pages/RioBranco";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fusos-brasileiros/" element={<Home />} />
        <Route path="/fusos-brasileiros/brasilia" element={<Brasilia />} />
        <Route path="/fusos-brasileiros/fernando-noronha" element={<FernandoDeNoronha />} />
        <Route path="/fusos-brasileiros/amazonas" element={<Manaus />} />
        <Route path="/fusos-brasileiros/acre" element={<RioBranco />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
