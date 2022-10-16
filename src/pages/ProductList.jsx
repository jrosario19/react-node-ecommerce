import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Container = styled.div({

})

const Title = styled.h1({
    margin:'20px'
})

const FilterContainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    
})

const Filter = styled.div({
    margin:'20px',
    '@media(max-width: 380px)': {
        display:'flex',
        flexDirection: 'column',
        margin:'0px 20px'
      }
})

const FilterText = styled.span({
    fontSize:'20px',
    fontWeight: '600',
    marginRight: '20px',
    '@media(max-width: 380px)': {
        marginRight:'0px '
      }
    
})

const Select = styled.select({
    padding:'10px',
    marginRight: '20px',
    '@media(max-width: 380px)': {
        margin:'10px 0px '
      }
    
})

const Option = styled.option({
    
})

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');
  const hendleFilters = (e) => {
    const value = e.target.value;
    setFilters({
        ...filters,
        [e.target.name]: value
    });
  };
  

  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name='color' onChange={hendleFilters}>
                <Option disabled>
                    Color
                </Option>
                <Option>white</Option>
                <Option>black</Option>
                <Option>red</Option>
                <Option>blue</Option>
                <Option>yellow</Option>
                <Option>green</Option>
            </Select>
            <Select name='size' onChange={hendleFilters}>
                <Option disabled>
                    Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={e=>setSort(e.target.value)}>
                <Option value="newest">Newest</Option>
                <Option value="asc">Price (asc)</Option>
                <Option value="desc">Price (desc)</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
