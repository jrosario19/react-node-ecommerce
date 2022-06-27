 import styled from 'styled-components'
 import { ArrowLeftOutlined, ArrowRightOutlined  } from '@material-ui/icons'

 const Container=styled.div({
    width:'100%',
    height:'100vh',
    display:'flex',
    position:'relative'
 })

 const Arrow = styled.div((props)=>({
    width:'50px',
    height:'50px',
    backgroundColor:'#fff7f7',
    borderRadius:'50%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:'0',
    bottom:'0',
    left:props.direction==="left" && "10px",
    right:props.direction==="right" && "10px",
    margin:'auto',
    cursor:'pointer',
    opacity:'0.5'
 }))

 const Wrapper = styled.div({
     height:'100%'
 })

 const Slide = styled.div({
    display:'flex',
    alignItems:'center',
    width:'100vw',
    height:'100vh'    
})


 const ImgContainer = styled.div({
    flex:'1',
    height:'100%'
 })

 const Image = styled.img({
    height:'80%'
})

 const InfoContainer = styled.div({
    flex:'1',
    padding:'50px'
})



 
 const Slider = () => {
   return (
     <Container>
       <Arrow direction="left">
            <ArrowLeftOutlined />
       </Arrow>
       <Wrapper>
        <Slide>
        <ImgContainer>
            <Image src="https://previews.123rf.com/images/piksel/piksel1104/piksel110400066/9356939-cute-girl.jpg" />
        </ImgContainer>
        <InfoContainer></InfoContainer>
        </Slide>
       </Wrapper>
       <Arrow direction="right">
            <ArrowRightOutlined />
       </Arrow>
     </Container>
   )
 }
 
 export default Slider
 