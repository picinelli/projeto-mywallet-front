import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import axios from 'axios'

import iconeSair from "../../assets/images/icone-sair.svg";
import iconeMais from "../../assets/images/icone-mais.svg";
import iconeMenos from "../../assets/images/icone-menos.svg";

import RegistrosContext from "../../Contexts/RegistrosContext.js";

export default function Inicio() {
  const { registros, setRegistros } = useContext(RegistrosContext);
  const navigate = useNavigate()

  useEffect(() => {
    const config = JSON.parse(localStorage.getItem('config'))
    if(!config) return navigate("/")

    async function buscarRegistros() {
      try {
        const registrosPromise = await axios.get('http://localhost:5000/buscar-registros', config)
        setRegistros(registrosPromise.data)
      } catch(e) {
        console.log(e)
      }
    }
    buscarRegistros()
  }, [navigate, setRegistros]);

  function CarregarConteudo() {
    if (!registros.length) {
      return (
        <ConteudoVazio>
          <p>Não há registros de entrada ou saída</p>
        </ConteudoVazio>
      );
    } else {
      return (
        <>
          <Conteudo>
            {registros.map((registro) => {
              const { date, evento, valor } = registro;
              return (
                <WrapperMovimentacao key={date + valor}>
                  <Separador>
                    <Data>{dayjs(date).format("DD/MM")}</Data>
                    <Movimentacao>{evento}</Movimentacao>
                  </Separador>
                  <Valor>{valor}</Valor>
                </WrapperMovimentacao>
              );
            })}
          </Conteudo>
          <Saldo>
            <SaldoTexto>SALDO</SaldoTexto>
            <SaldoValor>
              <CalcularSaldo />
            </SaldoValor>
          </Saldo>
        </>
      );
    }
  }

  function CalcularSaldo() {
    const saldo = registros.reduce((saldo, registro) => saldo + registro.valor, 0)
    if(saldo >= 0) {
      return 999
    } else {
      return 1
    }
  }

  return (
    <Container>
      <Wrapper>
        <Topo>
          <h1>Olá, Fulano</h1>
          <img src={iconeSair} alt="icone-sair"></img>
        </Topo>
        <CarregarConteudo />
        <OpcoesWrapper>
          <Opcao>
            <img src={iconeMais} alt="icone-mais"></img>
            <p>
              Nova <br />
              Entrada
            </p>
          </Opcao>
          <Opcao>
            <img src={iconeMenos} alt="icone-menos"></img>
            <p>
              Nova <br />
              Saída
            </p>
          </Opcao>
        </OpcoesWrapper>
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
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  max-width: 375px;
  width: 100%;
`;

const Topo = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Raleway";
  font-weight: 700;
  font-size: 26px;
  color: #ffffff;
`;

const ConteudoVazio = styled.div`
  width: 100%;
  background-color: #ffffff;
  height: 450px;
  border-radius: 5px;
  padding: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    color: #868686;
    text-align: center;
  }
`;

const Conteudo = styled.div`
  width: 100%;
  background-color: #ffffff;
  height: 450px;
  border-radius: 5px 5px 0 0;
  padding: 10px 10px 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const WrapperMovimentacao = styled.div`
  padding: 15px 15px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Separador = styled.div`
  display: flex;
  align-items: center;
`;

const Data = styled.p`
  font-family: "Raleway";
  font-size: 16px;
  color: #c6c6c6;
`;

const Movimentacao = styled.p`
  padding-left: 10px;
  font-family: "Raleway";
  font-size: 16px;
  color: #000000;
  display: block;
  width: 210px;
  word-wrap: break-word;
`;

const Valor = styled.p`
  font-family: "Raleway";
  font-size: 16px;
  color: #c70000;
`;

const Saldo = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  background-color: #ffffff;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 5px 5px;
`;

const SaldoTexto = styled.p`
  font-family: "Raleway";
  font-weight: 700;
  font-size: 17px;
  color: #000000;
`;

const SaldoValor = styled.p`
  font-family: "Raleway";
  font-size: 17px;
  color: #03ac00;
`;

const OpcoesWrapper = styled.div`
  padding-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Opcao = styled.div`
  position: relative;
  width: 160px;
  height: 114px;
  background: #a328d6;
  border-radius: 5px;
  font-family: "Raleway";
  font-weight: 700;
  font-size: 17px;
  color: #ffffff;

  img {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  p {
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
`;
