import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Deposit() {
    const [saldo, setSaldo] = useState(0);
    
    return (
        <div id="depositarPainel" className="painel">
            <Link to='/' style={{width: '50px'}}><img src="../src/imgs/back.svg" style={{filter: 'invert()'}} /></Link>
            <h2>Depositar</h2>
            <h2>R${saldo}</h2>
            <input type="number" placeholder="Valor do deposito" />
            <button onClick={()=> setSaldo(0)}>Deposit</button>
        </div>
    )
}

export default Deposit;