import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Cards.css' 

function Cards({icone, titulo, descricao, link }){
    const navigate = useNavigate();
  return (
    <article className="card" onClick={() => navigate(link)}>
      <i className={`fas ${icone} card-icone`}></i>
      <h3 className="card-titulo">{titulo}</h3>
      <p className="card-descricao">{descricao}</p>
    </article>
  )
}

export default Cards