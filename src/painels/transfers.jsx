import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

function Transfers() {
    return (
        <div id="transacoesPainel" className="painel">
            <Link to='/' style={{width: '50px'}}><IoChevronBackCircleOutline size={50} color="white" /></Link>
            Transações
        </div>
    )
}

export default Transfers;