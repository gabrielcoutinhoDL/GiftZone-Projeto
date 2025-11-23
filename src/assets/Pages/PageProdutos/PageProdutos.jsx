import React from "react";
import { useParams } from "react-router-dom";
import AnuncioCard from "../../components/Anuncio/AnuncioCard.jsx";
import { PRODUTOS } from "../../../data/produtosData.js";
import "./PageProdutos.css";

const PageProdutos = () => {
  const { id } = useParams();
  const produto = PRODUTOS[id];

  if (!produto) {
    return (
      <div className="erro-container">
        <h1>❌ Produto Não Encontrado!</h1>
        <p>O ID "{id}" não corresponde a um produto existente.</p>
      </div>
    );
  }

  return (
    <div className="page-produtos-wrapper">
      <AnuncioCard produto={produto} />
    </div>
  );
};

export default PageProdutos;
