import "./App.css";
import React from "react";

import First from "./components/First";
// import Parameters from "./components/Parameters";
// import Sons from "./components/Sons";
import Card from "./components/layouts/Card";

export default (props) => (
  <div>
    <Card titulo="Primeiro Componente">
      <First />
    </Card>
    <Card titulo="Exercício X">Conteúdo</Card>
    {/* <Sons>
        <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Neto</li>
            <li>Vezinha</li>
        </ul>
        </Sons> */}
    {/* <First />
        <Parameters title="Esse é o título" subtitle="Esse é o SubTítulo" /> */}
  </div>
);
