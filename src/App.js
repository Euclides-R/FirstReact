import "./css/style.css";
import React from "react";
import imgLogo from "./logoFolhacpa.png";
import imgIndex from "./img/broSatisfaction.svg";

<<<<<<< HEAD:src/App.js
import ButtonInformation from "./components/ButtonInformations";
import ButtonCadLogin from "./components/ButtonCadLog";
=======
import {
  ButtonInformation,
  ButtonCadLogin,
  Images 
} from "./components";
>>>>>>> cedc31c02c84cbb60d10d7da2502f12c9e5d3025:src/App.jsx

export default (props) => (
  <div>
    <header className="menu">
      <div className="logo">
        <img src={imgLogo} />
        <p>Pesquisa de Satisfação entre alunos</p>
      </div>
    </header>
    <section class="corpo__apresentation">
      <div class="corpo__principal">
        <div class="corpo__principal--up">
          <img src={imgIndex} />

          <div class="corpo__principal--text">
            <h3>Bem vindo</h3>
            <p>
              A empresa FolhaCPA é uma plataforma para realizar pesquisas de
              satisfação entre alunos de graduação, pós graduação, mestrado e
              doutorado
            </p>
            <br />
            <ButtonInformation title="Clique aqui para obter mais informações" link={`/link-tal/${variavel}`}></ButtonInformation>
            <br />
            <p>Sua opinião é de suma importância</p>

            <div class="div__login">
              <ButtonCadLogin title=" Criar Conta">
                <a href="#"></a>
              </ButtonCadLogin>
              <ButtonCadLogin title=" Login">
                <a href="#"></a>
              </ButtonCadLogin>
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
