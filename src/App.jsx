//Componente pai

//importa o componente filho
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anuncio from "./assets/Pages/anuncio/anuncio";
import Login from "./assets/Pages/Login/Login.jsx";
import Categoria from "./assets/Pages/Categoria/categoria.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/anuncio" element={<Anuncio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categoria" element={<Categoria />} />
      </Routes>
    </BrowserRouter>
  );
}
