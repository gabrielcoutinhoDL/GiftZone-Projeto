import React from 'react'
import './pagamento.css'
import Cabecalho from '../../components/cabecalho/cabecalho'
import Rodape from '../../components/rodape/rodape'
import { useLocation } from 'react-router-dom'


const pagamento = () => {
    

    const location = useLocation();
    const { produto, valorSelecionado } = location.state || {};

  return (
    <>

    <div className='layout-wrapper'>
        <header>
        <Cabecalho></Cabecalho>
        </header>

        <div className='layout'>

            <div className='col-esquerda'>
                <h1 className='titulo'>Finalizar Compra</h1>
                <small>Complete sua compra de forma segura</small>
                <div className='info-compra'>
                    <h3>Informações de compra</h3>
                    <p>e-mail para receber o código</p>
                    <input type="text" placeholder='seu@email.com'/>
                    <small>O codigo do gift card será enviado para este</small>
                </div>

                <div className='metodo-pagamento'>
                    <h4>Método de Pagamento</h4>

                    <div className='group-opcao'>
                        <label className='opcao'>
                            <input type="radio" name='pay' />
                            <span className='box'></span>
                            <span className='box-info'> Cartão</span>
                            <small>Visa, Mastercard, Amex</small>
                        </label>

                        <label className='opcao'>
                            <input type="radio" name='pay' />
                            <span className='box'></span>
                            <span className='box-info'> PIX</span>
                            <small>Pagamento instantâneo</small>
                        </label>

                        <label className='opcao'>
                            <input type="radio" name='pay' />
                            <span className='box'></span>
                            <span className='box-info'>Boleto Bancário</span>
                            <small>Vence em 3 dias úteis</small>
                        </label>
                    </div>

                    <div class="card-formulario">
                        <label>Número do Cartão</label>
                        <input type="text" placeholder="0000 0000 0000 0000"/>

                        <div class="card-info">
                            <div class="campo">
                                <label>Validade</label>
                                <input type="text" placeholder="MM/AA"/>
                            </div>

                            <div class="campo">
                                <label>CVV</label>
                                <input type="text" placeholder="123"/>
                            </div>
                        </div>

                        <label>Nome no Cartão</label>
                        <input type="text" placeholder="Nome como está no cartão" />
                    </div>
                </div>
            </div>

            <div class="resumo">
                <h3>Resumo do Pedido</h3>

                <div class="item">
                    
                    <img src={produto.imagemUrl}/>

                    <div class="info">
                        <h4>{produto.nome}</h4>
                        <span class="preco">{valorSelecionado}</span>
                        <small>Qtd: 1</small>
                    </div>
                </div>

                <hr />

                <div class="linha">
                    <span>Subtotal</span>
                    <span>{valorSelecionado}</span>
                </div>

                <div class="linha total">
                    <span>Total</span>
                    <span class="valor-total">{valorSelecionado}</span>
                </div>

                <button class="finalizar">
                    <span class="icon">✔</span>
                    Finalizar Compra
                </button>

                <div class="safe">
                    <strong>Compra 100% Segura</strong>
                    <small>Seus dados estão protegidos</small>
                </div>
            </div>

        </div>
        <footer>
            <Rodape></Rodape>
        </footer>
    </div>
    </>

    )
}

export default pagamento