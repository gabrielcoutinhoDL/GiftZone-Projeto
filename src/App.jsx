import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./assets/Pages/Login/Login.jsx";
import PaginaPrincipal from "./assets/Pages/Principal/PaginaPrincipal.jsx";
import PageProdutos from "./assets/Pages/PageProdutos/PageProdutos.jsx";
import Categoria from "./assets/Pages/Categoria/Categoria.jsx";


const App = () => {
  return (
    <div className="app-root">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PaginaPrincipal/>}/>
        <Route path="/produto/:id" element={<PageProdutos/>} />
        <Route path="/categoria" element={<Categoria/>} />
      </Routes>
    </div>
  );
};

export default App;
