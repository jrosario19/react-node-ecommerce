import { green } from '@material-ui/core/colors'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { login } from '../redux/apiCall'

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
    backgroundColor:'white',
    '@media(max-width: 380px)': {
      width:'75%'
    }
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
    ":disabled":{
      color: 'green',
      cursor:'not-allowed'
  }
})

const Link = styled.a({
margin:'5px 0px',
fontSize:'12px',
textDecoration:'underline',
cursor:'pointer'
})

const Error = styled.span({
  color:'red'
})

const Login = () => {
  const [username, setUsername]= useState("");
  const [password, setPassword]= useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state)=>state.user)

  const handleClick = (e)=>{
    e.preventDefault();
    login(dispatch, {username, password})
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder='UserName' onChange={(e=>setUsername(e.target.value))}/>
            <Input placeholder='PassWord' type="password" onChange={(e=>setPassword(e.target.value))}/>
            <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
            {error && <Error>Something went wrong...</Error>}
            <Link>DO NOT REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
