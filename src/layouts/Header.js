import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header-menu">
      <div className="logo">
        <img src="/img/logo-cpa.png" alt="Logo" />
        <p>Pesquisa de Satisfação entre alunos</p>
      </div>

      <nav class="navigation">
        <Link to="/">
          Home
        </Link>
        <Link to="/cadastro">
          Cadastro
        </Link>
      </nav>
    </header>
  )
}
