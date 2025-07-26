import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartPage = () => {
  const {cartItems,removeFromCart,addToCart,decreaseQuantity} = useContext(CartContext)

  const total = cartItems.reduce((sum,item)=>{
    return  sum+item.price*item.quantity;
  },0)
  return (
    <div>
      <h2>Add product here</h2>
      {cartItems.length === 0 ? (<p>No items in a cart view</p>):
      (cartItems.map((item)=>{
        console.log("item id is:", item.id);
        return (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <img src={item.image} alt={item.title} width="150px"/>
            <p>INR:{item.price}</p>
            <div style={{display:"flex", padding:"5px", gap:"10px", alignItems:"center"}}>
            <button style={{padding:"10px"}} onClick={()=>decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button  style={{padding:"10px"}} onClick={()=>addToCart(item)}>+</button>
            <button style={{padding:"10px"}} onClick={()=>removeFromCart(item.id)}>Remove</button>
            </div>
           

            
          </div>
        )
      }))
      }
      <h3>Total:{total}</h3>
    </div>
  )
}

export default CartPage
