import { Send } from '@material-ui/icons'
import styled from 'styled-components'

const Container= styled.div({
     height:'60vh',
     backgroundColor:'#fcf5f5',
     display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    
         
})
const Title = styled.h1({
    fontSize:'70px',
    marginBottom: "20px",
     
})

const Desc= styled.div({
    fontSize:'24px',
    fontWeight:'300',
    marginBottom: '20px',
})

const InputContainer= styled.div({
    width: '50%',
    height: '40px',
    backgroundColor:'white',
    display: 'flex',
    justifyContent: 'space-between',
    border:'1px solid lightgray  '
})

const Input= styled.input({
    border:'none',
    flex:'8',
    paddingLeft: '20px',
    
})

const Button= styled.button ({
    flex:'1',
    border:'none',
    backgroundColor:'teal',
    color:'white'
})

const Newsletter = () => {
  return (
    <Container>
    <Title>Newsletter</Title>
    <Desc>Get timely updates from your favorite products.</Desc>
    <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
            <Send/>
        </Button>
    </InputContainer>
    </Container>
  )
}

export default Newsletter
