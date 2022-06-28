import zIndex from '@material-ui/core/styles/zIndex'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingBasketOutlined } from '@material-ui/icons'
import styled from 'styled-components'

const Info = styled.div({
    width:'100%',
    opacity:'0',
    height:'100%',
    position:'absolute',
    top:'0',
    left:'0',
    backgroundColor:'rgba(0,0,0,0.2)',
    zIndex:'3',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    transition:'all 0.5s ease',
    cursor:'pointer'
})



const Container = styled.div({
    flex:'1',
    margin:'5px',
    minWidth:'300px',
    height:'350px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#f5fbfd',
    position:'relative',
    [`:hover ${Info}`]:{
        opacity:'1'
    }
})

const Circle = styled.div({
    width:'200px',
    height:'200px',
    borderRadius:'50%',
    backgroundColor:"white",
    position:'absolute '

})

const Image = styled.img({
    height:'75%',
    zIndex:'2'
})



const Icon = styled.div({
    width:'40px',
    height:'40px',
    borderRadius:'50%',
    backgroundColor:'white',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    margin:'10px',
    transition:'all 0.5s ease',
    ":hover":{
        backgroundColor:'#e9f5f5',
        transform:'scale(1.1)'
    }
})
const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingBasketOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
      
    
  )
}

export default Product
