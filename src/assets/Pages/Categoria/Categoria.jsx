//componente filho

import App from "../../../App";
import "./Categoria.css";

//criação da função
function Categoria() {
  return (
    <>
      <header className="main-header">
        <div className="header-content container">
          <a href="/Home" className="logo">
            G
          </a>
          {/* Exemplo da logo */}

          <div className="search-bar">
            <input type="text" placeholder="Buscar gift cards..."></input>
            <i className="fa-solid fa-search"></i>
          </div>

          <nav className="main-nav">
            <a href="categorias">Categorias</a>
            <a href="#">Ofertas</a>
            <a href="#carrinho" class="cart-link">
              <i class="fa-solid fa-shopping-cart"></i> 0
            </a>
            <a href="/login" className="btn btn-primary">
              Entrar
            </a>
          </nav>
        </div>
      </header>

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

        <div class="empty-state">
          <div class="empty-icon">
            <i class="fa-solid fa-gamepad"></i>
          </div>
          <h2>Nenhum produto encontrado</h2>
          <p>Tente ajustar seus filtros ou explore outras categorias</p>
        </div>
      </main>
    </>
  );
}

//Ele exporta todos os dados
export default Categoria;
