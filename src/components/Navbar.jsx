import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"



const Container = styled.div({
  height: '60px',
  '@media(max-width: 380px)': {
    height:'50px'
  }
})

const Wrapper = styled.div({
   padding: '10px 20px',
   display:'flex',
   justifyContent:'space-between',
   alignItems:'center',
   '@media(max-width: 380px)': {
    padding:'10px 0px'
  }
})

const Left = styled.div({
  flex: '1',
  display:'flex',
  alignItems:'center'
})

const Language = styled.span({
  fontSize: '14px',
  cursor:'pointer',
  '@media(max-width: 380px)': {
    display:'none'
  }
})

const SearchContainer = styled.div({
  border:'0.5px solid lightgray',
  display:'flex',
  alignItems:'center',
  marginLeft:'25px',
  padding:'5px'
})

const Input = styled.input({
  border:'none',
  '@media(max-width: 380px)': {
    width:'50px'
  }
})

const Center = styled.div({
  flex: '1',
  textAlign:'Center'
})

const Logo = styled.h1({
  fontWeight:'bold',
  '@media(max-width: 380px)': {
    fontSize:'24px'
  }
})

const Right = styled.div({
  flex: '1',
  display:'flex',
  alignItems:'center',
  justifyContent:'flex-end',
  '@media(max-width: 380px)': {
    justifyContent: 'center',
    flex:'2'
    
  }
})

const MenuItem = styled.div({
  fontSize:'14px',
  cursor:'pointer',
  marginLeft:'25px',
  '@media(max-width: 380px)': {
    fontSize:'12px',
    marginLeft: '10px',
    
  }
})

 const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
   return (
     <Container>
      <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder='Search'/>
          <Search style={{color:'gray', fontSize:'16px'}}/>
        </SearchContainer>
      </Left>
      <Center><Logo>JFRS.</Logo></Center>
      <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <Link to='/cart'>
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
        </Link>
      </Right>
      </Wrapper>
       
     </Container>
   )
 }
 
 export default Navbar
 