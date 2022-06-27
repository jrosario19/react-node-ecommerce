import styled from "styled-components"

const Container = styled.div({
    flex:1,
    margin:'3px',
    height:'70vh',
    position:'relative'
})

const Image = styled.img({
    width:'100%',
    height:'100%',
})

const Info = styled.div({
    position:'absolute',
    width:'100%',
    height:'100%',
    top:'0',
    left:'0',
    display:'flex',
    alignItems:"center",
    flexDirection:'column',
    justifyContent:'center'
})

const Title = styled.h1({
    color:'white',
    marginBottom:'20px'
})

const Button = styled.button({
    border:'none',
    padding:'10px',
    backgroundColor:'white',
    color: 'gray',
    cursor:'pointer',
    fontWeight:'600'
})



const CategoryItem=({item})=> {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
