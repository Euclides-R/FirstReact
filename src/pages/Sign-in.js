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
                  name="nome"
                  placeholder="Digite seu nome"
                ></input>
              </div>
              <div className="form-box radius-form">
                <p>Nome:</p>
                <input
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome"
                ></input>
              </div>
              <div className="form-box radius-form">
                <p>Nome:</p>
                <input
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome"
                ></input>
              </div>
              <div className="form-box radius-form">
                <p>Nome:</p>
                <input
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome"
                ></input>
              </div>
              <div className="form-box radius-form">
                <p>Nome:</p>
                <input
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome"
                ></input>
              </div>
              <div className="form-box radius-form">
                <p>Nome:</p>
                <input
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
