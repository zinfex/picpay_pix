import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import High from "./high";

import { FaPix } from 'react-icons/fa6';
import { BsCashCoin } from 'react-icons/bs';
import { GrTransaction } from 'react-icons/gr';

function Amount() {
  const [saldo, setSaldo] = useState(0);

  return (
    <div id="amount">
      <High />ㅤ
      
      <div id="info">
        <div id="saldo">
          <h2>Saldo PicPay</h2>
          <h1>R$ {saldo}</h1>
        </div>
      </div>

      <div id="options">
        <Link to="/pix" className="option" id="pix">
          <FaPix size={30} className="icone" /> <span>Pix</span>
        </Link>

        <Link to="/depositar" className="option" id="deposito">
          <BsCashCoin size={30} className="icone"/> <span>Depositar</span>
        </Link>

        <Link to="/transacoes" className="option" id="transacoes">
          <GrTransaction size={30} className="icone" style={{ filter: 'invert()' }}/> <span>Transações</span>
        </Link>
      </div>

    </div>
  );
}

export default Amount;
