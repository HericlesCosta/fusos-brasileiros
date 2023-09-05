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
        <Route path="/" element={<Home />} />
        <Route path="/brasilia" element={<Brasilia />} />
        <Route path="/fernando-noronha" element={<FernandoDeNoronha />} />
        <Route path="/amazonas" element={<Manaus />} />
        <Route path="/acre" element={<RioBranco />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
