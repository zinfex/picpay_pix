import React, { useState } from "react";
import { Link } from "react-router-dom";

function Transfers() {
    return (
        <div id="transacoesPainel" className="painel">
            <Link to='/' style={{width: '50px'}}><img src="../src/imgs/back.svg" style={{filter: 'invert()'}} /></Link>
            Transações
        </div>
    )
}

export default Transfers;