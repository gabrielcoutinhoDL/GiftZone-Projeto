import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import "./login.css";
import {FaUser, FaEnvelope, FaLock} from "react-icons/fa";
import Rodape from '../../components/rodape/rodape'

const Login = () => {
  const navigate = useNavigate();
  const [modo, setModo] = useState("login")

  const [emailLogin, setEmailLogin] = useState("");
  const [senhaLogin, setSenhaLogin] = useState("");

  const [nomeC, setNomeC] = useState("");
  const [emailC, setEmailC] = useState("");
  const [senhaC, setSenhaC] = useState("");
  const [confirmaSenhaC, setConfirmaSenhaC] = useState("");

  const fazerLogin = (e) => {
    e.preventDefault();

    if (!emailLogin || !senhaLogin){
      alert ("Preencha todos os espaços!!")
      return;
    }

    // "cadastroData" = nome da chave (gaveta) onde será salvo
    // dados = objeto com as informações do usuário
    const dadosCadastro = JSON.parse(localStorage.getItem("Datacadastro"));

    if (!dadosCadastro){
      alert("USUARIO NÃO RECONHECIDO" + "FAÇA O SEU CADASTRO")
      return;
    }

    if(emailLogin !== dadosCadastro.email || senhaLogin !== dadosCadastro.senha){
      alert("Credenciais incorretas! ")
      return;
    }
    alert("BEM VINDO " + dadosCadastro.nome)
    navigate('/principal'); 
  };
  const fazerCadastro = (e) => {
    e.preventDefault();

      if (!nomeC || !emailC || !senhaC || !confirmaSenhaC) {
          alert("Preencha todos os campos!");
          return;
      }

      if (senhaC.length < 6) {
          alert("A senha deve ter no mínimo 6 caracteres!");
          return;
      }

      if (senhaC !== confirmaSenhaC) {
          alert("As senhas não coincidem!");
          return;
      }
      const dados = {
          nome: nomeC,
          email: emailC,
          senha: senhaC
      };

      localStorage.setItem("Datacadastro", JSON.stringify(dados));

      alert("Cadastro realizado com sucesso!");
      setModo("login");
      setNomeC(""); setEmailC(""); setSenhaC(""); setConfirmaSenhaC("");
  };

  return (

    <div className='login-container'>
        <div className='header-top'>
            <div className='logo'>
              <img src="images/GZ-GiftZone_Logo.png" alt="" />
            </div>
            <h1>Bem-vindo ao GiftZone</h1>
            <p>Entre ou crie sua conta para continuar</p>
        </div>

        <div className="tabs-area">
            <div className="tabs">
                <button 
                    className={modo === "login" ? "tab-active" : ""} onClick={() => setModo("login")}>
                    Login
                </button>

                <button 
                    className={modo === "cadastro" ? "tab-active" : ""} onClick={() => setModo("cadastro")}>
                    Cadastro
                </button>
            </div>
        </div>
        
        {/* opção de login */}
        {modo === "login" && (
        <form className='form-box' onSubmit={fazerLogin}>
            <div className='form-header-text'>
                <h2>Entrar na sua conta</h2>
                <p>Digite seu e-mail e senha para acessar </p>
            </div>

            <div className="inputs">
              <FaEnvelope className="icon" />
              <input type="email"  placeholder="Email"  value={emailLogin} onChange={(e)=>setEmailLogin(e.target.value)}/>
            </div>

            <div className="inputs">
              <FaLock className="icon" />
              <input type="password"  placeholder="Senha"  value={senhaLogin} onChange={(e)=>setSenhaLogin(e.target.value)}/>
            </div>

            <button className="btn-verde">Entrar</button>

            <p className="termos">
              Ao entrar, você concorda com nossos <br/>
              <span className='termos1'> Termos de Serviço e Política de Privacidade</span>
            </p>
        </form>
        )}

        {modo === "cadastro" && (
        <form className='form-box' onSubmit={fazerCadastro}>
            <div className='form-header-text'>
                <h2>Criar nova conta</h2>
                <p>Preencha os dados abaixo para se cadastrar</p>
            </div>

            <div className="inputs">
              <FaUser className="icon" />
              <input type="text"  placeholder="Nome Completo" value={nomeC} onChange={(e)=>setNomeC(e.target.value)}/>
            </div>

            <div className="inputs">
              <FaEnvelope className="icon" />
              <input type="email"  placeholder="Email" value={emailC} onChange={(e)=>setEmailC(e.target.value)}/>
            </div>

            <div className="inputs">
              <FaLock className="icon" />
              <input type="password"  placeholder="Senha (mínimo 6 caracteres)" value={senhaC} onChange={(e)=>setSenhaC(e.target.value)}/>
            </div>

            <div className="inputs">
              <FaLock className="icon" />
              <input type="password"  placeholder="Confirmar Senha" value={confirmaSenhaC} onChange={(e)=>setConfirmaSenhaC(e.target.value)}/>
            </div>

            <button className="btn-verde">Criar conta</button>
            <p className="termos">
              Ao criar uma conta você concorda com nossos <br/>
              <span className='termos1'> Termos de Serviço e Política de Privacidade</span>
            </p>
        </form>
      )}
    </div>
  )
}
export default Login;