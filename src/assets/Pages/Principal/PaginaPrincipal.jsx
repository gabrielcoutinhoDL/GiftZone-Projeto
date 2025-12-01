import React from 'react'
import Cards from '../../components/cards/Cards'
import './PaginaPrincipal.css'
import { Link } from 'react-router-dom'
import { PRODUTOS } from '../../../data/produtosData'
import Cabecalho from '../../components/cabecalho/cabecalho'
import Rodape from '../../components/rodape/rodape'
import { MdOutlineStarPurple500 } from "react-icons/md";


const PaginaPrincipal = () => {
        const categorias = [
            {id: 1, icone: 'fa-gamepad',titulo: 'Games', descricao: '248 produtos', link: '/categoria'},
            {id: 2, icone: 'fa-tv', titulo: 'Streaming', descricao: '89 produtos', link: '/categoria'},
            {id: 3, icone: 'fa-mobile-alt', titulo: 'Apps', descricao: '156 produtos', link: '/categoria'},
            {id: 4, icone: 'fa-music', titulo: 'Música', descricao: '134 produtos', link: '/categoria'}
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
                    <button className='explorarCate' onClick={() => irPara('categorias')}>
                        Explorar Categorias
                    </button>
                </div>
            </section>
            <section>
                <div className='textCategoria' id='categorias'>
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

            <section>
                <div className='textCategoria' id='ofertas'>
                    <h1>
                        Catálogo de Produtos
                    </h1>
                    <p>
                        Os mais vendidos desta semana
                    </p>
                </div>
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
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                    </div>
                                    <div className="card-produto-info">
                                        <h3 className="card-produto-titulo">{PRODUTOS[id].nome}</h3>
                                        <p className="card-produto-avaliacao">
                                            <MdOutlineStarPurple500 size={22} />
                                            {PRODUTOS[id].avaliacao}
                                        </p>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </section>
            </section>

        </main>
        
        <footer>
                <Rodape></Rodape>
        </footer>
    </div>
    
  )
}

export default PaginaPrincipal