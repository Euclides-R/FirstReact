import React from 'react';
import { Button } from '../components';

export default function Home() {
  return (
    <div className="home">
      <div class="content">
        <div className="img-home">
          <img src="/img/bro-satisfaction.svg" />
        </div>
        <div className="home-text">
          <h3>Bem vindo</h3>
          <p>
            A empresa FolhaCPA é uma plataforma para realizar pesquisas de
            satisfação entre alunos de graduação, pós graduação, mestrado e
            doutorado.
          </p>

          <Button className="info-link radius-form" kind="secondary" url="/details">
            Clique para obter mais informações
          </Button>

          <p>Sua opinião é de suma importância</p>

          <div className="register">
            <Button className="sign-up radius-form" kind="ghost" url="/sign-up">
              Cadastre-se
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
