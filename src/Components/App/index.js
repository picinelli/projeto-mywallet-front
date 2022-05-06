import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";

import TokenContext from '../../Contexts/TokenContext.js'
import RegistrosContext from '../../Contexts/RegistrosContext.js'

import Login from '../Login'
import Cadastro from '../Cadastro'
import Inicio from '../Inicio'
import NovaEntrada from '../NovaEntrada'
import NovaSaida from '../NovaSaida'

export default function App() {
  const [token, setToken] = useState({});
  const [registros, setRegistros] = useState({})

  return (
    <BrowserRouter>
      <TokenContext.Provider value={{token, setToken}}>
        <RegistrosContext.Provider value={{registros, setRegistros}}>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/inicio" element={<Inicio />}/>
            <Route path="/nova-entrada" element={<NovaEntrada />}/>
            <Route path="/nova-saida" element={<NovaSaida />}/>
          </Routes>
        </RegistrosContext.Provider>
      </TokenContext.Provider>
    </BrowserRouter>
  )
}