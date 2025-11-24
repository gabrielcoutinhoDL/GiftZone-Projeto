import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiClock, FiShield, FiMail } from "react-icons/fi";
import "./PageProdutos.css";
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";
import { Link } from 'react-router-dom'


const PageProdutos = ({ produto }) => {
  if (!produto) {
    return (
      <div className="container-anuncio">
        <p>Produto não encontrado.</p>
      </div>
    );
  }

  const {
    nome,
    avaliacao,
    valoresDisponiveis = [],
    conteudosAbas = {},
    imagemUrl,
  } = produto;

  const [valorSelecionado, setValorSelecionado] = useState(
    valoresDisponiveis && valoresDisponiveis.length ? valoresDisponiveis[0] : ""
  );
  const [abaAtiva, setAbaAtiva] = useState("descricao");

  const getConteudoAba = () => conteudosAbas?.[abaAtiva] ?? "";

  return (

    <>
    
    <header>
      <Cabecalho></Cabecalho>
    </header>
    
    <div className="container-anuncio">
        <div className="bloco-principal">
          <div
            className="img"
            style={{
              backgroundImage: `url(${imagemUrl})`,
            }}
          >
            <h1>{nome}</h1>
            <span className="tag-produto">Games</span>
          </div>

          <div className="detalhes">
            <h2>{nome}</h2>
            <p>
              <span className="estrela">⭐</span>
              {avaliacao}
            </p>

            {valoresDisponiveis && valoresDisponiveis.length > 0 && (
              <div className="valoresTitulo">
                <h3>Selecione o Valor</h3>
                <div className="valoresBtn">
                  {valoresDisponiveis.map((valor) => (
                    <button
                      key={valor}
                      data-selecionado={valor === valorSelecionado}
                      onClick={() => setValorSelecionado(valor)}
                    >
                      {valor}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="valorTotal">
              <div className="box-valorTotal">
                <h4>Valor Total</h4>
                <h1>{valorSelecionado}</h1>
              </div>
              <div className="buttonsCompra">
                <button className="btn-carrinho">
                  <FaShoppingCart size={18} /> Adicionar ao Carrinho
                </button>

                <Link to="/pagamento">
                    <button className="btn-comprar">Comprar Agora</button>
                </Link>
                
                
              </div>
            </div>

            <div className="lista-vantagens">
              <ul>
                <li>
                  <div className="Centralizar-icon">
                    <FiClock size={20} />
                    <span>Entrega Instantânea</span>
                  </div>
                </li>
                <li>
                  <div className="Centralizar-icon">
                    <FiShield size={20} />
                    <span>100% Seguro</span>
                  </div>
                </li>
                <li>
                  <div className="Centralizar-icon">
                    <FiMail size={20} />
                    <span>Código por E-mail</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {conteudosAbas && Object.keys(conteudosAbas).length > 0 && (
          <div className="informacao">
            <div className="abas">
              {Object.keys(conteudosAbas).map((chave) => (
                <button
                  key={chave}
                  data-ativa={chave === abaAtiva}
                  onClick={() => setAbaAtiva(chave)}
                >
                  {chave.charAt(0).toUpperCase() + chave.slice(1)}
                </button>
              ))}
            </div>

            <div className="card">
              <h3>{getConteudoAba()}</h3>
            </div>
          </div>
        )}
      </div>
      
      <footer>
        <Rodape></Rodape>  
      </footer></>
  );
};

export default PageProdutos;

