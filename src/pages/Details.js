import React from 'react';
import { Link } from 'react-router-dom';

export default function Details() {
  return (
    <div className="details">
      <div className="content">
        <div className="info-questions">
          <div className="img-details">
            <img src="/img/cuate.svg" />
          </div>
          <div className="info-text">
            <p>
              A) NPS (Net Promoter Score): Avaliado com valores numéricos entre
              1 e 10. Para o intervalo numérico entre 1 a 6 classificamos como
              Avaliação Detratora, entre os valores 7 e 8 como avaliação Neutra
              e entre os valores 9 e 10 como uma avaliação Promotora.
            </p>
            <ul className="info-options">
              <li>
                <button>1</button>
              </li>
              <li>
                <button>2</button>
              </li>
              <li>
                <button>3</button>
              </li>
              <li>
                <button>4</button>
              </li>
              <li>
                <button>5</button>
              </li>
              <li>
                <button>6</button>
              </li>
              <li>
                <button>7</button>
              </li>
              <li>
                <button>8</button>
              </li>
              <li>
                <button>9</button>
              </li>
              <li>
                <button>10</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="info-questions">
          <div className="info-text">
            <p>
              B) Multipla escolha : Opçoes multipla escolhas variam de 1 a 6
              sendo 1 para discordo totalmente e 6 para concordo totalmente ,
              essa opção pode ser anulada com duas opções extras :<br />
              1. não sei responser <br />
              2. não se aplica
            </p>
            <ul className="info-options">
              <li>
                <button>1</button>
              </li>
              <li>
                <button>2</button>
              </li>
              <li>
                <button>3</button>
              </li>
              <li>
                <button>4</button>
              </li>
              <li>
                <button>5</button>
              </li>
              <li>
                <button>Não sei responder</button>
              </li>
              <li>
                <button>Não se aplica</button>
              </li>
            </ul>
          </div>
          <div className="img-details">
            <img src="/img/pana.svg" />
          </div>
        </div>
        <div className="info-questions">
          <Link className="home-link link-div radius-form" to="/">
            ⬅ Página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
