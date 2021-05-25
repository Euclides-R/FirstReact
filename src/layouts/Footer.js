import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer-text">
        Que tal começar a responder algumas perguntas? baixe nosso app
        <Link className="footer-link" to="#">
          {' '}
          clicando aqui
        </Link>
      </p>
    </div>
  );
}
