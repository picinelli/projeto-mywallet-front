import styled from 'styled-components'

import iconeSair from '../../assets/images/icone-sair.svg'
import iconeMais from '../../assets/images/icone-mais.svg'
import iconeMenos from '../../assets/images/icone-menos.svg'

export default function Inicio() {
  return (
    <Container>
      <Wrapper>
        <Topo>
          <h1>Olá, Fulano</h1>
          <img src={iconeSair}></img>
        </Topo>
        <Conteudo>
          <p>Não há registros de entrada ou saída</p>
        </Conteudo>
        <OpcoesWrapper>
          <Opcao>
            <img src={iconeMais}></img>
            <p>Nova <br/>Entrada</p>
          </Opcao>
          <Opcao>
            <img src={iconeMenos}></img>
            <p>Nova <br/>Saída</p>
          </Opcao>
        </OpcoesWrapper>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background: #8C11BE;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  padding: 20px;
  max-width: 375px;
  width: 100%;
`

const Topo = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Raleway';
  font-weight: 700;
  font-size: 26px;
  color: #FFFFFF;
`

const Conteudo = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  height: 450px;
  border-radius: 5px;
  padding: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    color: #868686;
    text-align: center;
  }
`

const OpcoesWrapper = styled.div`
  padding-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Opcao = styled.div`
  position: relative;
  width: 160px;
  height: 114px;
  background: #A328D6;
  border-radius: 5px;
  font-family: 'Raleway';
  font-weight: 700;
  font-size: 17px;
  color: #FFFFFF;

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
`