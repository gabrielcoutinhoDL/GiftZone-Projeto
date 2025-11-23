import React, { useState } from "react";
import "./login.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [modo, setModo] = useState("login");

  return (
    <div className="login-container">
      <div className="card">
        {/* adicionar logo depois */}
        <div className="logo">G</div>

        <h1>Bem-vindo ao GiftZone</h1>
        <p>Entre ou crie sua conta para continuar</p>

        <div className="tabs">
          <button
            className={modo === "login" ? "tab-active" : ""}
            onClick={() => setModo("login")}
          >
            Login
          </button>

          <button
            className={modo === "cadastro" ? "tab-active" : ""}
            onClick={() => setModo("cadastro")}
          >
            Cadastro
          </button>
        </div>
      </div>

      {/* opção de login */}
      {modo === "login" && (
        <form className="form">
          <div>
            <h2>Entrar na sua conta</h2>
            <p>Digite seu e-mail e senha para acessar </p>
          </div>

          <div className="inputs">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="inputs">
            <FaLock className="icon" />
            <input type="password" placeholder="Senha" />
          </div>

          <button className="btn-verde">Entrar</button>

          <p className="termos">
            Ao entrar, você concorda com nossos
            <span className="termos1">
              {" "}
              Termos de Serviço e Política de Privacidade
            </span>
          </p>
        </form>
      )}

      {/*  opção de cadastro */}
      {modo === "cadastro" && (
        <form className="form">
          <div>
            <h2>Criar nova conta</h2>
            <p>Preencha os dados abaixo para se cadastrar</p>
          </div>

          <div className="inputs">
            <FaUser className="icon" />
            <input type="text" placeholder="Nome Completo" />
          </div>

          <div className="inputs">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="inputs">
            <FaLock className="icon" />
            <input type="password" placeholder="Senha (mínimo 6 caracteres)" />
          </div>

          <div className="inputs">
            <FaLock className="icon" />
            <input type="password" placeholder="Confirmar Senha" />
          </div>

          <button className="btn-verde">Criar conta</button>

          <p className="termos">
            Ao criar uma conta, você concorda com nossos
            <span className="termos1">
              {" "}
              Termos de Serviço e Política de Privacidade
            </span>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
