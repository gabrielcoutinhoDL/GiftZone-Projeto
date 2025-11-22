import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anuncio from "./assets/Pages/anuncio/anuncio";
import Login from "./assets/Pages/Login/Login.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/anuncio" element={<Anuncio />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
