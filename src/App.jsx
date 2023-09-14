import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import './App.css'
import Amount from './layouts/amount';
import Deposit from './painels/deposit';


function App() {

  return (
    <Router>
      <Amount />

      <Routes>
        <Route path='/depositar' element={<Deposit />}/>
        <Route  />
      </Routes>
    </Router>
  )
}

export default App
