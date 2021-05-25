import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header-menu">
      <div className="logo">
        <img src="/img/logo-cpa.png" alt="Logo" />
        <p>Pesquisa de Satisfação entre alunos</p>
      </div>

      <nav className="navigation">
        <img src="/img/home.png" />
        <Link className="navigation-link" to="/">
          Home
        </Link>
        <img src="/img/smart-phone.png" />
        <Link className="navigation-link" to="/downloadapp">
          Baixe o app
        </Link>
        <img src="/img/plus.svg" />
        <Link className="navigation-link" to="/cadastro">
          Cadastre-se
        </Link>
      </nav>
    </header>
  );
}
