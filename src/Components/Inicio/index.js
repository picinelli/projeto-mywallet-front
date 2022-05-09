import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import dayjs from "dayjs";
import axios from 'axios'

import { ThreeDots } from  'react-loader-spinner'
import iconeSair from "../../assets/images/icone-sair.svg";
import iconeMais from "../../assets/images/icone-mais.svg";
import iconeMenos from "../../assets/images/icone-menos.svg";

import RegistrosContext from "../../Contexts/RegistrosContext.js";

export default function Inicio() {
  const { registros, setRegistros } = useContext(RegistrosContext);
  const  [nomeUsuario, setNomeUsuario]  = useState("")
  const [disabled, setDisabled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const config = JSON.parse(localStorage.getItem('config'))
    if(!config) return navigate("/")
    setDisabled(true)
    async function buscarRegistros() {
      try {
        const registrosPromise = await axios.get('https://projeto-mywallet-back.herokuapp.com/buscar-registros', config)
        const buscarNome = await axios.get('https://projeto-mywallet-back.herokuapp.com/buscar-nome', config)
        setRegistros(registrosPromise.data)
        setNomeUsuario(buscarNome.data)
        setDisabled(false)
      } catch(e) {
        setDisabled(false)
        console.log(e)
      }
    }
    buscarRegistros()
  }, [navigate, setRegistros, setNomeUsuario]);

  return (
    <Container>
      <Wrapper>
        <Topo>
          <CarregarUsuario />
          <Link to={"/"}>
            <img src={iconeSair} alt="icone-sair" onClick={Logout}></img>
          </Link>
        </Topo>
        <CarregarConteudo />
        <OpcoesWrapper>
          <Link to={"/nova-entrada"}>
            <Opcao>
              <img src={iconeMais} alt="icone-mais"></img>
              <p>
                Nova <br />
                Entrada
              </p>
            </Opcao>
          </Link>
          <Link to={"/nova-saida"}>
            <Opcao>
              <img src={iconeMenos} alt="icone-menos"></img>
              <p>
                Nova <br />
                Saída
              </p>
            </Opcao>
          </Link>
        </OpcoesWrapper>
      </Wrapper>
    </Container>
  );

  async function deletar(date) {
    const config = JSON.parse(localStorage.getItem('config'))
    const desejoDeletar = window.confirm("Deseja mesmo apagar esse registro?")
    if(!desejoDeletar) {
      return
    }
    try {
      await axios.delete(`https://projeto-mywallet-back.herokuapp.com/deletar-registro/${date}`, config)
      const registrosPromise = await axios.get('https://projeto-mywallet-back.herokuapp.com/buscar-registros', config)
      setRegistros(registrosPromise.data)
    } catch(e) {
      window.alert('Erro ao deletar o registro.')
    }
  }

  function CarregarConteudo() {
    if (!registros.length) {
      return (
        <ConteudoVazio>
          <p>Não há registros de entrada ou saída</p>
        </ConteudoVazio>
      );
    } else if (disabled === true) {
      return (
        <ConteudoVazio>
          <ThreeDots color="#000000" height={120} width={120} />
        </ConteudoVazio>
      )
    } else {
      return (
        <>
          <Conteudo>
            {registros.map((registro) => {
              let { date, evento, value } = registro;
              return (
                <WrapperMovimentacao key={date}>
                  <Separador>
                    <Data>{dayjs(date).format("DD/MM")}</Data>
                    <Movimentacao onClick={() => {navegarEdicao(value, date, evento)}}>{evento}</Movimentacao>
                  </Separador>
                  <RetornarValor value={value}/>
                  <Deletar onClick={() => {deletar(date)}}>x</Deletar>
                </WrapperMovimentacao>
              );
            })}
          </Conteudo>
          <Saldo>
            <SaldoTexto>SALDO</SaldoTexto>
            <CalcularSaldo />
          </Saldo>
        </>
      );
    }
  }

  function CarregarUsuario() {
    if (disabled === true) {
      return (
        <ThreeDots color="#FFFFFF" height={40} width={40} />
      )
    }
    return (
      <h1>Olá, {nomeUsuario}</h1>
    )
  }

  function navegarEdicao(value, date, evento) {
    if(value >= 0) navigate("/atualizar-entrada", {state: {date, evento, value}})
    if(value < 0) navigate("/atualizar-saida", {state: {date, evento, value}})
  }

  function RetornarValor(props) {
    let value = props.value
    value = parseInt(value)
    if(value >= 0) {
      return (
        <Valor className="verde">{value}</Valor>
      )
    }
    value = value.toString().slice(1, value.length)
    return <Valor className="vermelho">{parseInt(value)}</Valor>
  }

  function CalcularSaldo() {
    const saldo = registros.reduce((saldo, registro) => saldo + registro.value, 0)
    if(saldo >= 0) {
      return (
        <SaldoValor className="verde">{saldo}</SaldoValor>
      )
    } else {
      return (
        <SaldoValor className="vermelho">{saldo}</SaldoValor>
      )
    }
  }

  function Logout() {
    localStorage.removeItem('config')
    navigate("/")
  }
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
  padding: 10px 0 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const WrapperMovimentacao = styled.div`

  padding: 15px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Separador = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
  max-width: 180px;
  word-wrap: break-word;
`;

const Valor = styled.p`
  font-family: "Raleway";
  font-size: 16px;
`;

const Deletar = styled.p`
  font-family: 'Raleway';
  font-size: 16px;
  color: #C6C6C6;
  padding-left: 10px;
`

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
`;

const OpcoesWrapper = styled.div`
  padding-top: 15px;

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
