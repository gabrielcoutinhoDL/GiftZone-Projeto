import React from "react";
import "./Anuncio.css";

export default function Anuncio() {
  return (
    <>
      <body>
        <div className="container-anuncio">
          <div className="img">
            <h1>CONTEÚDO SÓ PRA TESTAR</h1>
          </div>

          <div className="detalhes">
            <h2>Steam Gift Card</h2>
            <p>4.8 (1247)</p>
            <div className="valoresTitulo">
              <h3>Selecione o Valor</h3>
              <div className="valoresBtn">
                <button>R$ 25,00</button>
                <button>R$ 50,00</button>
                <button>R$ 100,00</button>
                <button>R$ 150,00</button>
              </div>
            </div>

            <div className="valorTotal">
              <div className="box-valorTotal">
                <h4>Valor Total</h4>
                <h1>R$ 100,00</h1>
              </div>
              <div className="buttonsCompra">
                <button>Adicionar ao Carrinho</button>
                <button>Comprar Agora</button>
              </div>
            </div>

            <div>
              <ul>
                <li>Entrega Instantânea</li>
                <li>100% Seguro</li>
                <li>Código por E-mail</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="informacao">
          <button>Descrição</button>
          <button>Como Usar</button>
          <button>Avaliações (1247)</button>

          <div className="card">
            <h3>
              Cartão presente da Steam para usar em qualquer jogo ou conteúdo
              disponível na plataforma. Código enviado instantaneamente após a
              compra.
            </h3>
          </div>
        </div>
      </body>
    </>
  );
}
