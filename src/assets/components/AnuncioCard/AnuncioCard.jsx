import React from "react";
import { useParams } from "react-router-dom";
import PageProdutos from "../../Pages/PageProdutos/PageProdutos.jsx";
import { PRODUTOS } from "../../../data/produtosData.js";
import "./AnuncioCard.css";

const AnuncioCard = () => {
  const { id } = useParams();
  const produto = PRODUTOS[id];


  return (
    <div>
      <PageProdutos produto={produto} />
    </div>
  );
};

export default AnuncioCard;


