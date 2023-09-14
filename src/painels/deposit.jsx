import React, { useState, useEffect } from "react";

function Deposit() {
    const [saldo, setSaldo] = useState(0);
    
    return (
        <div>
            <h2>{saldo}</h2>
            <input type="number" placeholder="Valor do deposito" />
            <button onClick={()=> setSaldo(saldo + 10)}>Deposit</button>
        </div>
    )
}

export default Deposit;