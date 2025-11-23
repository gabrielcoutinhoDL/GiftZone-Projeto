import React from "react";
import "./cabecalho.css";
import Categoria from "../../Pages/Categoria/Categoria";
import PaginaPrincipal from "../../Pages/Principal/PaginaPrincipal";

const cabecalho = () => {
  return (
    <header>
      <div className="zonaLogo">
        <a href="/">
          <div className="logoTipo">G</div>
          <h2>GiftZone</h2>
        </a>
      </div>

      <form>
        <input
          type="text"
          placeholder="Buscar Gift Cards..."
          className="pesquisaInput"
        />
      </form>
      <nav className="navegacao">
        <ul className="opcoes">
          <li>
            <a href="/categoria">Categorias</a>
          </li>
          <li>
            <a href="#ofertas">Ofertas</a>
          </li>
          <li>
            <a href="">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
        <button className="botaoEntrar">
          <i className="fas fa-user fa-xs"></i>
          Entrar
        </button>
      </nav>
    </header>
  );
};

export default cabecalho;
