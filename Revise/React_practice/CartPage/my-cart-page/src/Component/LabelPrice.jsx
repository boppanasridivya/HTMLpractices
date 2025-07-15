import React from 'react'
import './CartItem.css'

const LabelPrice = ({label,price}) => {
  return (
    <div className="label-price">
      <p className='item-label'>Item:{label}</p>
      <p className='item-price'>INR:{price}</p>
    </div>
  )
}

export default LabelPrice
