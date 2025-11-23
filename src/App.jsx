import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./assets/Pages/Login/Login.jsx";
import PageProdutos from "./assets/Pages/PageProdutos/PageProdutos.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="app-root">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/produto/:id" element={<PageProdutos />} />
      </Routes>
    </div>
  );
};

export default App;
