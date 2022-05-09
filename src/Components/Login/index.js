import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"

import { ThreeDots } from  'react-loader-spinner'

import TokenContext from '../../Contexts/TokenContext.js'
import RegistrosContext from "../../Contexts/RegistrosContext.js";

export default function Login() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });
  const [disabled, setDisabled] = useState(false)
  const { setToken } = useContext(TokenContext)
  const { setRegistros } = useContext(RegistrosContext)

  useEffect(() => {
    const config = JSON.parse(localStorage.getItem('config'))
    if(!config) return navigate("/")

    async function buscarRegistros() {
      try {
        const registrosPromise = await axios.get('http://localhost:5000/buscar-registros', config)
        setRegistros(registrosPromise.data)
        navigate("/inicio")
      } catch(e) {
        console.log(e)
      }
    }
    buscarRegistros()
  }, [navigate, setRegistros]);

  return (
    <Container>
      <Titulo>MyWallet</Titulo>
      <Form onSubmit={logar}>
        <Input
          placeholder="E-mail"
          value={usuario.email}
          onChange={(e) => {
            setUsuario({ ...usuario, email: e.target.value });
          }}
          type="email"
        ></Input>
        <Input
          placeholder="Senha"
          value={usuario.senha}
          onChange={(e) => {
            setUsuario({ ...usuario, senha: e.target.value });
          }}
          type="password"
        ></Input>
        <CarregaoBotao />
      </Form>
      <Link to="/cadastro">
        <Botao className="cadastre">Primeira vez? Cadastre-se!</Botao>
      </Link>
    </Container>
  );

  async function logar(e) {
    e.preventDefault();
    setDisabled(true)
    try {
      const tokenPromise = await axios.post('http://localhost:5000/logar', usuario)
      setToken(tokenPromise.data)
      const config = {
        headers: {
          Authorization: `Bearer ${tokenPromise.data}`,
        },
      };

      const registrosPromise = await axios.get('http://localhost:5000/buscar-registros', config)
      setRegistros(registrosPromise.data)

      const configStorage = JSON.stringify(config)
      localStorage.setItem("config", configStorage)
      setDisabled(false)
      navigate("/inicio")
    } catch(e) {
      window.alert("Usuario ou senha não encontrados")
      setDisabled(false)
      console.log(e)
    }
  }

  function CarregaoBotao() {
    if (disabled === false) {
      return (
        <Botao>Entrar</Botao>
      )
    }
    return (
      <Botao disabled><ThreeDots color="#FFFFFF" height={80} width={80} /></Botao>
    )
  }

}

const Container = styled.div`
  background: #8c11be;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;

  .cadastre {
    background: #8c11be;
    margin: 0;
    padding-top: 15px;
  }
`;

const Titulo = styled.div`
  font-family: "Saira Stencil One";
  margin-bottom: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: #ffffff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
`;

const Input = styled.input`
  margin-top: 10px;
  padding-left: 10px;
  width: 100%;
  max-width: 326px;
  height: 58px;
  background: #ffffff;
  border: 0;
  border-radius: 5px;
  position: relative;

  :focus::placeholder {
    color: transparent;
  }
`;

const Botao = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  max-width: 326px;
  border: 0;
  background: #a328d6;
  height: 46px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  border-radius: 5px;
`;
