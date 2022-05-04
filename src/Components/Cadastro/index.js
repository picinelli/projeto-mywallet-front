import styled from "styled-components";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios'

export default function Cadastro() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
    confirme: "",
  });

  function cadastrar(e) {
    e.preventDefault();
    //mongodb://localhost:27017
    const promise = axios.post('http://localhost:5000/cadastrar', usuario)
    promise.then(() => {
      window.alert("Cadastrado com sucesso!");
      navigate("/")
    })
    promise.catch((err) => {
      if (err.response.status === 409) {
        window.alert("Email já está sendo utilizado")
      } else {
        window.alert("Ops! Alguma coisa deu errado!")
        console.log(err)
      }
    })
  }

  return (
    <Container>
      <Titulo>MyWallet</Titulo>
      <Form onSubmit={cadastrar}>
        <Input
          placeholder="Nome"
          value={usuario.nome}
          onChange={(e) => {
            setUsuario({ ...usuario, nome: e.target.value });
          }}
          type="text"
        ></Input>
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
        <Input
          placeholder="Confirme a senha"
          value={usuario.confirme}
          onChange={(e) => {
            setUsuario({ ...usuario, confirme: e.target.value });
          }}
          type="password"
        ></Input>
        <Botao>Cadastrar</Botao>
      </Form>
      <Link to="/">
        <Botao className="logue">Já tem uma conta? Entre agora!</Botao>
      </Link>
    </Container>
  );
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

  .logue {
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
