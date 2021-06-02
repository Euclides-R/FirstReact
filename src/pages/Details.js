import React from 'react';
import { Button } from '../components';

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
                <Button>1</Button>
              </li>
              <li>
                <Button>2</Button>
              </li>
              <li>
                <Button>3</Button>
              </li>
              <li>
                <Button>4</Button>
              </li>
              <li>
                <Button>5</Button>
              </li>
              <li>
                <Button>6</Button>
              </li>
              <li>
                <Button>7</Button>
              </li>
              <li>
                <Button>8</Button>
              </li>
              <li>
                <Button>9</Button>
              </li>
              <li>
                <Button>10</Button>
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
                <Button>1</Button>
              </li>
              <li>
                <Button>2</Button>
              </li>
              <li>
                <Button>3</Button>
              </li>
              <li>
                <Button>4</Button>
              </li>
              <li>
                <Button>5</Button>
              </li>
              <li>
                <Button>Não sei responder</Button>
              </li>
              <li>
                <Button>Não se aplica</Button>
              </li>
            </ul>
          </div>
          <div className="img-details">
            <img src="/img/pana.svg" />
          </div>
        </div>
        <div className="info-questions">
          <Button className="home-link radius-form" kind="secondary" url="/">
            ⬅ Página inicial
          </Button>
        </div>
      </div>
    </div>
  );
}
