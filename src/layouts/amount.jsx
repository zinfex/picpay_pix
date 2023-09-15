import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import High from "./high";

function Amount() {
  const [saldo, setSaldo] = useState(0);

  return (
    <div id="amount">
      <High />ㅤ
      <div id="info">
        <h2>Saldo PicPay</h2>
        <h1>R$ {saldo}</h1>
      </div>
      <div id="options">
        <Link to="/pix" className="option" id="pix">
          <img src="./src/imgs/pix.svg" /> <span>Pix</span>
        </Link>

        <Link to="/depositar" className="option" id="deposito">
          <img src="./src/imgs/deposit.svg" /> <span>Depositar</span>
        </Link>

        <Link to="/transacoes" className="option" id="transacoes">
          <img src="./src/imgs/transacoes.svg" /> <span>Transações</span>
        </Link>
      </div>
    </div>
  );
}

export default Amount;
