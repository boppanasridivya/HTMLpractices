import React from 'react'
import Home from './pages/Home'
import { NavLink, Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'
import Navbar from './components/Navbar'
import Login from './components/Login'


//this we can use in NavLink separately also but it creates large code and not readbale so just create funt and use whenever required
const navLinkStyle=({isActive})=>({
  fontWeight:isActive?"Bold":"normal",
  textDecoration:isActive?"underline":"none"
});

const App = () => {
  return (
    <div>
       <Navbar/>
      {/* <h1>Flipkart clone app</h1> */}
      {/* <nav style={{display:"flex" ,gap:"20px", padding:"15px"}}>
    <NavLink to="/" style={navLinkStyle}>
     Home
    </NavLink>
    <NavLink to="/cart" style={navLinkStyle}>
     CartPage
    </NavLink>
      </nav> */}

     

      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/'  element={<Navbar/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
