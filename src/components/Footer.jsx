import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div({
     display: 'flex',
     
})

const Left = styled.div({
     flex:'1',
     display: 'flex',
     flexDirection: 'column',
     padding:'20px'    
})

const Logo = styled.h1({

})

const Desc = styled.p({
    margin:'20px 0px'
})

const SocialContainer = styled.div({
    display: 'flex',
    
})

const SocialIcon = styled.div((props)=>({
    width:'40px',
    height:'40px',
    borderRadius:'50%',
    color:'white',
    backgroundColor:props.color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
    
}))

const Center = styled.div({
    flex:'1',
    padding:'20px'
})

const Title = styled.h3({
    marginBottom: '30px',
})

const List = styled.ul({
    margin:'0',
    padding:'0',
    listStyle:'none',
    display: 'flex',
    flexWrap:'wrap'
})

const ListItem = styled.li({
    width:'50%',
    marginBottom: '10px',
    
})

const Right = styled.div({
    flex:'1',
    padding:'20px'
})

const ContactItem = styled.div({
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',

})

const Payment = styled.img({
    width:'50% '
})

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>JFRS.</Logo>
        <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the mojority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable. 
        </Desc>
        <SocialContainer>
            <SocialIcon color='#3b5999'>
                <Facebook/>
            </SocialIcon>
            <SocialIcon color='#e4405f'>
                <Instagram/>
            </SocialIcon>
            <SocialIcon color='#55acee'>
                <Twitter/>
            </SocialIcon>
            <SocialIcon color='#e60023'>
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accesories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight:'10px'}}/>
            Santo Dominto, Dominican Republic
        </ContactItem>
        <ContactItem>
            <Phone style={{marginRight:'10px'}}/>
            +1 (829) 637-1908
        </ContactItem>
        <ContactItem>
            <MailOutline style={{marginRight:'10px'}}/>
            contact@jfrs.com
        </ContactItem> 
        <Payment src='https://www.kindpng.com/picc/m/96-966565_payment-method-icons-png-transparent-png.png'/>
      </Right>
    </Container>
  )
}

export default Footer
