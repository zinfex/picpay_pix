import React, { useState } from "react";
import { Link } from "react-router-dom";

function Pix() {
    return (
        <div id="pixPainel" className="painel">
            <Link to='/' style={{width: '50px'}}><img src="../src/imgs/back.svg" style={{filter: 'invert()'}} /></Link>
            <h2>Fazer PIX</h2> 
            <p>Preencha os campos</p>
            <input type="number" placeholder="Chave pix"/>
            <input type="number" placeholder="Valor R$"/>
            <button>Concluir</button>
        </div>
    )
}

export default Pix;