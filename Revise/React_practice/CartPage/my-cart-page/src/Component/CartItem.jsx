import React from 'react'
import LabelPrice from './LabelPrice'
import Quantity from './Quantity'
import './CartItem.css'

const CartItem = ({id, label, price,quantity,changeQuantity}) => {
  return (
    <div className="cart-item">
      <LabelPrice label={label} price={price}/>
      <Quantity quantity={quantity} changeQuantity={changeQuantity} id={id}/>
    </div>
  )
}

export default CartItem
