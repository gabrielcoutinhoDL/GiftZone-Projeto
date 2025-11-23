import React from 'react'
import Cards from '../../components/cards/Cards'
import './PaginaPrincipal.css'
import { Link } from 'react-router-dom'
import { PRODUTOS } from '../../../data/produtosData'
import Cabecalho from '../../components/cabecalho/cabecalho'

const PaginaPrincipal = () => {
        const categorias = [
            {id: 1, icone: 'fa-gamepad',titulo: 'Games', descricao: '248 produtos', link: ''},
            {id: 2, icone: 'fa-tv', titulo: 'Streaming', descricao: '89 produtos', link: ''},
            {id: 3, icone: 'fa-mobile-alt', titulo: 'Apps', descricao: '156 produtos', link: ''},
            {id: 4, icone: 'fa-music', titulo: 'Música', descricao: '134 produtos', link: ''}
        ]
        const productIds = Object.keys(PRODUTOS)
  return (
    <div>

        <Cabecalho></Cabecalho>

        <main>
            <section className='banner'>
                <div className='txtBanner'>
                    <h1>
                        Seus Gift Cards Favoritos em um Só Lugar
                    </h1>
                    <p>
                        Compre de forma rápida, segura e receba instantaneamente por e-mail
                    </p>
                </div>
                <div className='botaoBanner'>
                    <button className='btnOfertas'>
                        Ver ofertas
                    </button>
                    <button className='explorarCate'>
                        Explorar Categorias
                    </button>
                </div>
            </section>
            <section>
                <div className='textCategoria'>
                    <h1>
                        Categorias Populares
                    </h1>
                    <p>
                        Encontre o gift card perfeito para você
                    </p>
                </div>
                <section>
                    <div className="cards-grid">
                        {categorias.map((cat) => (
                        <Cards 
                            key={cat.id}
                            icone={cat.icone}
                            titulo={cat.titulo}
                            descricao={cat.descricao}
                            link={cat.link}
                        />
                        ))}
                    </div>
                </section>
            </section>

            <div className="catalogo-wrapper">
                <h1>🎮 Catálogo de Produtos</h1>
                
                <div className="lista-de-cards">
                    {productIds.map((id) => (
                        
                        <Link 
                            key={id} 
                            to={`/produto/${id}`} 
                            className="card-produto-link"
                        >
                            <div className="produto-item">
                                <img src={PRODUTOS[id].imagemUrl} alt={PRODUTOS[id].nome} />
                                <h3>{PRODUTOS[id].nome}</h3>
                                <p>Avaliação: {PRODUTOS[id].avaliacao}</p>
                                <span className="ver-detalhes">Clique para ver os detalhes »</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    </div>
  )
}

export default PaginaPrincipal