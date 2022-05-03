import styled from 'styled-components'

export default function NovaSaida() {
  return (
    <Container>
      <Wrapper>
        <Titulo>Nova saída</Titulo>
        <Form>
          <Input placeholder="Valor"></Input>
          <Input placeholder="Descrição"></Input>
          <Botao>Salvar saída</Botao>
        </Form>
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
`

const Wrapper = styled.div`
  padding: 20px;
  max-width: 375px;
  width: 100%;
`

const Titulo = styled.h1`
  margin-bottom: 30px;
  font-family: 'Raleway';
  font-weight: 700;
  font-size: 26px;
  color: #FFFFFF;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
`

const Input = styled.input`
  margin-top: 10px;
  padding-left: 10px;
  width: 100%;
  max-width: 326px;;
  height: 58px;
  font-size: 20px;
  background: #FFFFFF;
  border: 0;
  border-radius: 5px;
  position: relative;

  :focus::placeholder {
  color: transparent;
  }
`

const Botao = styled.button`
  margin-top: 10px;
  width: 100%;
  max-width: 326px;
  border: 0;
  background: #A328D6;
  height: 46px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
  border-radius: 5px;
`