import React from 'react';
import { Button, InfoDown } from '../components';

export default function Details() {
  return (
    <div className="downapp">
      <div className="content">
        <InfoDown 
        title="Baixe o aplicativo e começe a responder" 
        text="Você pode responder uma categoria por Mês"
        ></InfoDown>
        <InfoDown
        title="Baixe o aplicativo e começe a responder"
        text="Você pode responde uma categoria por Mês"
        color="secondary"
        ></InfoDown>
        <Button
        className="down-link radius-form"
        kind="secondary"
        >FolhaCPA 📲</Button>
        <img src="/img/smart_phone.svg" />
      </div>
    </div>
  )}