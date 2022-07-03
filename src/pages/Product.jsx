import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div({

})

const Wrapper = styled.div({
    padding:'50px',
    display: 'flex',
    '@media(max-width: 380px)': {
        flexDirection: 'column',
        padding:'10px'
      }
})

const ImgContainer = styled.div({
    flex:'1'
})

const Image = styled.img({
    width:'100%',
    height:'90vh',
    '@media(max-width: 380px)': {
        height:'40vh'
      }
})

const InfoContainer = styled.div({
    flex:'1',
    padding:'0px 50px',
    '@media(max-width: 380px)': {
        padding:'10px '
      }
})

const Title = styled.h1({
    fontWeight: '200',
    
})

const Desc = styled.p({
    margin:'20px 0px'
})

const Price = styled.span({
    fontWeight: '100',
    fontSize:'40px'
})

const FilterContainer = styled.div({
 display: 'flex',
 justifyContent: 'space-between',
 width:'50%',
 margin:'30px 0px',
 '@media(max-width: 380px)': {
    width:'99%'
  }
})

const Filter = styled.div({
 display: 'flex',
 alignItems: 'center',
 
})

const FilterTitle = styled.span({
    fontSize:'20px',
    fontWeight: '200',
    
})

const FilterColor = styled.div((props)=>({
    width:'20px',
    height:'20px',
    borderRadius:'50%',
    backgroundColor:props.color,
    margin:'0px 5px',
    cursor:'pointer'
}))

const FilterSize = styled.select({
    margin:'10px',
    padding:'5px'
})

const FilterSizeOption = styled.option ({
    padding:'0'
})

const AddContainer = styled.div ({
    display: 'flex',
    alignItems: 'center',
    width:'50%',
    justifyContent: 'space-between',
    '@media(max-width: 380px)': {
        width:'100%'
      }
    
})

const AmountContainer = styled.div ({
    display: 'flex',
    alignItems: 'center',
    fontWeight: '700',
    
})

const Amount = styled.span ({
    width:'30px',
    height:'30px',
    borderRadius:'10px',
    border:'1px solid teal',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'0px 5px'
})

const Button = styled.button ({
     padding:'15px',
     border:'2px solid teal',
     backgroundColor:'white',
     cursor:'pointer',
     fontWeight: '500',
     ":hover":{
        backgroundColor:'#f8f4f4',
        transform:'scale(1.1)'
    }
     
})

const Product = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
        <ImgContainer>
            <Image src='https://global-uploads.webflow.com/6256995755a7ea0a3d8fbd11/626bb702e68270a463952048_539292.jpg'/>
        </ImgContainer>  
        <InfoContainer>
            <Title>Denin Jersey</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa maiores eius nihil, quae, aut repellat qui unde at a architecto eligendi odio maxime nam possimus omnis praesentium aliquid libero. Nulla?</Desc>
            <Price>$ 20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color='black'/>
                    <FilterColor color='darkblue'/>
                    <FilterColor color='gray'/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART </Button>
            </AddContainer>
        </InfoContainer> 
      </Wrapper>  
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
