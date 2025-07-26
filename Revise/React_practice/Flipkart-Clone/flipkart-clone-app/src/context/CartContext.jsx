import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const[cartItems, setCartItems]= useState([]);

const addToCart = (product) => {
  setCartItems((prev) => {
    const existingItem = prev.find(item => item.id === product.id);

    if (existingItem) {
      // If product exists, increase quantity
      return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // If new product, add with quantity 1
      return [...prev, { ...product, quantity: 1 }];
    }
  });
};
//removing the item in the cart one by one
const decreaseQuantity =(id) =>{
  const updateCart = cartItems.map((item)=>item.id===id?
  {...item, quantity:item.quantity-1}: item
)
.filter((item)=>item.quantity>0);

setCartItems(updateCart);
}

    const removeFromCart=(id) => {
        setCartItems((prev)=>prev.filter((item)=> item.id !== id));
    }
// const removeFromCart = (id) => {
//   setCartItems((prev) => {
//     return prev.reduce((acc, item) => {
//       if (item.id === id) {
//         if (item.quantity > 1) {
//           // Decrease quantity by 1
//           acc.push({ ...item, quantity: item.quantity - 1 });
//         }
//         // If quantity is 1, do not add item back → effectively remove it
//       } else {
//         acc.push(item); // keep other items as is
//       }
//       return acc;
//     }, []);
//   });
// };



  return (
 
        <CartContext.Provider value={{cartItems,addToCart,decreaseQuantity,removeFromCart}}>
         {children}
        </CartContext.Provider>

  )
}
export default CartProvider