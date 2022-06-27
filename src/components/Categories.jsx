import styled from "styled-components"
import { categories } from "../data"
import

const Container = styled.div({
    
}) 

function Categories() {
  return (
    <Container>
      {categories.map(item=>(
        <CategoryItem> </CategoryItem>
      ))}
    </Container>
  )
}

export default Categories
