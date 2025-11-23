<<<<<<< HEAD
//Componente pai

//importa o componente filho
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anuncio from "./assets/Pages/anuncio/anuncio";
import Login from "./assets/Pages/Login/Login.jsx";
import Categoria from "./assets/Pages/Categoria/categoria.jsx";
=======
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./assets/Pages/Login/Login.jsx";
import PaginaPrincipal from "./assets/Pages/Principal/PaginaPrincipal.jsx";
import PageProdutos from "./assets/Pages/PageProdutos/PageProdutos.jsx";

>>>>>>> 085130be7957c05a9eee65dedc686acc77ef3109


const App = () => {
  return (
    <div className="app-root">
      <Routes>
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/categoria" element={<Categoria />} />
=======
        <Route path="/" element={<PaginaPrincipal/>}/>
        <Route path="/produto/:id" element={<PageProdutos/>} />
>>>>>>> 085130be7957c05a9eee65dedc686acc77ef3109
      </Routes>
    </div>
  );
};

export default App;
