
import App from "../../../App";
import "./Categoria.css";
import Cabecalho from "../../components/cabecalho/cabecalho";
import { PRODUTOS } from "../../../data/produtosData";
import { Link } from "react-router-dom";
import Rodape from "../../components/rodape/rodape"

//criação da função
function Categoria() {
  const productIds = Object.keys(PRODUTOS);
  
  return (
    <>
      <Cabecalho></Cabecalho>

      <section class="category-banner">
        <div class="category-info container">
          <i class="category-icon fa-solid fa-gamepad"></i>
          <div>
            <h1>Games</h1>
            <p>Gift cards para as suas plataformas de jogos favoritas.</p>
          </div>
        </div>
      </section>

      <main class="main-content container">
        <aside class="filter-panel">
          <h2>
            <i class="fa-solid fa-sliders"></i> Filtros
          </h2>

          <div class="filter-group">
            <h3>Faixa de Preço</h3>
            <div class="price-range-display">
              <span class="range-min">R$ 0</span>
              <span class="range-max">R$ 500</span>
            </div>
            <input type="range" min="0" max="500" class="price-slider"></input>
          </div>

          <div class="filter-group">
            <h3>Avaliação Mínima</h3>
            <div class="select-wrapper">
              <select>
                <option>4+ estrelas</option>
                <option>3+ estrelas</option>
              </select>
            </div>
          </div>

          <div class="filter-group">
            <h3>Ordenar por</h3>
            <div class="select-wrapper">
              <select>
                <option>Mais populares</option>
                <option>Preço (Crescente)</option>
                <option>Novidades</option>
              </select>
            </div>
          </div>

          <button class="btn btn-ghost filter-clear-btn">Limpar Filtros</button>
        </aside>

        <section>
          <div className="cards-grid">
            {productIds.map((id) => (
              <Link
                key={id}
                to={`/produto/${id}`}
                className="card-produto-link"
              >
                <article className="card-produto">
                  <div
                    className="card-produto-imagem"
                    style={{
                      backgroundImage: `url(${PRODUTOS[id].imagemUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="card-produto-info">
                    <h3 className="card-produto-titulo">{PRODUTOS[id].nome}</h3>
                    <p className="card-produto-avaliacao">
                      <span className="estrela">⭐</span>
                      {PRODUTOS[id].avaliacao}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

      </main>
      <footer>
        <Rodape></Rodape>
      </footer>
    </>
  );
}

//Ele exporta todos os dados
export default Categoria;
