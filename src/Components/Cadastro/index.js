import styled from 'styled-components'

export default function Cadastro() {
  return (
    <Container>
      <Titulo>MyWallet</Titulo>
      <Form>
        <Input placeholder="Nome"></Input>
        <Input placeholder="E-mail"></Input>
        <Input placeholder="Senha"></Input>
        <Input placeholder="Confirme a senha"></Input>
        <Botao>Cadastrar</Botao>
      </Form>
      <Botao className="logue">Já tem uma conta? Entre agora!</Botao>
    </Container>
  )
}

const Container = styled.div`
  background: #8C11BE;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;

  .logue {
    background: #8C11BE;
    margin: 0;
    padding-top: 15px;
  }
`

const Titulo = styled.div`
  font-family: 'Saira Stencil One';
  margin-bottom: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: #FFFFFF;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
`

const Input = styled.input`
  margin-top: 10px;
  padding-left: 10px;
  width: 100%;
  max-width: 326px;;
  height: 58px;
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