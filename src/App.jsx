import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./assets/Pages/Login/Login.jsx";
import PaginaPrincipal from "./assets/Pages/Principal/PaginaPrincipal.jsx";


const App = () => {
  return (
    <div className="app-root">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PaginaPrincipal/>}/>
      </Routes>
    </div>
  );
};

export default App;
