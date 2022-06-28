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
    width:'25%',
    backgroundColor:'white '
})

const Title = styled.h1({
    fontSize:'24px',
    fontWeight: '300',
    
})
const Form = styled.form({
    display: 'flex',
    flexDirection:'column'
})


const Input = styled.input({
    flex:'1',
    minWidth:'40%',
    margin:'10px 0px',
    padding:'10px'
})

  
const Button = styled.button ({
    width:'40%',
    border:'none',
    padding:'15px 20px',
    backgroundColor:'teal',
    color:'white',
    cursor:'pointer',
    marginBottom: '10px',
    
})

const Link = styled.a({
margin:'5px 0px',
fontSize:'12px',
textDecoration:'underline',
cursor:'pointer'
})

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder='UserName'/>
            <Input placeholder='PassWord'/>
            <Button>LOGIN</Button>
            <Link>DO NOT REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
