import styled from 'styled-components'

const Container = styled.div({
    width:'100vw',
    height:'100vh',
    background:'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://static.wixstatic.com/media/c25a6748f1ca44d9bc09c6705e5e6ed5.png/v1/fill/w_1200,h_800,al_c/c25a6748f1ca44d9bc09c6705e5e6ed5.png") center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize:'cover'    
})
 
const Wrapper = styled.div({
    padding:'20px',
    width:'40%',
    backgroundColor:'white '
})

const Title = styled.h1({
    fontSize:'24px',
    fontWeight: '300',
    
})
const Form = styled.form({
    display: 'flex',
    flexWrap:'wrap'
})


const Input = styled.input({
    flex:'1',
    minWidth:'40%',
    margin:'20px 10px 0px 0px',
    padding:'10px'
})

const Agreement = styled.span({
    fontSize:'12px',
    margin:'20px 0px' 
})

const Button = styled.button ({
    width:'40%',
    border:'none',
    padding:'15px 20px',
    backgroundColor:'teal',
    color:'white',
    cursor:'pointer'
})

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder='Name'/>
            <Input placeholder='Last Name'/>
            <Input placeholder='UserName'/>
            <Input placeholder='Email'/>
            <Input placeholder='PassWord'/>
            <Input placeholder='Confirm PassWord'/>
            <Agreement>
                By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
