import React from 'react';
import { Button, Input } from '../components';

export default function SingUp() {
  return (
    <div className="singup">
      <div className="content">
        <div className="box-orange radius-form">
          <div className="box-black radius-form">
            <div className="img-signup">
              <img src="/img/logo-cpa.png" />
            </div>
            <h1>Cadastre-se</h1>
            <form className="form-signup">
              <div className="form-box radius-form">
                <p>Nome:</p>
                <Input
                  type="text"
                  placeHolder="Digite seu nome"
                ></Input>
              </div>
              <div className="form-box radius-form">
                <p>Sobrenome:</p>
                <Input
                  type="text"
                  placeHolder="Digite seu sobrenome"
                ></Input>
              </div>
              <div className="form-box radius-form">
                <p>Email:</p>
                <Input
                  type="email"
                  placeHolder="Digite seu email"
                ></Input>
              </div>
              <div className="form-box radius-form">
                <p>Período:</p>
                <Input
                  type="text"
                  placeHolder="Digite seu nome"
                ></Input>
              </div>
              <div className="form-box radius-form">
                <p>Senha:</p>
                <Input
                  type="password"
                  placeHolder="Digite sua senha"
                ></Input>
              </div>
              <div className="form-box radius-form">
                <p>Repetir senha:</p>
                <Input
                  type="password"
                  placeHolder="Digite novamente sua senha"
                ></Input>
              </div>

              <Button className="btn-cad radius-form form-box" kind="secondary">
                Cadastrar-se
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
