import React from 'react'
import './cabecalho.css'


const cabecalho = () => {
  return (
        <header>
            <div className='zonaLogo'>
                <div className='logoTipo'><h1>G</h1></div>
                <h2>GiftZone</h2>
            </div>
            <form>
                <input type="text" placeholder='Buscar Gift Cards...' className='pesquisaInput'/>
            </form>
            <nav className='navegacao'>
                <ul className='opcoes'>
                    <li><a href="">Categorias</a></li>
                    <li><a href="">Ofertas</a></li>
                    <li><a href="">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </li>
                </ul>
                <button className='botaoEntrar' >
                    <i className="fas fa-user fa-xs"></i>
                    Entrar
                </button>
            </nav>
        </header>
  )
}

export default cabecalho