import React, { useState } from 'react'
import CartItem from './CartItem'
import Total from './Total';


    let cartItems = [
        {id:1,label:"Biryani",price : 150, quantity:1},
        {id:2,label:"noodles",price : 100, quantity:1},
        {id:3,label:"pizza",price : 190, quantity:1}
    ];

const CartContainer = () => {
const[cart, setCart] = useState(cartItems);


//to get the total price we need to use reduce operation
const totalPrice = cart.reduce((bag,item)=>{
      return bag+item.price*item.quantity;
},0);
console.log(totalPrice);

//to change the quantity based on add and removing the items
const changeQuantity =(id, value) =>{
  let updateCart = cart.map((item)=>{
    let newQuantity = item.quantity+value;
    newQuantity = newQuantity > 0 ? newQuantity : 0;
    return item.id === id ? { ...item, quantity: newQuantity } : item;

  })
  setCart(updateCart);
}


  return (
    <div>
        {cart.map((item) =>{
            return <CartItem key={item.id} {...item} changeQuantity={changeQuantity}/>
        })}
       <Total  totalPrice={totalPrice}/>
    </div>
  )
}

export default CartContainer
