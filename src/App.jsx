import "./css/style.css";
import React from "react";

import ButtonInformation from "./components/ButtonInformations";
import ButtonCadLogin from "./components/ButtonCadLog";
import Imagens from "./components/imagens";

export default (props) => (
  <div>
    <header className="menu">
      <div className="logo">
        <h1>
          folha<b>cpa</b>
        </h1>
        <p>Pesquisa de Satisfação entre alunos</p>
      </div>
    </header>
    <section class="corpo__apresentation">
      <div class="corpo__principal">
        <div class="corpo__principal--up">
          <Imagens></Imagens>

          <div class="corpo__principal--text">
            <h3>Bem vindo</h3>
            <p>
              A empresa FolhaCPA é uma plataforma para realizar pesquisas de
              satisfação entre alunos de graduação, pós graduação, mestrado e
              doutorado
            </p>
            <br />
            <ButtonInformation title="Clique aqui para obter mais informações"></ButtonInformation>
            <br />
            <p>Sua opinião é de suma importância</p>

            <div class="div__login">
              <ButtonCadLogin title=" Criar Conta"></ButtonCadLogin>
              <ButtonCadLogin title=" Login"></ButtonCadLogin>
            </div>
          </div>
        </div>
        <p class="corpo__principal--downtext">
          Que tal começar a responder algumas perguntas? baixe nosso app
          <a href="#"> clicando aqui</a>
        </p>
      </div>
    </section>
  </div>
);
