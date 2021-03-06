import styled from "styled-components";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditarEntrada() {
  const location = useLocation()
  const {value, date, evento} = location.state
  const [novoRegistro, setNovoRegistro] = useState({
    value: value,
    date: date,
    evento: evento.toString()
  });
  const navigate = useNavigate();

  useEffect(() => {
    const config = JSON.parse(localStorage.getItem("config"));
    if (!config) return navigate("/");
  }, [navigate]);

  async function alterarRegistro(e) {
    e.preventDefault();
    const config = JSON.parse(localStorage.getItem("config"));

    try {
      await axios.put(
        "https://projeto-mywallet-back.herokuapp.com/alterar-registro",
        novoRegistro,
        config
      );
      navigate("/inicio");
    } catch (e) {
      window.alert("Digite um valor positivo ou preencha a descrição");
      console.log(e);
    }
  }

  return (
    <Container>
      <Wrapper>
        <Titulo>Editar entrada</Titulo>
        <Form
          onSubmit={(e) => {
            alterarRegistro(e);
          }}
        >
          <Input
            placeholder="Valor"
            type="number"
            value={novoRegistro.value}
            onChange={(e) => {
              setNovoRegistro({
                ...novoRegistro,
                value: parseInt(e.target.value),
              });
            }}
          ></Input>
          <Input
            placeholder="Descrição"
            type="text"
            value={novoRegistro.evento}
            onChange={(e) => {
              setNovoRegistro({
                ...novoRegistro,
                evento: e.target.value,
              });
            }}
          ></Input>
          <Botao>Atualizar entrada</Botao>
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
