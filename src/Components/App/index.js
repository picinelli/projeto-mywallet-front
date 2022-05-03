import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../Login'
import Cadastro from '../Cadastro'
import Inicio from '../Inicio'
import NovaEntrada from '../NovaEntrada'
import NovaSaida from '../NovaSaida'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/inicio" element={<Inicio />}/>
        <Route path="/nova-entrada" element={<NovaEntrada />}/>
        <Route path="/nova-saida" element={<NovaSaida />}/>
      </Routes>
    </BrowserRouter>
  )
}