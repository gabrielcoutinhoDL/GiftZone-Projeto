import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anuncio from "./assets/Pages/anuncio/anuncio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Anuncio />} />
        <Route path="/anuncio" element={<Anuncio />} />
      </Routes>
    </BrowserRouter>
  );
}
