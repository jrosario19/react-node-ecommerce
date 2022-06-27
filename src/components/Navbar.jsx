import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core';

const Container = styled.div({
  height: '60px',
})

const Wrapper = styled.div({
   padding: '10px 20px',
   display:'flex',
   justifyContent:'space-between',
   alignItems:'center'
   
})

const Left = styled.div({
  flex: '1',
  display:'flex',
  alignItems:'center'
})

const Language = styled.span({
  fontSize: '14px',
  cursor:'pointer'
})

const SearchContainer = styled.div({
  border:'0.5px solid lightgray',
  display:'flex',
  alignItems:'center',
  marginLeft:'25px',
  padding:'5px'
})

const Input = styled.input({
  border:'none'
})

const Center = styled.div({
  flex: '1',
  textAlign:'Center'
})

const Logo = styled.h1({
  fontWeight:'bold'
})

const Right = styled.div({
  flex: '1',
  display:'flex',
  alignItems:'center',
  justifyContent:'flex-end'
})

const MenuItem = styled.div({
  fontSize:'14px',
  cursor:'pointer',
  marginLeft:'25px'
})

 const Navbar = () => {
   return (
     <Container>
      <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input/>
          <Search style={{color:'gray', fontSize:'16px'}}/>
        </SearchContainer>
      </Left>
      <Center><Logo>JRS.</Logo></Center>
      <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined/>
          </Badge>
        </MenuItem>
      </Right>
      </Wrapper>
       
     </Container>
   )
 }
 
 export default Navbar
 