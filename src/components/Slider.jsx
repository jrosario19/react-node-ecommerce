import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined  } from '@material-ui/icons'
import { useState } from 'react'
import { sliderItems } from '../data'

 const Container=styled.div({
    width:'100%',
    height:'100vh',
    display:'flex',
    position:'relative',
    overflow:'hidden',
    '@media(max-width: 380px)': {
        display:'none'
      }
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
    opacity:'0.5',
    zIndex:'2'
 }))

 const Wrapper = styled.div((props)=>({
     height:'100%',
     display:'flex',
     transform: `translateX(${props.slideIndex * -100}vw)`,
     transition: 'all 1.5s ease'
 }))

 const Slide = styled.div((props)=>({
    display:'flex',
    alignItems:'center',
    width:'100vw',
    height:'100vh',
    backgroundColor:props.bg
}))


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

const Title = styled.h1({
    fontSize:'70px'
})

const Desc = styled.p({
    margin:'50px 0px',
    fontSize:'20px',
    fontWeight:'500',
    letterSpacing:'3px'
})

const Button = styled.button({
    padding:'10px',
    fontSize:'20px',
    backgroundColor:'transparent',
    cursor:'pointer '
})
 
 const Slider = () => {
    const [slideIndex, setSlideIndex]=useState(0);  

    const handleClick = (direction)=>{
         if(direction==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2)
         } else {
            setSlideIndex(slideIndex<2?slideIndex+1:0)
         }
    }

   return (
     <Container>
       <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined />
       </Arrow>
       <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item=>(

        <Slide bg={item.bg}>
            <ImgContainer>
                <Image src={item.img} key={item.id}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOW NOW</Button>
            </InfoContainer>
        </Slide>
    ))}
        
       </Wrapper>
       <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined />
       </Arrow>
     </Container>
   )
 }
 
 export default Slider
 