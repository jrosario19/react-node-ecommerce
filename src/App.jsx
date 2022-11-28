import Cart from "./pages/Cart";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate 
} from 'react-router-dom'
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state=>state.user.currentUser);
  return (<Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:category" element={user ?<ProductList/>:<Login/>}/>
      <Route path="/product/:id" element={user ?<Product/>:<Login/>}/>
      <Route path="/cart" element={user ?<Cart/>:<Login/>}/>
      <Route path="/success" element={user ?<Success/>:<Login/>}/>
      
      <Route path="/Login" element={user ? <Navigate  to="/"/> :<Login/>}/>
          
      
      <Route path="/Register" element={!user ? <Navigate  to="/"/> :<Register/>}/>
    </Routes>
  </Router>);
};

export default App;