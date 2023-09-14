import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBills, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import High from "./high";

function Amount() {
    const [saldo, setSaldo] = useState(0);

    return (
        <div id="amount">
            <High />

            <div id="info">
                <h2>Saldo PicPay</h2>
                <h1>R$ {saldo}</h1>
            </div>

            <div id="options">

                <Link to='/pix' className="option" id="pix" style={{ textDecoration: 'none' }} >
                    <FontAwesomeIcon icon={faMoneyBillTransfer} /> Pix
                </Link>
                
                <Link to='/depositar' className="option" id="deposito" style={{ textDecoration: 'none' }} >
                    <FontAwesomeIcon icon={faMoneyBills} /> Depositar
                </Link>
            </div>
        </div>
    )
}

export default Amount;