import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NovaSaida() {
  const navigate = useNavigate();
  const [novoRegistro, setNovoRegistro] = useState({
    evento: "",
    value: ""
  });

  async function adicionarRegistro(e) {
    e.preventDefault();
    const config = JSON.parse(localStorage.getItem("config"));

    try {
      await axios.post(
        "http://localhost:5000/nova-saida",
        novoRegistro,
        config
      );
      navigate("/inicio");
    } catch (e) {
      window.alert("Digite um valor negativo ou preencha a descrição");
      console.log(e);
    }
  }

  return (
    <Container>
      <Wrapper>
        <Titulo>Nova saída</Titulo>
        <Form
          onSubmit={(e) => {
            adicionarRegistro(e);
          }}
        >
          <Input
            placeholder="Valor"
            onChange={(e) => {
              setNovoRegistro({ ...novoRegistro, value: e.target.value });
            }}
            value={novoRegistro.value}
            type="number"
          ></Input>
          <Input
            placeholder="Descrição"
            value={novoRegistro.evento}
            onChange={(e) => {
              setNovoRegistro({ ...novoRegistro, evento: e.target.value });
            }}
            type="text"
          ></Input>
          <Botao>Salvar saída</Botao>
        </Form>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background: #8c11be;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  max-width: 375px;
  width: 100%;
`;

const Titulo = styled.h1`
  margin-bottom: 30px;
  font-family: "Raleway";
  font-weight: 700;
  font-size: 26px;
  color: #ffffff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
`;

const Input = styled.input`
  margin-top: 10px;
  padding-left: 10px;
  width: 100%;
  max-width: 326px;
  height: 58px;
  font-size: 20px;
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
