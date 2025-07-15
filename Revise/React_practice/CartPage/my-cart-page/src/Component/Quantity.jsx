import React from 'react'
import './CartItem.css'

const Quantity = ({quantity,id,changeQuantity}) => {
  return (
    <div className="quantity">
      <button onClick={()=>changeQuantity(id, -1)}>-</button>
      <p>{quantity}</p>
      <button onClick={() => changeQuantity(id, +1)}>+</button>
    </div>
  )
}

export default Quantity
