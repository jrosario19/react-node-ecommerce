import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import {useLocation} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartRedux'

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
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product, setProduct]= useState({});
    const [quantity, setQuantity]= useState(1);
    const [color, setColor]= useState("");
    const [size, setSize]= useState("");
    const dispatch = useDispatch()

    useEffect(()=>{
        const getProduct = async ()=>{
            try {
                //const res = await axios.get("https://ecommerce-jfrs.herokuapp.com/api/products/find/"+id);
                const res = await axios.get("http://localhost:5000/api/products/find/"+id);
                setProduct(res.data);
            } catch (error) {
                
            }
        }
        getProduct();
    }, [id])

    const handleQuantity = (type)=>{
        if(type==="dec"){
            quantity>1 && setQuantity(quantity-1)
        }else{
            setQuantity(quantity+1)
        }
    }

    const handleClick = () =>{
        dispatch(addProduct({...product, quantity, color, size}));
    }
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
        <ImgContainer>
            <Image src={product.img}/>
        </ImgContainer>  
        <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>$ {product.price}</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    {product.color?.map((c)=>(
                        <FilterColor color={c} key={c} onClick={()=>setColor(c)} />
                    ))}
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize onChange={(e)=>setSize(e.target.value)}>
                        <FilterSizeOption >Select</FilterSizeOption>
                        {product.size?.map((s)=>(
                        <FilterSizeOption key={s}>{s}</FilterSizeOption>
                    ))}
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove onClick={()=>handleQuantity("dec")}/>
                    <Amount>{quantity}</Amount>
                    <Add onClick={()=>handleQuantity("inc")}/>
                </AmountContainer>
                <Button onClick={handleClick}>ADD TO CART </Button>
            </AddContainer>
        </InfoContainer> 
      </Wrapper>  
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
