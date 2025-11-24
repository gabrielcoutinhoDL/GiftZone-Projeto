import React, { useState, useEffect } from "react";
import "./cabecalho.css";
import PaginaPrincipal from "../../Pages/Principal/PaginaPrincipal";

const Cabecalho = () => { 
  const [nomeUsuario, setNomeUsuario] = useState(""); 

  useEffect(() => {
    const dadosStorage = localStorage.getItem("Datacadastro"); 
    if (dadosStorage) {
      try {
        const dados = JSON.parse(dadosStorage);
        if (dados.nome) {
          const primeiroNome = dados.nome.split(' ')[0];
          setNomeUsuario(primeiroNome);
        }
      } catch (error) {
        console.error("Erro ao ler dados do usuário:", error);
      }
    }
  }, []);
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
        <p className="usuario">
          <i className="fas fa-user fa-xs"> {nomeUsuario}</i>
        </p>
      </nav>
    </header>
  );
};

export default Cabecalho;