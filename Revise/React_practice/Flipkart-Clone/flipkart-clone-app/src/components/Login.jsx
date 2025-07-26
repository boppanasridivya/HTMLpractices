import React, { useState } from 'react'
import "./LoginDropDown.css"

const Login = () => {
  const[open,setOpen]=useState(false)
  return (
    <div className="Login-dropdown"
    onMouseEnter={()=>setOpen(true)}
    onMouseLeave={()=>setOpen(false)}
    >
      <button className="login-btn">
        <span><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"/></span>
        <span style={{fontSize:"18px"}}>Login</span>
        <span><i className="fa-solid fa-caret-down"></i></span>
      </button>
      
      {open && (
        <div className="dropdown-menu">
          <div className='dropdown-header'>
            <button className='Login-menu-btn'>Login</button>
             <span className='signup-Link'>Sign-Up</span>
          </div>
          <ul>
            <li>My Profile</li>
            <li>FlipkartPlus Zone</li>
            <li>My Orders</li>
            <li>WishList</li>
            <li>Rewards</li>
            <li>GiftCards</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Login


{/* <div style={{display:"flex",alignItems: "center", cursor: "pointer",textDecoration:"none",gap: "200px",justifyContent:'space-around'}} >
        <Link to="/login" style={{display:"flex",alignItems: "center", cursor: "pointer",textDecoration:"none",gap: "5px"}}>
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"/>
        <span style={{fontSize:"18px"}}>Login</span>
        <span><i class="fa-solid fa-caret-down"></i></span>
         </Link> */}