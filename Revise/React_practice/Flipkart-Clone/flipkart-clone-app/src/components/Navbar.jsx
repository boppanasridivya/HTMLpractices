import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './Login';


const Navbar = () => {

    const {cartItems} = useContext(CartContext)
    const itemCount = cartItems.reduce((sum,item)=>sum+item.price*item.quantity,0);

  return (
    <div>
      <nav
      style={{display:"flex",
      justifyContent:"space-between",
      padding:"15px", 
      top:"0px",
      marginTop:"0px",
      width:"100%",
      position:"fixed",
      zIndex: "1000", 
      left:"0px",
      right:"0px",
      backgroundColor:"white"}}>

         {/* logo */}
        <Link to="/" style={{textDecoration:"none"}}>
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"/>
        </Link>
        
        {/* search bar */}
        <div style={{width:"40%", borderRadius:"5px",outline: 'none',border:"none", backgroundColor: '#e0f7fa',fontSize: "16px",display:"flex",alignItems:"center",gap:"4px",paddingLeft:"5px"}}>
        <span ><i className="fa-solid fa-magnifying-glass"></i></span>
        <input type="text" placeholder='search for products, Brands and more' 
        style={{outline: 'none',border:"none", backgroundColor: '#e0f7fa',fontSize: "16px"}}/>

        </div>
       
        

        {/* Login  */}
        <div style={{display:"flex",alignItems: "center", cursor: "pointer",textDecoration:"none",gap: "200px",justifyContent:'space-around'}} >
        <Link to="/login" style={{display:"flex",alignItems: "center", cursor: "pointer",textDecoration:"none",gap: "5px"}}>
       <Login/>
         </Link>


        {/* Cart */}
        <Link to="/cart" style={{display:"flex",alignItems: "center", cursor: "pointer",textDecoration:"none",gap: "5px",paddingRight:"200px"}}>
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"/>
        <span style={{fontSize:"18px"}}>Cart</span>
        </Link>
       
        </div>
        

      </nav>
    </div>
  )
}

export default Navbar
