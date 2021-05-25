import React from 'react';
import { Link } from 'react-router-dom';

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

          <Link className="info-link" to="/Details.js">
            Clique para obter mais informações
          </Link>

          <p>Sua opinião é de suma importância</p>

          <div className="register">
            <Link className="sing-in" href="#">
              Cadastre-se
            </Link>
            <Link href="#"></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
