import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div({
     
})

const Wrapper = styled.div({
     padding:'20px',
     '@media(max-width: 380px)': {
        padding:'10px'
      }
})

const Title = styled.h1({
     fontWeight: '300',
     textAlign:'center'
})

const Top = styled.div({
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'space-between',
     padding:'20px'
     
})

const TopButton = styled.button((props)=>({
    padding:'10px',
    fontWeight: '600',
    cursor:'pointer',
    border:props.type==='filled' && 'none',
    backgroundColor:props.type==='filled' ? 'black':'transparent',
    color:props.type==='filled' && 'white',
    
    
}))

const TopTexts= styled.div({
    '@media(max-width: 380px)': {
       display:'none'
      }
})

const TopText= styled.span({
    textDecoration:'underline',
    cursor:'pointer',
    margin: '0px 10px'
})

const Bottom = styled.div({
     display: 'flex',
     justifyContent: 'space-between',
     '@media(max-width: 380px)': {
        flexDirection: 'column',
        
      }
})

const Info = styled.div({
     flex:'3'
})

const Product = styled.div({
 display: 'flex',
 justifyContent: 'space-between',
 '@media(max-width: 380px)': {
    flexDirection: 'column',
    
  }  
 
})

const ProductDetail = styled.div({
 flex:'2',
 display: 'flex',
 
})

const Image = styled.img({
    width:'200px'
})

const Details = styled.div({
    padding:'20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    
})

const ProductName = styled.span({
    
})

const ProductId = styled.span({
    
})

const ProductColor = styled.div((props)=>({
    width:'20px',
    height:'20px',
    borderRadius:'50%',
    backgroundColor:props.color
}))

const ProductSize = styled.span({
    
})

const PriceDetail = styled.span({
    flex:'1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    
})

const ProductAmountContainer = styled.div({
    display: 'flex',
     alignItems: 'center',
     marginBottom: '20px',
     
      
})

const ProductAmount = styled.div({
     fontSize:'24px',
     margin:'5px',
     '@media(max-width: 380px)': {
        margin: '5px 15px',
        
      }
})

const ProductPrice = styled.div({
    fontSize:'30px',
    fontWeight: '200',
    '@media(max-width: 380px)': {
        marginBottom: '20px',
        
      }
    
})

const Hr = styled.hr({
    backgroundColor:'#eee',
    border:'none',
    height:'1px'
})

const Summary  = styled.div({
     flex:'1',
     border:'0.5px solid lightgray',
     borderRadius:'10px',
     padding:'20px',
     height:'50vh'
})

const SummaryTitle = styled.h1({
    fontWeight: '200',
    
})

const SummaryItem = styled.div((props)=>({
    margin:'30px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: props.type==='total' && '500',
    fontSize: props.type==='total' && '24px',
    
}))

const SummaryItemText = styled.span({
    
})

const SummaryItemPrice = styled.span({
    
})

const Button = styled.button({
    width:'100%',
    padding:'10px',
    backgroundColor:'black',
    color:'white',
    fontWeight: '600',
    
})

const Cart = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag (1)</TopText>
                <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type='filled'>CHECKOUT NOW </TopButton>
        </Top>
        <Bottom>
            <Info>
                 <Product>
                    <ProductDetail>
                        <Image src='https://media.gq.com/photos/61532ba0181a410604dd430c/master/w_2000,h_1333,c_limit/Adidas-Originals-Superstar-shoes.jpg'/>
                        <Details>
                            <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                            <ProductId><b>ID:</b> 9381318293</ProductId>
                            <ProductColor color='black'/>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>

                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                                <ProductAmount>2</ProductAmount>
                            <Remove/>    
                        </ProductAmountContainer>
                        <ProductPrice>$ 30</ProductPrice> 
                    </PriceDetail>
                 </Product>
                 <Hr/>
                 <Product>
                    <ProductDetail>
                        <Image src='https://media.gq.com/photos/61532ba0181a410604dd430c/master/w_2000,h_1333,c_limit/Adidas-Originals-Superstar-shoes.jpg'/>
                        <Details>
                            <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                            <ProductId><b>ID:</b> 9381318293</ProductId>
                            <ProductColor color='black'/>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>

                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                                <ProductAmount>2</ProductAmount>
                            <Remove/>    
                        </ProductAmountContainer>
                        <ProductPrice>$ 30</ProductPrice> 
                    </PriceDetail>
                 </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type='total'>
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
