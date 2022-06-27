import styled from 'styled-components'

const Container = styled.div({
    height:'30px',
    backgroundColor:'teal',
    color:'white ',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    fontSize:'14px'
})

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Order Over $50   
    </Container>
  )
}

export default Announcement
