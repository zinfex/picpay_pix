import React, { useState } from "react";
import { Link } from "react-router-dom";

function Deposit() {
    const [valor, setValor] = useState();
    
    return (
        <div id="depositarPainel" className="painel">
            <Link to='/' style={{width: '50px'}}><img src="../src/imgs/back.svg" style={{filter: 'invert()'}} /></Link>
            <h2>Depositar R${valor}</h2>
            <input type="number" value={valor} onChange={(e)=>setValor(e.target.value)} placeholder="Valor do deposito" />
            <button onClick={()=> setValor('')}>Depositar</button>
        </div>
    )
}

export default Deposit;