import { Add, Remove } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import StripeCheckout from  'react-stripe-checkout'
import {userRequest} from '../requestMethod'
const dotenv = require("dotenv")


dotenv.config()
const KEY = process.env.REACT_APP_STRIPE

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
    
    const cart = useSelector(state=>state.cart)
    const [stripeToken, setStripeToken] = useState(null)
    const history = useNavigate()
    const onToken = (token) => {
        setStripeToken(token);
    }
    useEffect(()=>{
        const makeRequest = async ()=>{
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 500,
                })
                const data = {stripeData:res.data,products:cart}
                history("/success",{state:data})
            } catch (error) {
                
            }
        };
       stripeToken && makeRequest();
    },[stripeToken, cart.total, history])

   

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
                 {cart.products.map((product)=>(

                     <Product>
                    <ProductDetail>
                        <Image src={product.img}/>
                        <Details>
                            <ProductName><b>Product:</b> {product.title}</ProductName>
                            <ProductId><b>ID:</b> {product._id}</ProductId>
                            <ProductColor color={product.color}/>
                            <ProductSize><b>Size:</b> {product.size}</ProductSize>

                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                                <ProductAmount>{product.quantity}</ProductAmount>
                            <Remove/>    
                        </ProductAmountContainer>
                        <ProductPrice>$ {product.price * product.quantity}</ProductPrice> 
                    </PriceDetail>
                 </Product>
                 ))
                 }
                 <Hr/>
                 
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
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
                    <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <StripeCheckout
                name="JFRS Shop"
                image='https://avatars.githubusercontent.com/u/1486366?v=4'
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total}`}
                amount={cart.total*100}
                token={onToken}
                stripeKey={KEY}>
                    <Button>CHECKOUT NOW</Button>
                </StripeCheckout>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
