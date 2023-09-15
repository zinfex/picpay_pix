import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import './App.css'
import Amount from './layouts/amount';
import Deposit from './painels/deposit';
import Pix from './painels/pix';
import Chat from './painels/chat';
import Transfers from './painels/transfers';

function App() {

  return (
    <Router>
      <Amount />

      <Routes>
        <Route path='/depositar' element={<Deposit />}/>
        <Route path='/pix' element={<Pix />}/>
        <Route path='/transacoes' element={<Transfers />}/>
        <Route path='/chat' element={<Chat />}/>
      </Routes>
    </Router>
  )
}

export default App
