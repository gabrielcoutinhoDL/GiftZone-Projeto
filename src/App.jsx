import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./assets/Pages/Login/Login.jsx";
import PaginaPrincipal from "./assets/Pages/Principal/PaginaPrincipal.jsx";
import AnuncioCard from "./assets/components/AnuncioCard/AnuncioCard.jsx";
import Categoria from "./assets/Pages/Categoria/Categoria.jsx";
import Pagamento from "./assets/Pages/pagamento/pagamento.jsx";

const App = () => {
  return (
    <div className="app-root">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PaginaPrincipal/>}/>
        <Route path="/produto/:id" element={<AnuncioCard/>} />
        <Route path="/categoria" element={<Categoria/>} />
        <Route path="/pagamento" element={<Pagamento/>} />
      </Routes>
    </div>
  );
};

export default App;
