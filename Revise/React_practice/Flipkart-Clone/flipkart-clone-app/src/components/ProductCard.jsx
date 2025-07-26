import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ProductCard = ({id,name,image,price,quantity}) => {

  const{addToCart} = useContext(CartContext)

  return (
    
    <div style={{ paddingTop:"80px",width:"250px", paddingRight:"20px",paddingLeft:"20px",fontFamily:"Arial, sans-serif"}}> 

      <img src={image} alt={name} width="150px" />
      <h2>{name}</h2>
      <p>Price:{price}</p>
      {/* <p>quantity:{quantity}</p> */}
      <Link to={`/product/${id}`}>
      {/* <button>View Details</button> */}
      <button onClick={()=>addToCart({id,image,name,price})}>Add to Cart</button>
      </Link>
      
    </div>
  )
}

export default ProductCard
