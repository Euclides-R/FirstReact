import React from 'react';
import { Link } from 'react-router-dom';

export default function SingIn() {
  return (
    <div className="singin">
      <div className="content">
        <div className="box-orange radius-form">
          <div className="box-black radius-form">
            <div className="img-signin">
              <img src="/img/logo-cpa.png" />
            </div>
            <h1>Cadastre-se</h1>
            <form className="form-signin">
              <div className="form-box radius-form">
                <p>Nome:</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                ></input>
              </div>
              <div className="form-box radius-form">
                <p>Sobrenome:</p>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Digite seu sobrenome"
                ></input>
              </div>
              <div className="form-box radius-form">
                <p>Email:</p>
                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu email"
                ></input>
              </div>
              <div className="form-box radius-form">
                <p>Período:</p>
                <input
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome"
                ></input>
              </div>
              <div className="form-box radius-form">
                <p>Senha:</p>
                <input
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                ></input>
              </div>
              <div className="form-box radius-form">
                <p>Mesma senha:</p>
                <input
                  type="password"
                  name="password"
                  placeholder="Digite novamente sua senha"
                ></input>
              </div>

              <button className="button-signin radius-form form-box">
                Cadastrar-se
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
