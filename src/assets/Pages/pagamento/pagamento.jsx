import React, { useState } from 'react';
import './pagamento.css';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import { useLocation } from 'react-router-dom';

const Pagamento = () => {

  const location = useLocation();
  const { produto, valorSelecionado } = location.state || {};

  const [metodo, setMetodo] = useState(null);
  const [finalizado, setFinalizado] = useState(false);

  if (!produto) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div className="layout-wrapper">
      <header>
        <Cabecalho />
      </header>

      <div className="layout">
        <div className="col-esquerda">
          <h1 className="titulo">Finalizar Compra</h1>
          <small>Complete sua compra de forma segura</small>

          {/* info compra */}
          <div className="info-compra">
            <h3>Informações de compra</h3>
            <p>e-mail para receber o código</p>

            <input type="text" placeholder="seu@email.com" />
            <small>O código será enviado para este e-mail</small>
          </div>

          {/* método de pagamento */}
          <div className="metodo-pagamento">
            <h4>Método de Pagamento</h4>

            <div className="group-opcao">
              <label className="opcao">
                <input type="radio" name="pay" onChange={() => setMetodo('cartao')} />
                <span className="box"></span>
                <span className="box-info">Cartão</span>
                <small>Visa, Mastercard, Amex</small>
              </label>

              <label className="opcao">
                <input type="radio" name="pay" onChange={() => setMetodo('pix')} />
                <span className="box"></span>
                <span className="box-info">PIX</span>
                <small>Pagamento instantâneo</small>
              </label>

              <label className="opcao">
                <input type="radio" name="pay" onChange={() => setMetodo('boleto')} />
                <span className="box"></span>
                <span className="box-info">Boleto Bancário</span>
                <small>Vence em 3 dias úteis</small>
              </label>
            </div>

            {/* Cartão */}
            {metodo === 'cartao' && (
              <div className="card-formulario">
                <label>Número do Cartão</label>
                <input type="text" placeholder="0000 0000 0000 0000" />

                <div className="card-info">
                  <div className="campo">
                    <label>Validade</label>
                    <input type="text" placeholder="MM/AA" />
                  </div>

                  <div className="campo">
                    <label>CVV</label>
                    <input type="text" placeholder="123" />
                  </div>
                </div>

                <label>Nome no Cartão</label>
                <input type="text" placeholder="Nome como está no cartão" />
              </div>
            )}

            {/* PIX */}
            {metodo === 'pix' && (
              <div className="pix-box">
                <h4>Escaneie o QR Code para pagar</h4>
                <img src="/images/qr-code.jpg" alt="qr" />
                <small>Pagamento instantâneo</small>
              </div>
            )}

            {/* Boleto */}
            {metodo === 'boleto' && (
              <div className="boleto-box">
                <h4>Boleto Bancário</h4>

                {!finalizado && (
                  <small>O boleto será disponibilizado após finalizar</small>
                )}

                {finalizado && (
                  <div className="boleto-gerado">
                    <img src="/images/boleto.png" alt="boleto" />
                    <small>Seu boleto foi gerado!</small>
                  </div>
                )}
              </div>
            )}

            {/* Resumo do produto */}
            <div className="item">
              <img src={produto.imagemUrl} alt="produto" />

              <div className="info">
                <h4>{produto.nome}</h4>
                <span className="preco">{valorSelecionado}</span>
                <small>Qtd: 1</small>
              </div>
            </div>

            <hr />

            <div className="linha">
              <span>Subtotal</span>
              <span>{valorSelecionado}</span>
            </div>

            <div className="linha total">
              <span>Total</span>
              <span className="valor-total">{valorSelecionado}</span>
            </div>

            <div className="safe">
              <strong>Compra 100% Segura</strong>
              <small>Seus dados estão protegidos</small>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <Rodape />
      </footer>
    </div>
  );
};

export default Pagamento;
