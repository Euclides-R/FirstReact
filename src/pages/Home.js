import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div class="content">
        <div>
          <img src="/img/bro-satisfaction.svg" />
        </div>
        <div>
          <h3>Bem vindo</h3>
          <p>
            A empresa FolhaCPA é uma plataforma para realizar pesquisas de
            satisfação entre alunos de graduação, pós graduação, mestrado e
            doutorado
          </p>

          <Link className="info-link" to="/details">Clique para obter mais informações</Link>

          <p>Sua opinião é de suma importância</p>

          <div >
            <Link href="#"></Link>
            <Link href="#"></Link>
          </div>
        </div>
      </div>
      <p>
        Que tal começar a responder algumas perguntas? baixe nosso app
        <Link to="#"> clicando aqui</Link>
      </p>
    </div>
  )
}
