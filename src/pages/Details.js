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
            <div className="info-options">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </div>
            <div className="info-options">
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
            </div>
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
            <div className="info-options">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </div>
            <div className="info-options">
              <p>Não sei responder</p>
              <p>Não se aplica</p>
            </div>
          </div>
          <div className="img-details">
            <img src="/img/pana.svg" />
          </div>
        </div>
        <div className="info-questions">
          <Link className="home-link" to="/Home">
            ⬅ Página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
